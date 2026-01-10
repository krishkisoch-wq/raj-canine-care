# Raj Canine Care - API Contracts

## Contact Form API

### Frontend Implementation
**Location**: `/app/frontend/src/components/ContactSection.jsx`

**Current State**: 
- Form has mock submission (setTimeout simulation)
- Form fields: name, phone, email, petType, message
- Toast notification on success

**Mock Data**: 
- Mock submission with 1 second delay in ContactSection.jsx (lines 25-36)

### Backend Requirements

#### 1. Create Contact Model
**File**: `/app/backend/models/contact.py`
```python
- id: UUID (auto-generated)
- name: String (required)
- phone: String (required)
- email: String (optional)
- pet_type: String (optional)
- message: String (required)
- created_at: DateTime (auto-generated)
- status: String (default: "new") # new, contacted, resolved
```

#### 2. Create Contact API Endpoint
**File**: `/app/backend/server.py`

**Endpoint**: `POST /api/contact`
**Request Body**:
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "petType": "string",
  "message": "string"
}
```

**Response**: 
```json
{
  "id": "uuid",
  "name": "string",
  "phone": "string",
  "email": "string",
  "pet_type": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "new"
}
```

**Endpoint**: `GET /api/contacts` (for admin to view submissions)
**Response**: Array of contact objects

#### 3. Frontend Integration
**File**: `/app/frontend/src/components/ContactSection.jsx`

**Changes**:
- Remove mock setTimeout
- Add axios POST call to `/api/contact`
- Map `petType` to `pet_type` for backend
- Handle error states with toast
- Show success message on 200 response

## Integration Steps

1. Create Contact model in backend
2. Add POST /api/contact endpoint
3. Add GET /api/contacts endpoint (optional, for viewing submissions)
4. Update ContactSection.jsx to use real API
5. Test form submission
6. Verify data is saved to MongoDB

## Notes
- All API routes must use `/api` prefix (Kubernetes ingress rule)
- Use `REACT_APP_BACKEND_URL` from frontend/.env
- Backend uses MongoDB via `MONGO_URL` from backend/.env
