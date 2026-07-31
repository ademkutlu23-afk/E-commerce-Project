import heroImage from "../assets/hero-woman.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function HomePage() {
    const [heroSlide, setHeroSlide] = useState(0);
    const heroSlides = [
  {
    season: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    image: heroImage,
  },
  {
  season: "WINTER 2020",
  title: "SPECIAL COLLECTION",
  description:
    "Discover our new collection designed for comfort and style.",
  image: heroImage,
},
  
];
const activeSlide = heroSlides[heroSlide];
const nextSlide = () => {
  setHeroSlide((previousSlide) =>
    (previousSlide + 1) % heroSlides.length
  );
};
const previousSlide = () => {
  setHeroSlide((currentSlide) =>
    (currentSlide - 1 + heroSlides.length) % heroSlides.length
  );
};
useEffect(() => {
  const sliderTimer = setInterval(() => {
    setHeroSlide(
      (currentSlide) => (currentSlide + 1) % heroSlides.length
    );
  }, 5000);

  return () => clearInterval(sliderTimer);
}, [heroSlides.length]);
  return (
    <section 
    className="mx-6 mt-10 flex min-h-[600px] flex-col overflow-hidden rounded-xl bg-linear-to-r from-[#96E9FB] to-[#ABECD6] md:min-h-[430px] md:flex-row md:items-center relative md:mx-auto md:max-w-[1292px]">
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

      <img
       src={activeSlide.image}
        alt="New Collection"
        className="mt-auto w-full object-contain md:ml-auto md:mt-0 md:w-1/2"
      />
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

export default HomePage;
