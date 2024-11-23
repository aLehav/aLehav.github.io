import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Axes } from "./Axes";
import styles from "./scatterplot.module.css";
import { Tooltip } from "./Tooltip";

export const Scatterplot = ({ data }) => {
  // Ref for the container
  const containerRef = useRef(null);

  // State
  const [containerSize, setContainerSize] = useState({ width: 0, height: 550 });
  const [interactionData, setInteractionData] = useState();

  useEffect(() => {
    const observeTarget = containerRef.current;
    if (observeTarget) {
      const resizeObserver = new ResizeObserver(entries => {
        if (!entries || entries.length === 0) {
          return;
        }
        const { width, height } = entries[0].contentRect;
        setContainerSize({ width, height });
      });

      resizeObserver.observe(observeTarget);

      return () => {
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }
  }, []);

  // Sort the data: bigger circles must appear at the bottom
  const sortedData = data.sort((a, b) => b.size - a.size);

  // Scales
  const xScale = d3.scaleLinear().domain([0, 1]).range([0, containerSize.width]);
  const yScale = d3.scaleLinear().domain([0, 1]).range([containerSize.height, 0]);
  const sizeScale = d3.scaleSqrt().domain([0, 2000]).range([3, 50]);

  // All circles, 1 per country
  const circles = sortedData.map((d, i) => {
    const size = sizeScale(d.size);
    const radius = size / 2;

    const xPos = xScale(d.x);
    const yPos = yScale(d.y);

    const isDimmed = interactionData && interactionData.color !== d.color;
    const className = isDimmed
      ? styles.scatterplotSquare + " " + styles.dimmed
      : styles.scatterplotSquare;

    return (
      <g
        key={i}
        onMouseMove={() =>
          setInteractionData({
            xPos,
            yPos,
            ...d,
          })
        }
        onMouseLeave={() => setInteractionData(undefined)}
      >
        <circle
          cx={xPos}
          cy={yPos}
          opacity={1}
          fill={d.color}
          r={radius}
          className={className}
        />
      </g>
    );
  });

  return (
    <div ref={containerRef} className={styles.scatterplotContainer} style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg width={containerSize.width} height={containerSize.height} shapeRendering={"crispEdges"}>
        <g>
          <Axes
            x={xScale(0.43)}
            y={yScale(0.41)}
            width={containerSize.width}
            height={containerSize.height}
          />
          {circles}
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          width: containerSize.width,
          height: containerSize.height,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <Tooltip interactionData={interactionData} />
      </div>
    </div>
  );
};
