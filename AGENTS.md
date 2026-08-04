# Repository Guidelines

## Project Structure & Module Organization
- `backend/` contains the FastAPI app. Core logic lives in `backend/app/` with `core/`, `database/`, `models/`, `routes/`, and `schemas/`.
- `frontend/` contains the React + TypeScript app. UI code is in `frontend/src/`, with reusable components in `components/`, pages in `pages/`, and API wrappers in `services/`.
- `docs/` holds supporting documentation. Keep generated or machine-specific files out of version control.

## Build, Test, and Development Commands
- Frontend development: `cd frontend && npm run dev` starts the Vite dev server.
- Frontend build: `cd frontend && npm run build` type-checks and creates a production bundle.
- Frontend lint: `cd frontend && npm run lint` runs ESLint across the TypeScript source.
- Backend setup: `cd backend && python -m venv venv`, then activate the environment and run `pip install -r requirements.txt`.
- Backend development: `cd backend && uvicorn app.main:app --reload` starts the API locally.

## Coding Style & Naming Conventions
- Use Python and TypeScript defaults already present in the repo: 4-space indentation for Python, 2-space indentation in frontend code where existing files do so.
- Keep Python modules and route files lowercase with underscores when needed, such as `app/core/security.py`.
- Use `PascalCase` for React components and page components, `camelCase` for functions, variables, and service helpers.
- Follow the existing ESLint and TypeScript configuration in `frontend/eslint.config.js` and `frontend/tsconfig*.json`.

## Testing Guidelines
- No project test suite is currently committed. If you add one, place backend tests under `backend/tests/` and frontend tests alongside source files or in a dedicated `tests/` directory.
- Prefer descriptive names such as `test_auth.py` or `CourseCard.test.tsx`.
- Before opening a PR, run at least the relevant lint/build commands above.

## Commit & Pull Request Guidelines
- Git history uses concise Conventional Commit-style messages, such as `feat: implement edit course functionality`.
- Keep commits focused on one change when possible.
- Pull requests should include a short summary, setup or verification notes, and screenshots for UI changes.

## Security & Configuration Tips
- Do not commit secrets. Use `backend/.env.example` and `frontend/.env.example` as templates for local configuration.
- Avoid checking in virtual environments, `node_modules/`, or other generated artifacts.
