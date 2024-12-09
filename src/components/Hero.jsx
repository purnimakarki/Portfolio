import { PROFILE } from "../constants";
import { useEffect, useRef } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import Purnima from "../assets/Purnima.jpg";
import { gsap } from "gsap";

const Hero = () => {
  const heroref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: 100,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 lg:px-8"
      ref={heroref}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl w-full">
        <div className="lg:w-1/2">
          <img
            src={Purnima}
            alt={PROFILE.name}
            width={400}
            height="300"
            className="hero-img rounded-3xl border-purple-300/20 p-1 w-full max-w-md mx-auto"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
          <h1 className="hero-title text-4xl uppercase lg:text-7xl">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center lg:text-left text-2xl tracking-tighter text-transparent">
            {PROFILE.role}
          </h2>
          <p className="hero-text text-center lg:text-left text-xl tracking-tighter lg:text-2xl">
            {PROFILE.subheading}
          </p>
          <a
  href="/public/Purnima_cv.pdf"
  download="Purnima_cv.pdf"
  className="hero-btn flex gap-1 rounded-full border border-pink-200/50 px-3 tracking-tighter hover:bg-pink-200/10"
>
  <span>Download Resume</span>
  <RiArrowRightUpLine />
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
