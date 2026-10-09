import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MPEGDecoder } from "mpg123-decoder";

const root = fileURLToPath(new URL("../", import.meta.url));
const directory = path.join(root, "public/media/music");
const waveforms = {};

for (const filename of await fs.readdir(directory)) {
  if (!filename.endsWith(".mp3")) continue;
  const decoder = new MPEGDecoder();
  await decoder.ready;

  try {
    const { channelData, samplesDecoded, sampleRate, errors } = decoder.decode(
      await fs.readFile(path.join(directory, filename)),
    );
    if (!samplesDecoded || errors.length) {
      throw new Error(`Could not decode ${filename}: ${JSON.stringify(errors)}`);
    }

    // Keep the strongest sample in each interval across both stereo channels.
    const bins = 1024;
    const peaks = Array.from({ length: bins }, (_, index) => {
      const start = Math.floor(index * samplesDecoded / bins);
      const end = Math.floor((index + 1) * samplesDecoded / bins);
      let peak = 0;
      for (const channel of channelData) {
        for (let sample = start; sample < end; sample++) {
          peak = Math.max(peak, Math.abs(channel[sample]));
        }
      }
      return Math.round(peak * 10000) / 10000;
    });
    waveforms[`/media/music/${filename}`] = {
      duration: samplesDecoded / sampleRate,
      peaks: [peaks],
    };
  } finally {
    decoder.free();
  }
}

await fs.writeFile(
  path.join(root, "src/data/musicWaveforms.json"),
  `${JSON.stringify(waveforms)}\n`,
);
console.log(`Generated ${Object.keys(waveforms).length} track waveforms.`);
