// Admin API
// This file abstracts admin-related API calls for Express.js connectivity

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  permissions: string[];
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'responded';
  createdAt: string;
}

export interface AdminStats {
  totalUsers: number;
  totalWorkers: number;
  totalRequests: number;
  activeRequests: number;
  completedRequests: number;
  totalRevenue: number;
  monthlyGrowth: number;
}

// TODO: Replace these with Express.js API calls
export const adminAPI = {
  // Admin login
  adminLogin: async (credentials: { email: string; password: string }): Promise<{ admin: AdminUser; token: string }> => {
    // Future: POST /api/admin/login
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get dashboard stats
  getDashboardStats: async (): Promise<AdminStats> => {
    // Future: GET /api/admin/stats
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get all users
  getAllUsers: async (): Promise<any[]> => {
    // Future: GET /api/admin/users
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get all workers
  getAllWorkers: async (): Promise<Worker[]> => {
    // Future: GET /api/admin/workers
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get all requests
  getAllRequests: async (): Promise<any[]> => {
    // Future: GET /api/admin/requests
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Get contact messages
  getContactMessages: async (): Promise<ContactMessage[]> => {
    // Future: GET /api/admin/contacts
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Update contact message status
  updateContactStatus: async (id: string, status: ContactMessage['status']): Promise<void> => {
    // Future: PUT /api/admin/contacts/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Approve/reject worker
  updateWorkerStatus: async (workerId: string, status: 'approved' | 'rejected'): Promise<void> => {
    // Future: PUT /api/admin/workers/:id/status
    throw new Error('Not implemented - replace with Express.js endpoint');
  },

  // Delete user
  deleteUser: async (userId: string): Promise<void> => {
    // Future: DELETE /api/admin/users/:id
    throw new Error('Not implemented - replace with Express.js endpoint');
  }
};