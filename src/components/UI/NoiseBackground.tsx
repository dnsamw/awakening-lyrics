import { useEffect, useRef } from "react";

const NoiseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const noise = () => {
      const w = canvas.width;
      const h = canvas.height;

      if (w <= 0 || h <= 0) return;

      const iData = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(iData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) buffer32[i] = 0xff82ff9f; // ARGB format
      }

      ctx.putImageData(iData, 0, 0);
    };

    const loop = () => {
      noise();
      animationFrameId.current = requestAnimationFrame(loop);
    };

    resize();

    setTimeout(() => {
      loop();
    }, 0);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-10 pointer-events-none select-none z-50"
      aria-hidden="true"
    />
  );
};
export default NoiseBackground;
