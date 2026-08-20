# 💬 Real-Time Chat App

A full-stack **real-time chat application** built using the MERN stack with **Socket.IO** for instant messaging and real-time communication.

## 🚀 Features

* 🔐 User authentication & authorization
* 💬 Real-time one-to-one messaging
* ⚡ Instant messages using Socket.IO
* 🟢 Online/offline user status
* ✍️ Typing indicators
* 📩 Message timestamps
* 👤 User profiles
* 🔍 Search users
* 📱 Responsive UI
* 🔒 Protected routes
* 🗄️ Persistent chat & user data using MongoDB

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3 / Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* Cookie-based authentication

### Database

* MongoDB
* Mongoose

## 🏗️ Architecture

```text
                    ┌───────────────┐
                    │    React      │
                    │   Frontend    │
                    └───────┬───────┘
                            │
                    HTTP / REST APIs
                            │
                            ▼
                    ┌───────────────┐
                    │    Express    │
                    │     Server    │
                    └───────┬───────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
      ┌─────────────┐              ┌─────────────┐
      │   MongoDB   │              │  Socket.IO  │
      │   Database  │              │ Real-time   │
      └─────────────┘              │ Connection  │
                                   └─────────────┘
```

## 📂 Project Structure

```text
chat-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd chat-app
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

> Never commit your `.env` file or expose your secret keys publicly.

## ▶️ Running the Application

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

The application will then be available at:

```text
http://localhost:5173
```

## 🔄 How It Works

The application uses **REST APIs** for operations such as:

* User registration
* Login/logout
* Fetching users
* Creating conversations
* Fetching messages

For real-time communication, **Socket.IO** maintains a persistent connection between the client and server.

When a user sends a message:

```text
User A
   │
   │  Send Message
   ▼
React Client
   │
   │ Socket.IO
   ▼
Node.js Server
   │
   ├── Save message → MongoDB
   │
   └── Emit message
          │
          ▼
      User B
```

This allows messages to appear instantly without refreshing the page.

## 🔐 Authentication Flow

```text
Register / Login
       │
       ▼
   Server verifies
       │
       ▼
   JWT generated
       │
       ▼
   JWT stored in cookie
       │
       ▼
Authenticated Requests
       │
       ▼
Authentication Middleware
       │
       ▼
    Protected API
```

## 📌 Future Improvements

* [ ] Group chats
* [ ] Image/file sharing
* [ ] Voice messages
* [ ] Message reactions
* [ ] Message editing & deletion
* [ ] Read receipts
* [ ] Push notifications
* [ ] End-to-end encryption
* [ ] Dark/light mode
* [ ] Voice & video calling

## 📸 Screenshots

Add screenshots of the application here once the UI is finalized.

```text
screenshots/
├── login.png
├── register.png
├── chat.png
└── profile.png
```

## 👨‍💻 Author

**Archit Sikri**

Built as a full-stack project to explore **MERN, authentication, REST APIs, WebSockets, and real-time application architecture**.

---

⭐ If you found this project interesting, consider giving the repository a star!
