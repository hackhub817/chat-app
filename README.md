# AI ChatBot 🤖

> AI-powered chatbot application built with React and OpenAI GPT-3.5 Turbo — ask anything and get intelligent responses in real-time.

## 🚀 Features

- **AI-Powered Responses** — Leverages OpenAI's GPT-3.5 Turbo model for intelligent conversation
- **Clean Chat Interface** — Minimal, focused UI for seamless interaction
- **Real-Time Loading States** — Visual feedback while the AI generates responses
- **Error Handling** — Graceful error handling for API failures and empty inputs
- **Responsive Design** — TailwindCSS-powered layout works on all screen sizes

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **AI Engine** | OpenAI GPT-3.5 Turbo API |
| **Config** | dotenv for secure API key management |

## 📐 Architecture

```
┌─────────────────────┐    HTTP POST     ┌──────────────────┐    API Call    ┌─────────────┐
│   React Frontend    │ ──────────────→  │  Express Server  │ ───────────→  │  OpenAI API │
│                     │                  │   (Port 5000)    │               │  GPT-3.5    │
│  • ChatForm.jsx     │  ←────────────── │   /chat endpoint │ ←─────────── │  Turbo      │
│  • Axios client     │    JSON Response │   • CORS enabled │  Completion  │             │
│  • TailwindCSS      │                  │   • Body parser  │              │             │
└─────────────────────┘                  └──────────────────┘              └─────────────┘
```

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/hackhub817/chat-app.git
cd chat-app

# Install backend dependencies
npm install

# Create environment file
echo "API=your_openai_api_key_here" > .env

# Start the backend server
npx nodemon server.js
```

### Frontend Setup
```bash
# In a new terminal
cd frontend

# Install frontend dependencies
npm install

# Start the React app
npm start
```

The app will be running at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## 🔗 API Endpoint

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `POST` | `/chat` | `{ "message": "your question" }` | `{ "response": "AI answer" }` |

### Example Request
```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is React?"}'
```

## 📁 Project Structure

```
chat-app/
├── server.js              # Express server + OpenAI integration
├── package.json           # Backend dependencies
├── .env                   # API key (not committed)
└── frontend/
    ├── src/
    │   ├── App.js         # Root component
    │   └── components/
    │       └── ChatForm.jsx   # Chat UI + API call logic
    ├── package.json       # Frontend dependencies
    └── tailwind.config.js # TailwindCSS config
```

## 🔧 Configuration

| Variable | Description |
|----------|-------------|
| `API` | Your OpenAI API key |

The server uses `gpt-3.5-turbo` with `max_tokens: 1000` and `temperature: 0.7` for balanced, creative responses.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by [Piyush Gupta](https://github.com/hackhub817)** | [Portfolio](https://piyush-gupta-profile.vercel.app/) | [LinkedIn](https://linkedin.com/in/piyush-gupta-06b020213)
