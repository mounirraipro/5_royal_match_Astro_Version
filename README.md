# Royal Match Astro Version

French Astro site for `royalmatch.fr`.

## Game source

The main playable route is `/game/index.html`.

It embeds the Playgama export URL:

`https://playgama.com/export/game/royal-jewels-match?clid=p_eb5ee739-3023-44bb-875d-81fe60b91666`

## Routes to validate

- `/`
- `/play/`
- `/game/index.html`
- `/games/`
- `/games/super-candy-jewels/`
- `/sitemap.xml`
- `/robots.txt`

## Development

```bash
npm install
npm run build
npm run preview
```

Set `SITE_URL=https://royalmatch.fr` for production builds when needed.
