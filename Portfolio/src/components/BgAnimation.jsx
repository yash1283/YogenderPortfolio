import React from "react";
import "../css/BgAnimation.css";

export default function BackgroundAnimation() {
  return (
    <div className="canvas-wrap">
      <svg className="wireframe" viewBox="0 0 600 350">

        {/* LEFT CUBE */}
        <g className="cube cube-left">
          {/* Front */}
          <rect x="120" y="180" width="80" height="80" />
          {/* Back */}
          <rect x="150" y="150" width="80" height="80" />
          {/* Connecting lines */}
          <line x1="120" y1="180" x2="150" y2="150" />
          <line x1="200" y1="180" x2="230" y2="150" />
          <line x1="120" y1="260" x2="150" y2="230" />
          <line x1="200" y1="260" x2="230" y2="230" />
        </g>

        {/* RIGHT CUBE */}
        <g className="cube cube-right">
          <rect x="380" y="180" width="80" height="80" />
          <rect x="410" y="150" width="80" height="80" />
          <line x1="380" y1="180" x2="410" y2="150" />
          <line x1="460" y1="180" x2="490" y2="150" />
          <line x1="380" y1="260" x2="410" y2="230" />
          <line x1="460" y1="260" x2="490" y2="230" />
        </g>

        {/* BOTTOM CENTER CUBE */}
        <g className="cube cube-bottom">
          <rect x="250" y="250" width="80" height="80" />
          <rect x="280" y="220" width="80" height="80" />
          <line x1="250" y1="250" x2="280" y2="220" />
          <line x1="330" y1="250" x2="360" y2="220" />
          <line x1="250" y1="330" x2="280" y2="300" />
          <line x1="330" y1="330" x2="360" y2="300" />
        </g>

      </svg>
    </div>
  );
}