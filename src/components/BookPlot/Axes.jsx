import React from "react";

export const Axes = ({ x, y, width, height }) => {
    return (
      <g>
        {/* vertical and horizontal lines */}
        <line
          x1={0}
          x2={width}
          y1={y}
          y2={y}
          stroke="#ababab"
          strokeDasharray="2"
        />
        <line
          x1={x}
          x2={x}
          y1={0}
          y2={height}
          stroke="#ababab"
          strokeDasharray="2"
        />
  
        {/* labels for X axis */}
        <text
          x={0}
          y={y - 15}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          dominantBaseline={"Auto"}
        >
          Highly Recommend
        </text>
        <text
          x={0}
          y={y - 37}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          dominantBaseline={"Auto"}
        >
          &uarr;
        </text>
  
        <text
          x={0}
          y={y + 15}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          dominantBaseline={"Hanging"}
        >
          Do Not Recommend
        </text>
        <text
          x={0}
          y={y + 37}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          dominantBaseline={"Hanging"}
        >
          &darr;
        </text>

        {/* labels for Y axis */}
        <text
          x={x + 10}
          y={height - 10}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          textAnchor="start"
        >
          Personally Enjoyed Reading &rarr;
        </text>
        <text
          x={x - 10}
          y={height - 10}
          fill="#ababab"
          fontSize={16}
          textRendering={"optimizeLegibility"}
          textAnchor="end"
        >
          &larr; Disliked Reading
        </text>
      </g>
    );
  };
  