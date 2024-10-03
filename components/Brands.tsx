// components/Marquee.tsx
import React from "react";

const logos = [
  { src: "/bizzonns.png", alt: "mozilla" },
  { src: "/bizzonns.png", alt: "1password" },
  { src: "/bizzonns.png", alt: "pwc" },
  { src: "/bizzonns.png", alt: "pika" },
  { src: "/bizzonns.png", alt: "humata" },
  { src: "/bizzonns.png", alt: "krea" },
  { src: "/bizzonns.png", alt: "udio" },
  { src: "/bizzonns.png", alt: "langchain" },
  { src: "/bizzonns.png", alt: "resend" },
  { src: "/bizzonns.png", alt: "loops" },
  { src: "/bizzonns.png", alt: "mobbin" },
  { src: "/bizzonns.png", alt: "gopuff" },
  { src: "/bizzonns.png", alt: "chatbase" },
  { src: "/bizzonns.png", alt: "betashares" },
];

const Brands = () => {
  return (
    <div className="mt-16">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        <div className="relative w-full mx-auto max-w-4xl animate-marquee-reverse opacity-90 dark:opacity-70 overflow-hidden flex flex-nowrap justify-center gap-4 lg:gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-reverse "
            >
              {logos.map((logo) => (
                <div key={logo.alt} className="h-12 lg:h-12 w-max !inline-block">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="w-full text-center text-sm text-foreground-lighter mt-6 lg:mt-8">
          Trusted by fast-growing companies worldwide
        </p>
      </div>
    </div>
  );
};

export default Brands;
