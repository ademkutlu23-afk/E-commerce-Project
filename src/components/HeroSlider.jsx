import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-woman.png";
import winterImage from "../assets/hero-backgroundwinter.png";

const heroSlides = [
  {
    season: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    image: heroImage,
    imageAlt: "Summer collection",
    imageStyle: "md:w-1/2",
    hasCircle: false,
  },
  {
    season: "WINTER 2020",
    title: "SPECIAL COLLECTION",
    description:
      "Discover our new collection designed for comfort and style.",
    image: winterImage,
    imageAlt: "Winter collection",
    imageStyle: "md:w-[46%]",
    hasCircle: true,
  },
];

function HeroSlider() {
  const [heroSlide, setHeroSlide] = useState(0);
  const activeSlide = heroSlides[heroSlide];

  const nextSlide = () => {
    setHeroSlide((currentSlide) =>
      (currentSlide + 1) % heroSlides.length
    );
  };

  const previousSlide = () => {
    setHeroSlide((currentSlide) =>
      (currentSlide - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setHeroSlide((currentSlide) =>
        (currentSlide + 1) % heroSlides.length
      );
    }, 5000);

    return () => clearInterval(sliderTimer);
  }, []);

  return (
    <section className="relative mx-6 mt-10 flex h-[600px] flex-col overflow-hidden rounded-xl bg-linear-to-r from-[#96E9FB] to-[#ABECD6] md:mx-auto md:h-[574px] md:max-w-[1292px] md:flex-row md:items-center">
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Önceki slayt"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-white"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="w-full px-8 pt-10 text-center md:w-1/2 md:px-12 md:pt-0 md:text-left">
        <p className="text-sm font-bold text-[#2A7CC7]">
          {activeSlide.season}
        </p>

        <h1 className="mt-6 text-4xl font-bold text-[#252B42]">
          {activeSlide.title}
        </h1>

        <p className="mt-6 max-w-xs text-base leading-6 text-[#737373]">
          {activeSlide.description}
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-flex rounded bg-[#23A6F0] px-7 py-3 text-sm font-bold text-white"
        >
          SHOP NOW
        </Link>
      </div>

      <div
        className={`relative mt-auto flex w-full items-end justify-center md:ml-auto md:mt-0 md:h-full ${activeSlide.imageStyle}`}
      >
        {activeSlide.hasCircle && (
          <div className="absolute h-[85%] w-[85%] rounded-full bg-white" />
        )}
        <img
          src={activeSlide.image}
          alt={activeSlide.imageAlt}
          className="relative max-h-[360px] w-full object-contain md:max-h-full"
        />
      </div>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Sonraki slayt"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-white"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setHeroSlide(index)}
            aria-label={`${index + 1}. slayta git`}
            className={`h-2 rounded-full ${
              heroSlide === index ? "w-8 bg-white" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
