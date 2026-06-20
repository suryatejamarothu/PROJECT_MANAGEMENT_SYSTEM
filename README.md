<<<<<<< HEAD
# Project Task Management App

A premium, responsive web application for managing project tasks with a sleek modern UI, glassmorphism, and dark mode support.

## Features
- **Dashboard**: View all tasks in a responsive grid.
- **Filtering**: Seamlessly filter tasks by status (Pending, In Progress, Completed).
- **Task Creation**: Dedicated form with validation (Min 20 chars description).
- **Update Status**: Fast action to mark tasks as completed.
- **Delete**: Remove tasks with confirmation.
- **Dark Mode**: High-quality dark theme toggle.
- **Responsive**: Fully optimized for mobile and desktop.

## Technology Stack
- **Frontend**: React.js (Vite), Axios, Lucide Icons, Vanilla CSS.
- **Backend**: Node.js, Express, MySQL.
- **Database**: mysql2 (Connection pooling).

## Folder Structure
```
project-root/
frontend/
├─ src/
│  ├─ components/   # UI components
│  ├─ pages/        # Main application pages
│  ├─ services/     # API integration (Axios)
│  ├─ styles/       # Premium Vanilla CSS
│  └─ App.jsx       # Routing & Home
backend/
├─ routes/          # API Route definitions
├─ controllers/     # Business logic
├─ models/          # Database operations
├─ config/          # Database connection
└─ server.js        # Entry point
```

## Setup Instructions

### 1. Prerequisites
- Node.js installed.
- MySQL server running.

### 2. Database Setup
1. Create a database named `task_manager`.
2. Run the SQL commands in `backend/schema.sql` to create the `tasks` table.

### 3. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update `.env` with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=task_manager
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 4. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

## API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update task status |
| DELETE | `/tasks/:id` | Delete a task |

### Sample POST Request
```json
{
  "title": "Build Login Page",
  "description": "Create a responsive login page for the application.",
  "status": "Pending"
}
```

## Assumptions
- The database is running locally on the default port.
- User has basic knowledge of how to create a MySQL database.
- The description validation is handled both frontend and backend for robustness.
=======
# PROJECT_MANAGEMENT_SYSTEM
A Project Task Manager is a full-stack web application designed to help users organize their work. It allows users to create, view, update, and delete tasks while providing a premium user interface with dark mode and real-time filtering for efficient task management.
>>>>>>> a86a8efe388eabc605e6abf4affba19598ba3dae
