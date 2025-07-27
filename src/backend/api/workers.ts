// Workers API
// This file abstracts worker-related API calls for Express.js connectivity

export interface Worker {
  id: string;
  userId: string;
  businessName: string;
  description: string;
  services: string[];
  location: string;
  phone: string;
  experience: number;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'offline';
  rating: number;
  reviewCount: number;
  profileImage?: string;
  portfolio: string[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkerReview {
  id: string;
  workerId: string;
  userId: string;
  requestId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface SearchFilters {
  services?: string[];
  location?: string;
  minRating?: number;
  maxHourlyRate?: number;
  availability?: string;
}

// TODO: Replace these with Express.js API calls
export const workersAPI = {
  // Register as worker
  registerWorker: async (workerData: Omit<Worker, 'id' | 'createdAt' | 'updatedAt'>): Promise<Worker> => {
    // Future: POST /api/workers/register
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Search workers
  searchWorkers: async (filters: SearchFilters): Promise<Worker[]> => {
    // Future: GET /api/workers/search
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get worker profile
  getWorkerProfile: async (id: string): Promise<Worker | null> => {
    // Future: GET /api/workers/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Update worker profile
  updateWorkerProfile: async (id: string, updates: Partial<Worker>): Promise<Worker> => {
    // Future: PUT /api/workers/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get worker reviews
  getWorkerReviews: async (workerId: string): Promise<WorkerReview[]> => {
    // Future: GET /api/workers/:id/reviews
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Add review
  addReview: async (review: Omit<WorkerReview, 'id' | 'createdAt'>): Promise<WorkerReview> => {
    // Future: POST /api/reviews
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get worker's assigned requests
  getWorkerRequests: async (workerId: string): Promise<any[]> => {
    // Future: GET /api/workers/:id/requests
    throw new Error('Not implemented - replace with Express.js endpoint');
  }
};