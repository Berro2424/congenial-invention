
# Milestone 5 Testing Notes

## Successful Login

POST /auth/login

Body:
{
  "email": "test@example.com",
  "password": "password123"
}

Expected Result:
A JWT token is returned after successful login.

## Protected Reservation Route

POST /api/reservations

Headers:
Authorization: Bearer JWT_TOKEN_HERE

Expected Result:
Authenticated users can create reservations.

## Missing Token

POST /api/reservations

Expected Result:
A 401 error is returned when no token is provided.

## Admin Role Protection

POST /api/resources

Headers:
Authorization: Bearer USER_TOKEN_HERE

Expected Result:
A normal user receives a 403 Access Denied error.

## Admin Access Success

POST /api/resources

Headers:
Authorization: Bearer ADMIN_TOKEN_HERE

Expected Result:
An admin user can create resources successfully.