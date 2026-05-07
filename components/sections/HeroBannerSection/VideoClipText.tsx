"use client";
import { useEffect, useRef } from "react";

const TEXT = "tokenomics";
const FONT = '"Space Grotesk", sans-serif';

export function VideoClipText({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const fsRef = useRef<number>(160);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!video || !canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      const w = wrap!.offsetWidth;
      if (!w) return;
      ctx!.font = `700 100px ${FONT}`;
      const measured = ctx!.measureText(TEXT).width || 1;
      const fs = Math.floor(100 * (w * 0.98) / measured);
      fsRef.current = fs;
      const cssH = Math.ceil(fs * 1.05);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${cssH}px`;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(cssH * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const cssW = parseFloat(canvas!.style.width) || canvas!.width / dpr;
      const cssH = parseFloat(canvas!.style.height) || canvas!.height / dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, cssW, cssH);

      ctx!.globalCompositeOperation = "source-over";
      if (video!.readyState >= 2 && video!.videoWidth > 0) {
        const vw = video!.videoWidth;
        const vh = video!.videoHeight;
        const scale = Math.max(cssW / vw, cssH / vh);
        const dw = vw * scale;
        const dh = vh * scale;
        const dx = (cssW - dw) / 2;
        const dy = (cssH - dh) / 2;
        ctx!.drawImage(video!, dx, dy, dw, dh);
      } else {
        ctx!.fillStyle = "#c0c0c0";
        ctx!.fillRect(0, 0, cssW, cssH);
      }

      ctx!.globalCompositeOperation = "destination-in";
      ctx!.font = `700 ${fsRef.current}px ${FONT}`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillStyle = "#000";
      ctx!.fillText(TEXT, cssW / 2, cssH / 2);

      rafRef.current = requestAnimationFrame(draw);
    }

    let started = false;
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const start = () => {
      resize();
      if (!started) {
        started = true;
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const fontLoad = (document as Document & { fonts?: { load: (s: string) => Promise<unknown> } })
      .fonts?.load?.(`700 100px ${FONT}`);
    if (fontLoad) fontLoad.then(start).catch(start);
    else start();

    const onLoaded = () => {
      start();
      video.play().catch(() => {});
    };
    video.addEventListener("loadeddata", onLoaded);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  return (
    <div ref={wrapRef} className="w-full select-none">
      <video
        ref={videoRef}
        className="hidden"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
