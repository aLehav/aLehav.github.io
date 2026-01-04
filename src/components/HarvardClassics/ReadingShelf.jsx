import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed
import "./ReadingShelf.css";

const TOTAL = 70;
const HCSOL_COUNT = 50;

export default function ReadingShelf() {
  const [completed, setCompleted] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const snap = await getDocs(collection(db, "harvard-classics"));

        if (snap.empty) {
          console.error("harvard-classics collection is empty");
          return;
        }

        // only document in collection
        const doc = snap.docs[0].data();

        if (!doc.completed || doc.completed.length !== TOTAL) {
          console.error("Invalid completed array");
          return;
        }

        setCompleted(doc.completed);
      } catch (err) {
        console.error("Error loading reading progress:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading || !completed) {
    return <div>Loading reading progress…</div>;
  }

  const books = completed.map((isRead, i) => ({
    id: i,
    completed: isRead,
    img: i < HCSOL_COUNT ? "/hcsol.jpg" : "/sof.jpg",
    label: i < HCSOL_COUNT ? i + 1 : i - HCSOL_COUNT + 1,
  }));

  return (
    <div className="reading-shelf">
      {books.map(book => (
        <div
          key={book.id}
          className={`book-tile ${book.completed ? "read" : ""}`}
        >
            <span className="book-number">{book.label}</span>
            <img src={book.img} alt="" />
        </div>
      ))}
    </div>
  );
}
