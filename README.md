# Task Manager API (Node.js + TypeScript + MongoDB)

A simple **Task Manager REST API** built with **Express.js, TypeScript, MongoDB**, and **JWT Authentication**.  
Includes API documentation using **Swagger (OpenAPI 3.0)**.

---

## Features

- User authentication (Register/Login with JWT)
- Task CRUD operations (Create, Read, Update, Delete)
- MongoDB with Mongoose ODM
- Input validation with Zod
- Swagger API Documentation
- Logger (morgan)
- Secure password hashing with bcryptjs

---

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Documentation**: Swagger (OpenAPI)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AGuptaWorks01/nodetsTask.git
cd nodetsTask 
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables

PORT=4000    
MONGO_URI=mongodb://localhost:27017/taskdb    
JWT_SECRET=your_jwt_secret    


### 4. Run the server (development)
`npm run dev`



Server will start on:
`👉 http://localhost:4000`

API Documentation (Swagger)

Swagger UI is available at:
`👉 http://localhost:4000/api-docs`

Example OpenAPI Endpoints

# Auth    
   
POST /api/auth/register → Register a new user    
POST /api/auth/login → Login and get JWT    
    
# Tasks    
GET /api/tasks → Get all tasks (JWT required)    
POST /api/tasks → Create a new task (JWT required)    
GET /api/tasks/{id} → Get task by ID (JWT required)   
PUT /api/tasks/{id} → Update task (JWT required)    
DELETE /api/tasks/{id} → Delete task (JWT required)    
