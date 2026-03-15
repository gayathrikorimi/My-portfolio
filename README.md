# Beautiful Portfolio (React)

A React-based portfolio template built with Vite. It includes a login screen, a profile page, and sections for About, Skills, Projects, plus quick links to GitHub and LinkedIn.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (by default `http://localhost:5173`).

## Structure

- `src/main.jsx` — app entry point.
- `src/App.jsx` — routing and global state (login persistence).
- `src/components/Header.jsx` — top navigation / links.
- `src/pages/*` — page modules (Login, Profile, About, Skills, Projects).
- `src/styles.css` — global styling.

## Customize

- Update your name, bio, and links in the `src/pages/*` components.
- Add new pages by creating new files in `src/pages` and updating routes in `src/App.jsx`.
- Change colors and layout in `src/styles.css`.

## Notes

- Login data is stored locally in `localStorage` so the site "remembers" you.
- Change the GitHub/LinkedIn URLs via the login form or by editing `src/pages/Profile.jsx`.
