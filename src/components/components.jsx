// SponsorsParticipants.jsx
import { useRef, useEffect, useState } from "react"
import LeftTitleAb from '../../assets/left-title.svg'
import RightTitleAb from '../../assets/right-title.svg'
import TopTitleAb from '../../assets/top-title.svg'

function Carousel({ title, logos, isInView }) {
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState("right") // الاتجاه اللي آخر مرة المستخدم ضغط عليه أو بدأ بيه

  const scroll = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = 300
      carouselRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // 🔹 دالة للتقليب بعكس الاتجاه الحالي
  const autoScroll = () => {
    if (!carouselRef.current) return
    const el = carouselRef.current
    const maxScrollLeft = el.scrollWidth - el.clientWidth

    if (direction === "left") {
      if (el.scrollLeft <= 0) {
        setDirection("right")
        scroll("left")
      } else {
        scroll("right")
      }
    } else {
      if (el.scrollLeft + 310 >= maxScrollLeft) {
        setDirection("left")
        scroll("right")
      } else {
        scroll("left")
      }
    }
  }

  // Auto scroll كل 3 ثواني (بس يبدأ لو السيكشن ظاهر)
  useEffect(() => {
    if (isPaused || !isInView) return
    const interval = setInterval(autoScroll, 3000)
    return () => clearInterval(interval)
  }, [isPaused, direction, isInView])

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
            scroll("left")
            setDirection("left")
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
            scroll("right")
            setDirection("right")
          }}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  )
}

function SponsorsParticipants() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 } // يبدأ لما 30% من السيكشن يدخل
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const logos1 = [
    { id: 1, src: "/logos/saudi-calibration.png", alt: "Saudi Calibration House Laboratory" },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    { id: 3, src: "/logos/saudi-calibration-2.png", alt: "Saudi Calibration House Laboratory" },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
    { id: 1, src: "/logos/saudi-calibration.png", alt: "Saudi Calibration House Laboratory" },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    { id: 3, src: "/logos/saudi-calibration-2.png", alt: "Saudi Calibration House Laboratory" },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
  ]

  const logos2 = [
    { id: 7, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 8, src: "/logos/cara.png", alt: "CARA" },
    { id: 9, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
    { id: 10, src: "/logos/saudi-calibration.png", alt: "Saudi Calibration House Laboratory" },
    { id: 11, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    { id: 1, src: "/logos/saudi-calibration.png", alt: "Saudi Calibration House Laboratory" },
    { id: 2, src: "/logos/golden-technology.png", alt: "Golden Technology" },
    { id: 3, src: "/logos/saudi-calibration-2.png", alt: "Saudi Calibration House Laboratory" },
    { id: 4, src: "/logos/house-measurement.png", alt: "House of Measurement" },
    { id: 5, src: "/logos/cara.png", alt: "CARA" },
    { id: 6, src: "/logos/golden-technology-2.png", alt: "Golden Technology" },
  ]

  return (
    <section className="sponsorsAndParticipants" ref={sectionRef}>
      <div className="real-sponsorsAndParticipants">
        <div className="head">
          <div className="real-head">
            <img src={TopTitleAb} alt="Left Title" className="top-title-ab" />
            <div className="title-area">
              <div className="real-title-area">
                <img src={LeftTitleAb} alt="Left Title" className="left-title-ab" />
                <div className="title">الرعاة والمشاركين</div>
                <img src={RightTitleAb} alt="Right Title" className="right-title-ab" />
              </div>
            </div>

            <div className="description-area">
              <div className="real-description-area">
                <div className="description">
                  كن راعيآ مع أبرز الرعاة والمشاركين في المعرض واكتشف كل جديد في قطاع الأغذية والمشروبات وخدمات الضيافة.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="real-content">
            {/* راعي أول */}
            <Carousel title="راعي أول" logos={logos1} isInView={isInView} />

            {/* راعي ثاني */}
            <Carousel title="راعي ثاني" logos={logos2} isInView={isInView} />
          </div>
        </div>
      </div>
      {/* قسم التسجيل كراعي أو مشارك */}
      <div className="register-section-cards">
        <div className="register-card register-card-sponsor">
          <div className="register-title">سجّل ك راعي</div>
          <div className="register-desc">
            فرصة مميزة لعرض علامتك التجارية أمام جمهور مستهدف.<br />
            زيادة ظهور منتجاتك وخدماتك في قطاع الأغذية والمشروبات والضيافة.<br />
            إمكانية بناء شراكات وعلاقات استراتيجية طويلة المدى.
          </div>
          <button className="register-btn register-btn-sponsor">سجل الآن</button>
        </div>
        <div className="register-card register-card-participant">
          <div className="register-title">سجّل ك مشارك</div>
          <div className="register-desc">
            عرض منتجاتك وخدماتك أمام آلاف الزوار والمهتمين.<br />
            فرصة لعقد صفقات مباشرة وتوسيع شبكة عملائك.<br />
            التعرف على أحدث الابتكارات في قطاع الأغذية والمشروبات.
          </div>
          <button className="register-btn register-btn-participant">سجل الآن</button>
        </div>
      </div>
    </section>
  )
}

export default SponsorsParticipants
