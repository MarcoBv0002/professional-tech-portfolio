"use client";

import Image from "next/image";
import { useState } from "react";

type TiltState = {
  rotateX: number;
  rotateY: number;
};

const neutralTilt: TiltState = {
  rotateX: 0,
  rotateY: 0
};

export default function HeroPortrait() {
  const [tilt, setTilt] = useState<TiltState>(neutralTilt);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 10;

    setTilt({
      rotateX,
      rotateY
    });
  }

  return (
    <div
      className="photo-wrap photo-tilt mx-auto w-full max-w-[320px]"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt(neutralTilt)}
      style={
        {
          transform: `perspective(980px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
        } as React.CSSProperties
      }
    >
      <div className="photo-orbit" />
      <div className="photo-shadow" />
      <Image
        src="/marco-brea.png"
        alt="Marco Antonio Brea - Arquitecto de Soluciones"
        width={768}
        height={1365}
        priority
        className="photo-main"
      />
    </div>
  );
}
