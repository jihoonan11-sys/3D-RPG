# Pokémon Collector Hub

An unofficial, static collector-toolkit demo. The included prices, news and event dates are **fictional sample data**, not live market information.

## Files

- `index.html` — page structure
- `styles.css` — responsive light/dark styles
- `data.js` — sample Pokémon, cards, sample prices, sample news, lessons and source links
- `app.js` — navigation, search/filtering, local collection, watchlist, settings, learning quizzes and PDF generation
- `README.md` — setup and limitations

## Run locally

1. Extract the ZIP.
2. Keep all five files in the same folder.
3. Open `index.html` in a modern browser.

For optional PokéAPI detail requests and the most predictable local-server behavior, you may use a static local server (for example, VS Code Live Server). No build step is required.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload all five files to the repository root.
3. In **Settings → Pages**, select the branch and root folder.
4. Open the published Pages URL after deployment finishes.

## What works in this demo

- Hash-based navigation and mobile menu
- Pokédex search by name/number, generation and type
- Optional PokéAPI enrichment for Pokémon details
- TCG sample-card filtering and sample regional market table
- Sample news list/calendar with region/category/date filters
- PDF checklist generation and browser print dialog
- Academy lessons, quizzes and local progress
- Collection add/edit/remove, JSON export/import and clear
- Explicit-card watchlist and a local notification inbox
- English/Korean/Japanese interface selection and light/dark theme
- Local storage for preferences and user-created entries

## Important limitations

- TCG market prices, news, and release/event dates are fictional sample data. They are not live, verified, or suitable for purchase decisions.
- The sample alert system is not a real price-monitoring service. A static site cannot reliably run background checks while closed. Real alerts require a backend/scheduled task and a trustworthy data source.
- Email notifications and cross-device sync are not implemented.
- The direct PDF generator uses standard PDF fonts; some Korean/Japanese characters may be replaced. Use **Print / Save as PDF** for full Unicode rendering in a browser that supports those characters.
- PokéAPI is used only when explicitly enabled in Settings and only for Pokémon detail enrichment. Failure falls back to the bundled record.
- Before public production use, review third-party API terms, data/image licensing, attribution requirements, rate limits, and privacy implications.

## Data editing

Edit the arrays in `data.js` to change the demo Pokémon, cards, sample prices, sample news, lessons and source attribution. Never label sample values as real data. A production market/news integration should use verified sources and display each source and update timestamp.
