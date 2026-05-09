# Backend Reservation System API

## Project Overview

This project is a backend reservation system built using Node.js, Express, and MySQL. The API allows users to register, log in, create reservations, and manage resources. Authentication and authorization are implemented using JWT and role-based middleware.

## Technology Stack

- Node.js
- Express.js
- MySQL
- mysql2
- bcrypt
- jsonwebtoken
- GitHub

## Setup Instructions

1. Clone the repository
2. Open the project in VS Code
3. Install dependencies using:

npm install

## Environment Variables

Create a .env file and include:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=reservation_system
JWT_SECRET=your_secret_key

## Database Initialization Steps

1. Create the MySQL database
2. Run the SQL schema file included in the repository
3. Ensure all required tables exist before starting the server

## Authentication Overview

Authentication is handled using JWT tokens. Protected routes require a valid token in the Authorization header.

Admin-only routes use role-based middleware to restrict access.

## API Endpoint Summary

### Authentication

POST /auth/register
POST /auth/login

### Users

GET /api/users
POST /api/users

### Resources

GET /api/resources
GET /api/resources/:id
POST /api/resources
DELETE /api/resources/:id

### Reservations

GET /api/reservations
GET /api/reservations/:id
POST /api/reservations
DELETE /api/reservations/:id

## How To Run The Project Locally

Start the server using:

node src/server.js

The server should run on:

http://localhost:3000

## Refinement and Optimization

For later milestones, the backend code was cleaned and refactored to improve maintainability and readability. Repeated database query logic was moved into helper functions, middleware flow was improved, and validation was added before database operations to avoid unnecessary processing.
