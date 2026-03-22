import React, { useState, useEffect } from "react";
import Esther from "../Images/Esther.jpeg";
import agnes from "../Images/agnes.jpeg";
import beaty from "../Images/beaty.jpeg";
import chairman from "../Images/chairman.jpeg";
import claudia from "../Images/claudia.jpeg";
import julius from "../Images/julius.jpeg";

const images = [
  { src: Esther, title: "Esther" },
  { src: agnes, title: "Agnes" },
  { src: beaty, title: "Beaty" },
  { src: chairman, title: "Chairman" },
  { src: claudia, title: "Claudia" },
  { src: julius, title: "Julius" },
];

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selected === null) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") setSelected((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setSelected((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  // Swipe handling
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) setSelected((prev) => (prev + 1) % images.length); // swipe left → next
    else if (diff < -50) setSelected((prev) => (prev - 1 + images.length) % images.length); // swipe right → prev
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">
        Our Gallery
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.title}
            className="rounded-xl shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => setSelected(i)}
          />
        ))}
      </div>

      {/* Fullscreen overlay */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" // <-- changed opacity here
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>

          {/* Previous */}
          <button
            className="absolute left-5 text-white text-3xl font-bold"
            onClick={() => setSelected((prev) => (prev - 1 + images.length) % images.length)}
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={images[selected].src}
            alt={images[selected].title}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />

          {/* Next */}
          <button
            className="absolute right-5 text-white text-3xl font-bold"
            onClick={() => setSelected((prev) => (prev + 1) % images.length)}
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;