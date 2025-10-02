// SponsorsParticipants.jsx
import { useRef, useEffect, useState } from "react";
import Carousel from "./Carousel";
import "../Carousel.css";
function SponsorsParticipants() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // يبدأ لما 30% من السيكشن يدخل
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const logos1 = [
    {
      id: 1,
      src: "/logos/saudi-calibration.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    {
      id: 3,
      src: "/logos/saudi-calibration-2.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
    {
      id: 1,
      src: "/logos/saudi-calibration.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    {
      id: 3,
      src: "/logos/saudi-calibration-2.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
  ];

  const logos2 = [
    { id: 7, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 8, src: "/logos/cara.png", alt: "CARA" },
    { id: 9, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
    {
      id: 10,
      src: "/logos/saudi-calibration.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 11, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    {
      id: 1,
      src: "/logos/saudi-calibration.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    {
      id: 3,
      src: "/logos/saudi-calibration-2.png",
      alt: "Saudi Calibration House Laboratory",
    },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
  ];

  return (
    <div>
      {/* راعي أول */}
      <Carousel title="راعي أول" logos={logos1} isInView={isInView} />

      {/* راعي ثاني */}
      <Carousel title="راعي ثاني" logos={logos2} isInView={isInView} />
    </div>
  );
}

export default SponsorsParticipants;
