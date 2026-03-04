# Raksa Lim — Voice Actor Portfolio

A React-based portfolio website for voice actor Raksa Lim, built with Vite and React Router.

## Pages

- **Home** — Hero section, highlights, and call-to-action
- **Projects** — Voice acting project cards with audio sample playback
- **Demos** — Audio demo reels and video showreels
- **About** — Bio, stats, social links, and resume download
- **Contact** — Contact form that opens the user's email client via `mailto:`

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Adding Media Files

Place your media assets in the following public directories before deploying:

| Directory | Contents |
|---|---|
| `public/audio/` | Audio demo files (`.mp3`) — `demo-commercial.mp3`, `demo-character.mp3`, `demo-narration.mp3`, `sample1.mp3` … `sample6.mp3` |
| `public/video/` | Video demo files (`.mp4`) — `demo1.mp4`, `demo2.mp4` |
| `public/resume/` | Resume PDF — `resume.pdf` |

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 7
- [React Router DOM](https://reactrouter.com/) 7
- Google Fonts (Playfair Display + Inter)
