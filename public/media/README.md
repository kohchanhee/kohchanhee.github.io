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
