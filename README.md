# API Testing

This repository contains a sample local API testing project with a React frontend and two Node.js backend services.

## Project structure

- `backend/` - Users API service on `http://localhost:4000`
- `backend-products/` - Products API service on `http://localhost:4001`
- `frontend/` - React frontend application
- `tests/` - Example Playwright tests
- `playwright.config.js` - Playwright configuration

## Prerequisites

- Node.js 18+ installed
- npm available in your shell

## Install dependencies

```bash
npm install
npm run install:all
```

## Run services

Start the backend users API:

```bash
npm run backend
```

Start the frontend application:

```bash
npm run frontend
```

Start the products API:

```bash
npm run backend:products
```

## Access the app

Open the frontend in your browser:

```text
http://localhost:5173
```

## Login credentials

- Email: `admin@acme.test`
- Password: `admin123`

## Notes

- The frontend makes auth requests to the users API at `http://localhost:4000/api`
- If the backend is not running, login attempts will fail with a network error
- The backend includes test-friendly toggles for delays and random failures

## Scripts

- `npm run backend` - start the users API service
- `npm run backend:users` - same as `backend`
- `npm run backend:products` - start the products API service
- `npm run frontend` or `npm run vita` - start the React frontend
- `npm run install:all` - install dependencies for all packages
