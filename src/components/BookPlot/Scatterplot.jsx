import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Axes } from "./Axes";
import { Tooltip } from "./Tooltip";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Category color mapping
const CATEGORIES = {
  "Classic Literature": "#c71e1d",
  "Postmodern": "#00dca6",
  "Business": "#18a1cd",
  "Non-fiction": "#fa8c00"
};

export const Scatterplot = () => {
  // Ref for the container
  const containerRef = useRef(null);

  // State
  const [containerSize, setContainerSize] = useState({ width: 800, height: 550 });
  const [interactionData, setInteractionData] = useState();
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const booksCollection = collection(db, "books");
        const snapshot = await getDocs(booksCollection);
        const books = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBookData(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);

        setTimeout(() => {
          if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            if (width > 0) {
              setContainerSize({ width, height });
            }
          }
        }, 50); // 50ms delay
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books data...</div>;
  }

  // Sort the data: bigger circles must appear at the bottom
  const sortedData = [...bookData].sort((a, b) => b.size - a.size);

  // Scales
  const xScale = d3.scaleLinear().domain([-0.02, 1.02]).range([0, containerSize.width]);
  const yScale = d3.scaleLinear().domain([-0.02, 1.02]).range([containerSize.height, 0]);
  const sizeScale = d3.scaleSqrt().domain([0, 2000]).range([3, 50]);

  // All circles, 1 per book
  const circles = sortedData.map((d, i) => {
    const size = sizeScale(d.size);
    const radius = size / 2;

    const xPos = xScale(d.x);
    const yPos = yScale(d.y);

    const isDimmed = interactionData && interactionData.category !== d.category;
    const className = isDimmed
      ?"scatterplotSquare dimmed" :"scatterplotSquare"

    return (
      <g
        key={i}
        onMouseMove={() =>
          setInteractionData({
            xPos,
            yPos,
            color: CATEGORIES[d.category] || "#999999",
            ...d,
          })
        }
        onMouseLeave={() => setInteractionData(undefined)}
      >
        <circle
          cx={xPos}
          cy={yPos}
          opacity={1}
          fill={CATEGORIES[d.category] || "#999999"}
          r={radius}
          className={className}
        />
      </g>
    );
  });

  // Category legend component
  const CategoryLegend = () => (
    <div className="legend">
      <h3>Book Categories</h3>
      <div className="legendItems">
        {Object.entries(CATEGORIES).map(([category, color]) => (
          <div key={category} className="legendItem">
            <div 
              className="legendColor" 
              style={{ backgroundColor: color }}
            ></div>
            <div className="legendLabel">{category}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="scatterplotContainer" style={{ position: "relative", width: "100%", minWidth: "600px", height: "100%" }}>
      <CategoryLegend />
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