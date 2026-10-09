# Media

Use this folder for portfolio content that should be available at stable public URLs.

- `projects/`: project screenshots, mockups, demos, and posters
- `profile/`: portraits or personal photos
- `videos/`: short demo clips

Files in `public` are served from the site root. For example:

```ts
media: {
  kind: "image",
  src: "/media/projects/example-screenshot.jpg",
  alt: "Screenshot of the example project",
}
```

For UI-only assets that should be imported by React components, use `src/assets` instead.

After adding or replacing photos, run `npm run optimize:images`. This generates
WebP sizes in `optimized/` and the lookup in `src/data/imageAssets.json`, without
changing the originals. Commit the generated files alongside the source image.
Use `ResponsiveImage` with the original URL; it selects the generated sizes and
falls back to the original for images that have not been optimized yet.

The Gimme Da Loot screenshots use a local demo with sample players and loot,
the Endwalker theme, and a scrollbar-free 16:9 capture.
The dance poster is a still from the video, allowing its player to show a preview
without fetching the video before playback.
When replacing the dance video, update its `duration` (seconds) in `src/data/fun.ts`
so the controls can show its length before playback too.

After adding or replacing MP3 tracks, run `npm run generate:waveforms` and commit
`src/data/musicWaveforms.json`. The player uses these small waveform previews to
show each track before downloading the MP3. A track without generated data uses
the browser's native audio controls as a fallback.
