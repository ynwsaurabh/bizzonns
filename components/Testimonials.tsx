import React from "react";

interface Testimonial {
  name: string;
  username: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jack",
    username: "@jack",
    quote:
      "I've never seen anything like this before. It's amazing. I love it.",
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    quote: "This tool has revolutionized the way our team works.",
    image: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    quote: "I'm at a loss for words. This is amazing. I love it.",
    image: "https://avatar.vercel.sh/john",
  },
  {
    name: "王伟",
    username: "@wangwei",
    quote: "这款 SaaS 服务简直是办公利器！我的工作效率提高了很多。",
    image: "https://avatar.vercel.sh/jane",
  },
  {
    name: "김민수",
    username: "@kios",
    quote: "저는 이 SaaS 서비스에 매우 만족하고 있습니다.",
    image: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "山田太郎",
    username: "@samtimkun",
    quote: "このSaaSサービスには本当に感謝しています。",
    image: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jack",
    username: "@jack",
    quote:
      "I've never seen anything like this before. It's amazing. I love it.",
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    quote: "This tool has revolutionized the way our team works.",
    image: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    quote: "I'm at a loss for words. This is amazing. I love it.",
    image: "https://avatar.vercel.sh/john",
  },
  {
    name: "王伟",
    username: "@wangwei",
    quote: "这款 SaaS 服务简直是办公利器！我的工作效率提高了很多。",
    image: "https://avatar.vercel.sh/jane",
  },
  {
    name: "김민수",
    username: "@kios",
    quote: "저는 이 SaaS 서비스에 매우 만족하고 있습니다.",
    image: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "山田太郎",
    username: "@samtimkun",
    quote: "このSaaSサービスには本当に感謝しています。",
    image: "https://avatar.vercel.sh/james",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
      <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
        <div>
          <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
            What People Are Saying
          </h1>
        </div>
        <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
          Don’t just take our word for it. Here’s what{" "}
          <span className="font-bold">real people</span> are saying about
          Bizzoons.
        </div>
        <div className="w-full overflow-x-hidden">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
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
                        <figcaption className="text-sm font-medium dark:text-white">
                          {testimonial.name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">
                          {testimonial.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
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
                        <figcaption className="text-sm font-medium dark:text-white">
                          {testimonial.name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">
                          {testimonial.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {testimonial.quote}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
