# AI Powered E-Learning Platform - Authentication Module

This project contains the complete MERN-stack authentication module for the E-Learning platform, featuring Role-Based Access Control, JWT & Refresh Tokens, and Nodemailer OTP support.

## Project Structure
- `/backend`: Node.js, Express, MongoDB REST API.
- `/frontend`: React, Vite, TailwindCSS v4 Frontend.

## Features
- **JWT Authentication:** Short-lived access tokens and long-lived refresh tokens (stored in HttpOnly cookies).
- **Role-Based Access Control (RBAC):** Distinct dashboards and protected routes for `Student`, `Instructor`, and `Admin`.
- **OTP Verification:** Forgot/Reset password flows via Nodemailer SMTP.
- **Modern UI:** Built with TailwindCSS v4 featuring responsive design and Dark Mode readiness.
- **Future Ready User Model:** Includes Gamification fields (XP, streak), Bio, Skills, etc.

## Installation

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally or MongoDB Atlas URI.
- A Gmail account with an App Password generated for sending emails.

### Backend Setup
1. `cd backend`
2. `npm install`
3. Update `.env` file with your credentials:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/elearning
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```
4. Start the server: `node server.js`

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. Update `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```
4. Start the development server: `npm run dev`
