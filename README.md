# API Testing

Simple API testing repository using Node.js and Playwright.

## Project structure

- `package.json` - npm scripts and dependencies
- `backend.js` - example backend server
- `frontend.js` - example frontend server
- `playwright.config.js` - Playwright test configuration
- `tests/` - Playwright test files

## Available scripts

- `npm install` — install dependencies
- `npm run backend` — start backend server on `http://localhost:3000`
- `npm run frontend` — start frontend server on `http://localhost:3001`

## Usage

1. Open the repository folder:
   ```bash
   cd "D:\Plawright Folder\API Testing"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run backend
   ```
4. Start the frontend server in another terminal:
   ```bash
   npm run frontend
   ```

5. Open the frontend in your browser:
   ```text
   http://localhost:3001
   ```

## Notes

- The backend server exposes a sample endpoint at `http://localhost:3000/products`
- If port `3001` is already in use, stop the existing frontend process or change the port in `frontend.js`
