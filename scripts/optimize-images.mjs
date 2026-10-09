import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const assets = {};

for (const directory of ["profile", "work-lanes", "games", "projects"]) {
  const sourceDirectory = path.join(root, "public/media", directory);
  const outputDirectory = path.join(root, "public/media/optimized", directory);
  await fs.mkdir(outputDirectory, { recursive: true });

  for (const name of await fs.readdir(sourceDirectory)) {
    if (!/\.(jpe?g|png)$/i.test(name)) continue;

    const source = path.join(sourceDirectory, name);
    const metadata = await sharp(source).metadata();
    const rotated = metadata.orientation >= 5;
    const width = rotated ? metadata.height : metadata.width;
    const height = rotated ? metadata.width : metadata.height;
    const stem = path.parse(name).name;
    const widths = [...new Set([480, 960, 1440].map(size => Math.min(size, width)))];
    const variants = [];

    for (const size of widths) {
      const filename = `${stem}-${size}.webp`;
      await sharp(source)
        .rotate()
        .resize({ width: size })
        .webp({ quality: 84 })
        .toFile(path.join(outputDirectory, filename));
      variants.push({ src: `/media/optimized/${directory}/${filename}`, width: size });
    }

    assets[`/media/${directory}/${name}`] = {
      src: variants[Math.min(1, variants.length - 1)].src,
      srcSet: variants.map(({ src, width }) => `${src} ${width}w`).join(", "),
      width,
      height,
    };
  }
}

await fs.writeFile(
  path.join(root, "src/data/imageAssets.json"),
  `${JSON.stringify(assets, null, 2)}\n`,
);
console.log(`Optimized ${Object.keys(assets).length} images; originals preserved.`);
