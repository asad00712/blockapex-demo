"use client"

import React, { ElementType, ReactNode, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export type VideoTextPosition = "center" | "left" | "right" | "top" | "bottom"

const positionConfig: Record<VideoTextPosition, {
  x: string; y: string; textAnchor: string; dominantBaseline: string; maskPos: string
}> = {
  center: { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "middle",  maskPos: "center center" },
  left:   { x: "0%",  y: "50%", textAnchor: "start",  dominantBaseline: "middle",  maskPos: "left center"   },
  right:  { x: "100%",y: "50%", textAnchor: "end",    dominantBaseline: "middle",  maskPos: "right center"  },
  top:    { x: "50%", y: "0%",  textAnchor: "middle", dominantBaseline: "hanging", maskPos: "center top"    },
  bottom: { x: "50%", y: "100%",textAnchor: "middle", dominantBaseline: "auto",    maskPos: "center bottom" },
}

export interface VideoTextProps {
  src: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  preload?: "auto" | "metadata" | "none"
  children: ReactNode
  /** Font size in viewport width units. @default 10 */
  fontSize?: string | number
  fontWeight?: string | number
  fontFamily?: string
  /** Shorthand for text position inside the container. @default "center" */
  position?: VideoTextPosition
  /** Override vertical position of text in SVG (e.g. "60%"). Overrides position's y. */
  textY?: string
  /** Controls which part of the video is visible (CSS object-position). @default "center" */
  videoPosition?: string
  /** Zoom factor for the video. @default 1 */
  videoScale?: number
  as?: ElementType
}

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  fontFamily = "sans-serif",
  position = "center",
  textY,
  videoPosition = "center",
  videoScale = 1,
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("")
  const content = React.Children.toArray(children).join("")

  const { x, y: defaultY, textAnchor, dominantBaseline, maskPos } = positionConfig[position]
  const resolvedY = textY ?? defaultY

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize =
        typeof fontSize === "number" ? `${fontSize}vw` : fontSize
      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='${x}' y='${resolvedY}' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`
      setSvgMask(newSvgMask)
    }

    updateSvgMask()
    window.addEventListener("resize", updateSvgMask)
    return () => window.removeEventListener("resize", updateSvgMask)
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily, x, resolvedY])

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`

  return (
    <Component className={cn(`relative size-full`, className)}>
      <div
        className="absolute inset-0"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: maskPos,
          WebkitMaskPosition: maskPos,
        }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: videoPosition, transform: `scale(${videoScale})` }}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>

      <span className="sr-only">{content}</span>
    </Component>
  )
}
