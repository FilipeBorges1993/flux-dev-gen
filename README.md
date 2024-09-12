# Fux AI Prototype

This project combines a Next.js frontend with a Node.js backend to create a seamless and interactive user experience, build using cursor composer and Chat context

# Features

- AI-powered image generation
- Customizable image parameters (aspect ratio, quality, prompt strength)
- Real-time image preview
- Responsive design

## Tech Stack

- Backend: Node.js, Express

- Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui

- AI Integration: Replicate API (black-forest-labs/flux-dev model)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Set up the frontend:

```bash
cd frontend
npm install
```

3. Set up the backend:

```bash
cd backend
npm install
```

4. Create a `.env` file in the backend directory and add your Replicate API key:

```
REPLICATE_API_TOKEN=your_api_key_here
```

### Running the Application

1. Start the backend server:

```
cd backend
node index.js
```

2. In a new terminal, start the frontend development server:

```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000` to access the application.
# flux-dev-gen
