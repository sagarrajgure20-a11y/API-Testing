# API Testing

This repository contains a simple Playwright-based API testing workspace and two example Node servers for backend and frontend testing.

## Project files

- `package.json` - npm scripts and dependencies
- `backend.js` - simple backend HTTP server with `/products`
- `frontend.js` - simple frontend HTTP server serving a basic HTML page
- `playwright.config.js` - Playwright test configuration
- `tests/` - Playwright test files

## Scripts

- `npm run backend` — starts the backend server on `http://localhost:3000`
- `npm run frontend` — starts the frontend server on `http://localhost:3001`
- `npm install` — install dependencies

## Running locally

```bash
cd "D:\Plawright Folder\API Testing"
npm install
npm run backend
npm run frontend
```

Then visit `http://localhost:3001` in your browser.

## Notes

The backend server exposes a sample JSON endpoint:

- `http://localhost:3000/products`

The frontend server is a simple static page with a link to the backend endpoint.
