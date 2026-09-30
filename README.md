# Job Application Portal API

A backend REST API for a simple Job Application Portal built using Node.js, Express.js, and MongoDB.

This project allows users to register and log in securely, upload their resumes, view available jobs, apply for jobs, and check their submitted applications.

The API was developed as a backend project and tested using Postman.

## Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Resume upload using Multer
- Create and view job listings
- Get details of a specific job
- Apply for a job
- Prevent duplicate applications
- View user's submitted applications
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Postman

## Project Structure

job-application-portal/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── jobController.js
│   │   └── applicationController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   ├── Job.js
│   │   └── Application.js
│   │
│   └── routes/
│       ├── authRoutes.js
│       ├── userRoutes.js
│       ├── jobRoutes.js
│       └── applicationRoutes.js
│
├── uploads/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.jsGetting Started


1. Clone the Repository
git clone https://github.com/YOUR_USERNAME/job-application-portal.git
cd job-application-portal

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file in the root directory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/job-application-portal
JWT_SECRET=your_secret_key

The .env file contains sensitive information and should not be committed to GitHub.
4. Start the Server
For development:
npm run dev

For normal start:
npm start

The API will run at:
http://localhost:5000

API Endpoints
Authentication
Register
POST /api/auth/register

Example request:
{
  "name": "kriinal",
  "email": "krinal@gmail.com",
  "password": "123456"
}

Login
POST /api/auth/login

Example request:
{
  "email": "krinal@gmail.com",
  "password": "123456"
}

The login API returns a JWT token that is used to access protected routes.
User
Upload Resume
POST /api/users/resume

This route requires JWT authentication.
Authorization:
Bearer <JWT_TOKEN>

The resume should be uploaded using multipart/form-data with the field name:
resume

Supported file formats:
- PDF
- DOC
- DOCX
Maximum file size: 5 MB
Jobs
Create Job
POST /api/jobs

Example request:
{
  "title": "Node.js Developer Intern",
  "company": "Potenz Technology",
  "location": "Ahmedabad",
  "description": "Looking for a Node.js developer intern.",
  "skills": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API"
  ],
  "experience": "Fresher",
  "salary": "10000-15000"
}

Get All Jobs
GET /api/jobs

Returns the available job listings.
Get Job By ID
GET /api/jobs/:id

Example:
GET /api/jobs/68abc123...

Applications
Apply For a Job
POST /api/applications/:jobId

This route requires JWT authentication.
Authorization:
Bearer <JWT_TOKEN>

A user cannot apply for the same job more than once.
Get My Applications
GET /api/applications/my-applications

This route requires JWT authentication and returns the applications submitted by the logged-in user.
Authentication
Protected routes use JWT authentication.
After login, the returned token should be sent in the request header:
Authorization: Bearer <JWT_TOKEN>

In Postman, the token can be provided using the Bearer Token authorization type.
Postman Testing
The API was tested using Postman.
The Postman collection includes:
- Register
- Login
- Upload Resume
- Create Node.js Job
- Create React Job
- Create MERN Job
- Get All Jobs
- Get Job By ID
- Apply for Job
- My Applications
The collection can be imported into Postman to test the API endpoints.