import type { ComponentProps } from "react";
import imageAssets from "../data/imageAssets.json";

type ImageAsset = { src: string; srcSet: string; width: number; height: number };
const assets: Record<string, ImageAsset> = imageAssets;

export function ResponsiveImage({
  src,
  alt,
  loading = "lazy",
  sizes = "100vw",
  ...props
}: ComponentProps<"img">) {
  const asset = src ? assets[src] : undefined;

  return (
    <img
      src={asset?.src ?? src}
      srcSet={asset?.srcSet}
      width={asset?.width}
      height={asset?.height}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={asset ? sizes : undefined}
      {...props}
    />
  );
}
