"use client";

import Carousel from "react-bootstrap/Carousel";

interface Slide {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonHref: string;
}

const slides: Slide[] = [
  {
    eyebrow: "WELCOME TO VILMUSE STUDIO",
    title: "Let your music bloom.",
    subtitle:
      "Discover your musical potential through piano lessons designed around your own pace.",
    imageUrl: "/images/piano-duet.jpg",
    buttonText: "Explore our programs",
    buttonHref: "#programs",
  },
  {
    eyebrow: "LEARN • EXPLORE • GROW",
    title: "Find the joy in every note.",
    subtitle:
      "Build a strong musical foundation, understand the language of music, and enjoy every step.",
    imageUrl: "/images/piano.jpg",
    buttonText: "Get to know us",
    buttonHref: "#about",
  },
  {
    eyebrow: "MAKE EVERY MOMENT COUNT",
    title: "Your stage is waiting.",
    subtitle:
      "Celebrate your progress, share your passion, and grow your confidence through performance.",
    imageUrl: "/images/piano-perform.jpg",
    buttonText: "Start your journey",
    buttonHref: "#contact",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="vm-hero">
      <Carousel
        className="vm-carousel"
        fade
        interval={5000}
        pause="hover"
        controls
        indicators
        keyboard
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.eyebrow}>
            <div
              className="vm-slide"
              style={{
                backgroundImage: `url("${slide.imageUrl}")`,
              }}
            >
              <div className="vm-slide-overlay" />

              <div className="vm-slide-content">
                <p className="vm-hero-eyebrow">
                  {slide.eyebrow}
                </p>

                <h1>{slide.title}</h1>

                <p className="vm-slide-description">
                  {slide.subtitle}
                </p>

                <a
                  className="vm-button"
                  href={slide.buttonHref}
                >
                  {slide.buttonText} →
                </a>
              </div>

              <span className="vm-slide-index">
                VILMUSE STUDIO / MUSIC FOR EVERY MOMENT
              </span>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
