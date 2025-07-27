// Services API
// This file abstracts service-related API calls for Express.js connectivity

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  imageUrl?: string;
  createdAt: string;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  serviceId: string;
  workerId?: string;
  title: string;
  description: string;
  location: string;
  budget: number;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  urgency: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

// TODO: Replace these with Express.js API calls
export const servicesAPI = {
  // Get all services
  getAllServices: async (): Promise<Service[]> => {
    // Future: GET /api/services
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get service by ID
  getServiceById: async (id: string): Promise<Service | null> => {
    // Future: GET /api/services/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Create service request
  createRequest: async (request: Omit<ServiceRequest, 'id' | 'createdAt' | 'updatedAt'>): Promise<ServiceRequest> => {
    // Future: POST /api/requests
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get user's requests
  getUserRequests: async (userId: string): Promise<ServiceRequest[]> => {
    // Future: GET /api/requests/user/:userId
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Update request
  updateRequest: async (id: string, updates: Partial<ServiceRequest>): Promise<ServiceRequest> => {
    // Future: PUT /api/requests/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Delete request
  deleteRequest: async (id: string): Promise<void> => {
    // Future: DELETE /api/requests/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  }
};