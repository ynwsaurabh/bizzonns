import React from "react";

interface Testimonial {
  name: string;
  username: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Ravi Kumar",
        username: "@ravikumar",
        quote:
          "The guidance provided was exceptional. It transformed our business strategy!",
        image: "https://avatar.vercel.sh/ravi",
      },
      {
        name: "Anita Sharma",
        username: "@anitasharma",
        quote: "Their insights have been invaluable; we’ve seen significant growth!",
        image: "https://avatar.vercel.sh/anita",
      },
      {
        name: "John Smith",
        username: "@johnsmith",
        quote: "This consulting service has completely changed our approach to business.",
        image: "https://avatar.vercel.sh/john",
      },
      {
        name: "Priya Patel",
        username: "@priyapatel",
        quote: "The team's expertise is unparalleled. Highly recommended!",
        image: "https://avatar.vercel.sh/priya",
      },
      {
        name: "David Lee",
        username: "@davidlee",
        quote: "Exceptional service! They helped us navigate complex challenges with ease.",
        image: "https://avatar.vercel.sh/david",
      },
      {
        name: "Neha Singh",
        username: "@nehasingh",
        quote: "Their strategic advice has been a game changer for our company!",
        image: "https://avatar.vercel.sh/neha",
      },
      {
        name: "Emily Johnson",
        username: "@emilyjohnson",
        quote: "Working with this team has been a breath of fresh air for our operations!",
        image: "https://avatar.vercel.sh/emily",
      },
      {
        name: "Vikram Rao",
        username: "@vikramrao",
        quote: "A truly transformative experience! Their insights are priceless.",
        image: "https://avatar.vercel.sh/vikram",
      },{
        name: "Ravi Kumar",
        username: "@ravikumar",
        quote:
          "The guidance provided was exceptional. It transformed our business strategy!",
        image: "https://avatar.vercel.sh/ravi",
      },
      {
        name: "Anita Sharma",
        username: "@anitasharma",
        quote: "Their insights have been invaluable; we’ve seen significant growth!",
        image: "https://avatar.vercel.sh/anita",
      },
      {
        name: "John Smith",
        username: "@johnsmith",
        quote: "This consulting service has completely changed our approach to business.",
        image: "https://avatar.vercel.sh/john",
      },
      {
        name: "Priya Patel",
        username: "@priyapatel",
        quote: "The team's expertise is unparalleled. Highly recommended!",
        image: "https://avatar.vercel.sh/priya",
      },
      {
        name: "David Lee",
        username: "@davidlee",
        quote: "Exceptional service! They helped us navigate complex challenges with ease.",
        image: "https://avatar.vercel.sh/david",
      },
      {
        name: "Neha Singh",
        username: "@nehasingh",
        quote: "Their strategic advice has been a game changer for our company!",
        image: "https://avatar.vercel.sh/neha",
      },
      {
        name: "Emily Johnson",
        username: "@emilyjohnson",
        quote: "Working with this team has been a breath of fresh air for our operations!",
        image: "https://avatar.vercel.sh/emily",
      },
      {
        name: "Vikram Rao",
        username: "@vikramrao",
        quote: "A truly transformative experience! Their insights are priceless.",
        image: "https://avatar.vercel.sh/vikram",
      },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-8  bg-white dark:bg-[#000] pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
      <div className="flex h-full w-full flex-col items-center pt-10">
        <div>
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-zinc-100 md:text-5xl">
            What People Are Saying
          </h1>
        </div>
        <div className="mb-6 text-xl text-gray-900 dark:text-zinc-100 md:text-xl">
          Don’t just take our word for it. Here’s what{" "}
          <span className="font-bold">real people</span> are saying about
          Bizzoons.
        </div>
        <div className="w-full overflow-x-hidden">
          <div className="relative flex h-full w-full bg-white dark:bg-[#000] flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {testimonials.map((testimonial, index) => (
                  <figure
                    key={index}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className="rounded-full"
                        width={32}
                        height={32}
                        alt=""
                        src={testimonial.image}
                      />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </figcaption>
                        <p className="text-xs font-medium text-gray-900 dark:text-white dark:text-white/40">
                          {testimonial.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm text-gray-900 dark:text-white">
                      {testimonial.quote}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
            {/* Duplicate the marquee for smooth scrolling */}
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]">
                {testimonials.map((testimonial, index) => (
                  <figure
                    key={index}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className="rounded-full"
                        width={32}
                        height={32}
                        alt=""
                        src={testimonial.image}
                      />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </figcaption>
                        <p className="text-xs font-medium text-gray-900/100 dark:text-white/40">
                          {testimonial.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm text-gray-900 dark:text-white">
                      {testimonial.quote}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-[#000]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-[#000]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
