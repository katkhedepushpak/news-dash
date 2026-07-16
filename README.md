# News Dash

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat&logo=bootstrap&logoColor=white)

News Dash is a responsive React web application that delivers real-time top headlines from around the world, powered by the [NewsAPI](https://newsapi.org/). Users can browse news across six major categories, switch between countries, and toggle dark mode — making it a personalized, at-a-glance news portal built for speed and simplicity.

---

## Features

- Browse top headlines across six categories: Business, Technology, Health, Science, Sports, and Entertainment
- Filter news by country to surface region-specific stories
- Dark mode toggle for comfortable reading in any lighting
- Paginated article feed (12 articles per page) with previous/next navigation
- Loading spinner for smooth async data fetching
- 404 and error boundary handling for graceful failure states

## Tech Stack

- **React 19** — component-based UI with class components and lifecycle methods
- **React Router DOM 7** — client-side routing per category
- **Bootstrap 5** — responsive layout and utility styling
- **NewsAPI v2** (`/top-headlines`) — third-party REST API for live article data
- **JavaScript (ES6+)**
- **HTML5 / CSS3**

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- A free API key from [newsapi.org](https://newsapi.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/katkhedepushpak/news-dash.git
   cd news-dash
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your NewsAPI key. Open `src/App.js` and replace the existing `apiKey` value with your own key obtained from [newsapi.org](https://newsapi.org/register).

4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

### Production Build

Build the app for production:
```bash
npm run build
```

Optionally serve the production build locally:
```bash
npm install -g serve
serve -s build
```

## Usage

- Use the **navbar** to switch between news categories (General, Business, Technology, Health, Science, Sports, Entertainment).
- Use the **country selector** to filter headlines by region.
- Toggle **dark mode** via the switch in the navbar.
- Navigate through articles using the **Previous** and **Next** pagination controls at the bottom of the feed.

## Screenshots

> _Screenshots coming soon._

---

## Author

Built by [Pushpak Vijay Katkhede](https://katkhedepushpak.github.io)
