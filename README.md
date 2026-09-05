# Lets Chat App

A full-stack one-to-one chat application built with React, Express, MongoDB, and Socket.IO. Users can register, log in, find other users, view conversation history, send messages, and see online status updates in real time.

## Features

- JWT authentication with an HTTP-only cookie
- User registration, login, and logout
- One-to-one conversations persisted in MongoDB
- Real-time message delivery with Socket.IO
- Online and offline user status
- User search and conversation selection
- Responsive chat interface
- Avatar fallback generation when a profile photo is unavailable

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express, Socket.IO, JWT, Mongoose
- Database: MongoDB

## Project Structure

```text
LETS_CHAT_APP_MERN/
├── backend/
│   ├── controller/
│   ├── database/
│   ├── Middlewares/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Requirements

- Node.js 20 or newer
- npm
- A MongoDB database or MongoDB Atlas connection

## Installation

Install dependencies in both applications:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGO_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

Create `frontend/.env`:

```env
VITE_BASE_URL=http://localhost:5000
```

Do not commit real database credentials or JWT secrets. If a secret has been exposed, rotate it before deploying.

## Running Locally

Start the backend in one terminal:

```bash
cd backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173
```

The backend API and Socket.IO server run on:

```text
http://localhost:5000
```

## API Routes

### Users

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/users/register` | Create a user account |
| `POST` | `/api/users/login` | Log in and set the auth cookie |
| `GET` | `/api/users/logout` | Clear the auth cookie |
| `GET` | `/api/users/otherusers` | Get users available for chat |

### Messages

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/msg/getmsg/:id` | Get conversation messages |
| `POST` | `/api/msg/sendmsg/:id` | Save and send a message |

The protected routes require the login cookie. Axios requests use credentials so the cookie can be sent to the backend.

## Socket.IO Events

- Client connects with the authenticated user ID in the handshake query.
- `getonlineusers`: broadcasts the IDs of currently connected users.
- `newmsg`: delivers a new message to the recipient in real time.

## Useful Commands

```bash
# Frontend production build
cd frontend
npm run build

# Frontend lint
npm run lint
```

If port `5000` is already in use, stop the existing backend process before starting another one. A second backend process cannot listen on the same port.

## Security Notes

- Keep `.env` files out of version control.
- Use a strong, private `JWT_SECRET_KEY` in production.
- Restrict `FRONTEND_URL` to the deployed frontend origin in production.
- Use HTTPS when deploying outside local development.
