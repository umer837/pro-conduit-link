// Authentication API services
// This file abstracts authentication calls and can be easily replaced with Express.js endpoints

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  role?: 'user' | 'worker';
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
}

// TODO: Replace these Supabase calls with Express.js API calls
export const authAPI = {
  // Login user
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
    // Current: Supabase auth
    // Future: POST /api/auth/login
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Register user
  register: async (data: RegisterData): Promise<{ user: User; token: string }> => {
    // Current: Supabase auth
    // Future: POST /api/auth/register
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Logout user
  logout: async (): Promise<void> => {
    // Current: Supabase auth
    // Future: POST /api/auth/logout
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get current user
  getCurrentUser: async (): Promise<User | null> => {
    // Current: Supabase auth
    // Future: GET /api/auth/me
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Refresh token
  refreshToken: async (): Promise<string> => {
    // Current: Supabase auth
    // Future: POST /api/auth/refresh
    throw new Error('Not implemented - replace with Express.js endpoint');
  }
};