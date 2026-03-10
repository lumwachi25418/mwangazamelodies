import { useState, useEffect } from "react";
import img1 from "../Images/WhatsApp Image 2025-07-25 at 10.03.26 PM.jpeg";
import img2 from "../Images/WhatsApp Image 2025-07-25 at 10.03.27 PM.jpeg";
import img3 from "../Images/WhatsApp Image 2025-07-25 at 10.03.32 PM.jpeg";
import img4 from "../Images/WhatsApp Image 2025-07-25 at 10.03.33 PM.jpeg";
import img5 from "../Images/WhatsApp Image 2025-07-25 at 10.03.34 PM.jpeg";

function Hero() {
  const slides = [img1, img2, img3, img4, img5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "700px" }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mwangaza Melodies</h1>
        <p className="text-lg max-w-2xl">Discover the soulful sounds of Mwangaza Melodies, where music meets inspiration.</p>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;