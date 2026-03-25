"use client";

type LogoImageProps = {
  logo: string;
  alt: string;
  width: number;
  height: number;
  color?: string;
};

export default function LogoImage({
  logo,
  alt,
  width,
  height,
  color = "22d3ee"
}: LogoImageProps) {
  return (
    <img
      src={`/logos/${logo}.svg`}
      alt={alt}
      width={width}
      height={height}
      onError={(event) => {
        const target = event.currentTarget;
        target.onerror = null;
        target.src = `https://cdn.simpleicons.org/${logo}/${color}`;
      }}
    />
  );
}
