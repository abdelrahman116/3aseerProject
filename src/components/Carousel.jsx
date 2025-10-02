import { useEffect, useRef, useState } from "react";
import "../Carousel.css";
export default function Carousel() {
  function Carousel({ title, logos, isInView }) {
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState("right"); // الاتجاه اللي آخر مرة المستخدم ضغط عليه أو بدأ بيه

    const scroll = (dir) => {
      if (carouselRef.current) {
        const scrollAmount = 300;
        carouselRef.current.scrollBy({
          left: dir === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    // 🔹 دالة للتقليب بعكس الاتجاه الحالي
    const autoScroll = () => {
      if (!carouselRef.current) return;
      const el = carouselRef.current;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (direction === "left") {
        if (el.scrollLeft <= 0) {
          setDirection("right");
          scroll("left");
        } else {
          scroll("right");
        }
      } else {
        if (el.scrollLeft + 310 >= maxScrollLeft) {
          setDirection("left");
          scroll("right");
        } else {
          scroll("left");
        }
      }
    };

    // Auto scroll كل 3 ثواني (بس يبدأ لو السيكشن ظاهر)
    useEffect(() => {
      if (isPaused || !isInView) return;
      const interval = setInterval(autoScroll, 3000);
      return () => clearInterval(interval);
    }, [isPaused, direction, isInView]);

    return (
      <div className="carousel-section">
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
        </div>

        <div
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => {
              scroll("left");
              setDirection("left");
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="carousel-track" ref={carouselRef}>
            <div className="carousel-content">
              {logos.map((logo, idx) => (
                <div key={idx} className="logo-item">
                  <img src={logo.src || "/placeholder.svg"} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => {
              scroll("right");
              setDirection("right");
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    );
  }
}
