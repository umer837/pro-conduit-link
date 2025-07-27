# Backend Integration Folder

This folder contains the abstraction layer for backend connectivity, designed to easily replace Supabase with Express.js + MongoDB.

## Structure

```
src/backend/
├── api/                 # API service files
│   ├── auth.ts         # Authentication services
│   ├── services.ts     # Service request management
│   ├── workers.ts      # Worker profile management
│   └── admin.ts        # Admin panel services
├── config/
│   └── api.ts          # API configuration and HTTP client
└── README.md           # This file
```

## Usage

### Current State (Placeholder)
All API functions currently throw "Not implemented" errors. This is intentional - they serve as contracts for what needs to be implemented with Express.js.

### Future Express.js Integration

1. **Replace the API functions** in each service file with actual HTTP calls to your Express.js endpoints
2. **Update API_CONFIG** in `config/api.ts` with your backend URL
3. **Use the APIClient** class to make authenticated requests

### Example Migration

**Before (Supabase):**
```typescript
// Current placeholder
login: async (credentials: LoginCredentials) => {
  throw new Error('Not implemented');
}
```

**After (Express.js):**
```typescript
// With Express.js backend
login: async (credentials: LoginCredentials) => {
  return apiClient.post<{user: User; token: string}>(
    ENDPOINTS.AUTH.LOGIN, 
    credentials
  );
}
```

## API Endpoints Expected

Your Express.js backend should implement these endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh token

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/requests` - Create service request
- `GET /api/requests/user/:userId` - Get user's requests
- `PUT /api/requests/:id` - Update request

### Workers
- `POST /api/workers/register` - Register as worker
- `GET /api/workers/search` - Search workers
- `GET /api/workers/:id` - Get worker profile
- `PUT /api/workers/:id` - Update worker profile
- `GET /api/workers/:id/reviews` - Get worker reviews

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - Get all users
- `GET /api/admin/workers` - Get all workers
- `GET /api/admin/requests` - Get all requests

## Environment Variables

Create a `.env` file in your project root:

```env
# Express.js Backend URL
VITE_API_BASE_URL=http://localhost:5000/api

# For production
# VITE_API_BASE_URL=https://your-domain.com/api
```

## Security Considerations

- All API calls include authentication headers when user is logged in
- Tokens are automatically attached to requests
- Request timeout is configured to prevent hanging requests
- Error handling is built into the APIClient class

## Next Steps

1. Set up your Express.js + MongoDB backend
2. Implement the API endpoints listed above
3. Replace the placeholder functions with actual API calls
4. Test the integration
5. Remove any remaining Supabase dependencies