# Campus Resource Reservation API

## Project Description
The Campus Resource Reservation API is a backend-only application designed to manage reservable campus resources such as study rooms, lab spaces, and equipment. The system provides a structured way for applications to interact with campus resources through a centralized API.

## Project Scope and System Description
The Campus Resource Reservation API is responsible for managing reservation-related data for campus resources. These resources include study rooms, laboratory spaces, and shared equipment that can be reserved for specific time periods.

Through this API, users will be able to view available resources, create reservations, update existing reservations, and cancel reservations when necessary. The system focuses strictly on backend responsibilities such as handling requests, managing data, and enforcing reservation logic.

The API does not handle frontend interfaces, user authentication, payments, or administrative approval workflows. These features are considered out of scope and would typically be managed by separate systems. The goal of this backend is to act as a reliable foundation that other applications can build on.

## Technologies Used
- Node.js
- Express.js
- MySQL
- Git & GitHub

## Running the Server Locally
1. Clone the repository
2. Install dependencies using `npm install`
3. Start the server with `node src/server.js`
4. Access the test route at `http://localhost:3000/health`

## Project Status
Module 1: Foundation setup only. No database schema or API endpoints have been implemented yet.
## Refinement and Optimization

For this milestone, I cleaned up the backend code to make the project easier to read and maintain. I moved repeated database logic into helper functions so route files do not repeat the same SELECT queries. This makes the code easier to update later.

I also reviewed the middleware flow to make sure request logging runs before routes, authentication runs before protected route logic, validation happens before database actions, and centralized error handling runs after the routes.

A small efficiency improvement was made by checking required input before running database queries. This prevents unnecessary database work when a request is missing required fields.