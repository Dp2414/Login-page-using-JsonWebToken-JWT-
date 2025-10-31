# JWT Authentication App

A full-stack web application with JWT authentication using React (CSR) and Node.js/Express.

## 🚀 Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (MongoDB Atlas)
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling (via CDN)

## 📁 Folder Structure

```
JWT Practice/
├── backend/
│   ├── controllers/
│   │   └── authControler.js     # Authentication logic
│   ├── models/
│   │   └── userSchema.js        # User model
│   ├── routes/
│   │   └── authRoute.js         # API routes
│   ├── package.json
│   └── server.js                # Express server
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx        # Login/Signup component
│   │   │   └── Dashboard.jsx    # Dashboard component
│   │   ├── App.jsx              # Main app with routing
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Basic styles
│   ├── index.html               # HTML template
│   └── package.json
└── README.md
```

## 🛠️ API Routes

### Authentication Routes
- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/dashboard` - Protected dashboard (requires JWT)

### User Management Routes
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/updateuser/:id` - Update user

## 🌐 Frontend Routes

- `/` - Redirects to dashboard or login based on auth
- `/login` - Login/Signup page
- `/dashboard` - Protected dashboard page

## ⚡ Features

- **JWT Authentication** with httpOnly cookies
- **Protected Routes** with automatic redirects
- **Client-Side Rendering (CSR)** with React Router
- **Responsive Design** with Tailwind CSS
- **Password Hashing** with bcrypt
- **Form Validation** and error handling
- **Persistent Authentication** across page refreshes

## 🚀 Getting Started



### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "JWT Practice"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Server runs on `http://localhost:4000`

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   App runs on `http://localhost:5173`

### Environment Variables
Update MongoDB connection string in `backend/server.js`:
```javascript
mongoose.connect("your-mongodb-connection-string")
```

## 🔐 Authentication Flow

1. User visits app → Auto-checks authentication
2. If not authenticated → Redirects to `/login`
3. User signs up/logs in → JWT cookie set
4. Redirects to `/dashboard` → Shows user info
5. User logs out → Cookie cleared → Redirects to `/login`



## 🛡️ Security Features

- **httpOnly Cookies** - Prevents XSS attacks
- **Password Hashing** - Secure password storage
- **JWT Expiration** - 7-day token validity
- **Route Protection** - Middleware authentication
- **CORS Configuration** - Secure cross-origin requests

---

