// API Configuration
// This file contains the base configuration for API calls

export const API_CONFIG = {
  // Base URL for Express.js backend
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com/api' 
    : 'http://localhost:5000/api',
  
  // Request timeout
  TIMEOUT: 10000,
  
  // Default headers
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

// API endpoints mapping
export const ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me'
  },
  
  // Services endpoints
  SERVICES: {
    LIST: '/services',
    BY_ID: (id: string) => `/services/${id}`,
    REQUESTS: '/requests',
    USER_REQUESTS: (userId: string) => `/requests/user/${userId}`,
    REQUEST_BY_ID: (id: string) => `/requests/${id}`
  },
  
  // Workers endpoints
  WORKERS: {
    REGISTER: '/workers/register',
    SEARCH: '/workers/search',
    BY_ID: (id: string) => `/workers/${id}`,
    REVIEWS: (id: string) => `/workers/${id}/reviews`,
    REQUESTS: (id: string) => `/workers/${id}/requests`
  },
  
  // Admin endpoints
  ADMIN: {
    LOGIN: '/admin/login',
    STATS: '/admin/stats',
    USERS: '/admin/users',
    WORKERS: '/admin/workers',
    REQUESTS: '/admin/requests',
    CONTACTS: '/admin/contacts',
    CONTACT_STATUS: (id: string) => `/admin/contacts/${id}`,
    WORKER_STATUS: (id: string) => `/admin/workers/${id}/status`,
    DELETE_USER: (id: string) => `/admin/users/${id}`
  },
  
  // Reviews endpoints
  REVIEWS: {
    CREATE: '/reviews',
    BY_WORKER: (workerId: string) => `/reviews/worker/${workerId}`
  }
};

// HTTP client wrapper for future Express.js integration
export class APIClient {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
    this.defaultHeaders = API_CONFIG.HEADERS;
  }

  // Set authorization token
  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Remove authorization token
  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  // Generic request method
  async request<T>(
    endpoint: string, 
    options: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
      data?: any;
      headers?: Record<string, string>;
    } = {}
  ): Promise<T> {
    const { method = 'GET', data, headers = {} } = options;
    
    const config: RequestInit = {
      method,
      headers: { ...this.defaultHeaders, ...headers },
      signal: AbortSignal.timeout(this.timeout)
    };

    if (data && ['POST', 'PUT'].includes(method)) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Convenience methods
  get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', headers });
  }

  post<T>(endpoint: string, data?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', data, headers });
  }

  put<T>(endpoint: string, data?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', data, headers });
  }

  delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', headers });
  }
}

// Export singleton instance
export const apiClient = new APIClient();