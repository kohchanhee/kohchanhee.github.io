# kohchanhee.github.io

I'm just here so I don't get fined

## Development

```sh
npm install
npm run dev
```

Home, Work, and Fun have shareable hash URLs (`#/home`, `#/work`, and `#/fun`),
so refreshing a page works on GitHub Pages without server rewrite rules.

```sh
npm run optimize:images
npm run lint
npm run build
```

Image optimization preserves originals and generates responsive WebP assets.
Run it after replacing media; see `public/media/README.md` for details.
