import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Testimonial {
  name: string;
  username: string;
  quote: string;
  image: string;
}
const testimonials: Testimonial[] = [
  {
    name: "Pankaj Kanwal",
    username: "@pankajkanwal",
    quote:
      "Terrific team; highly professional and competent. Alka, I'm really happy with the determination that was shown to deliver the projects. I am pretty sure that your ‘can do attitude’ will earn you many more clients in future. Kudos to you and your team. Wish you fair winds!",
    image: "https://avatar.vercel.sh/pankajkanwal",  
  },
  {
    name: "Mausam Sharma",
    username: "@mausamsharma",
    quote:
      "When I was confused about where to go for my new company registration, I came to know about Bizzons through a friend, and I cannot thank him enough for that 😊. I would especially like to thank Ms. Alka and Mr. Ayaan for their consistent support. Highly recommend Bizzons to all the newbies who are amateurs like me and to the experienced as well. Keep up the good work team. 👍",
    image: "https://avatar.vercel.sh/mausamsharma", 
  },
  {
    name: "ABHISREE Ravin",
    username: "@abhisree_ravin",
    quote:
      "Exemplary client commitment and 'make it happen' attitude of Ms. Alka and her team is highly commendable. They have displayed high professional standards from start to the successful closing of the assignment. They are competent both technically and professionally. Always ready to listen even under Covid pandemic pressure, and willing to help with a genuine smile. Wishing you and your team great success.",
    image: "https://avatar.vercel.sh/abhisree_ravin", 
  },
  {
    name: "Varsha Jain",
    username: "@varshajain",
    quote:
      "I have experienced the best services. They offer IT return filing, GST return filing, and all the compliance services. They always work on time. Once you hand over your returns and compliance tasks, you just have to sit back and relax.",
    image: "https://avatar.vercel.sh/varshajain", 
  },
  {
    name: "Anshul Tiwari",
    username: "@anshultiwari",
    quote:
      "These guys are doing all incorporation and company compliance work fast and efficiently. Avinash is an expert in private security licenses. Good work, team Bizzons!",
    image: "https://avatar.vercel.sh/anshultiwari", 
  },
  {
    name: "Rustam Chaudhari",
    username: "@rustamchaudhari",
    quote:
      "We took services from Bizzons for our company's related work. Their team is very professional, knowledgeable, and responsive in terms of company law. Extremely satisfied!",
    image: "https://avatar.vercel.sh/rustamchaudhari", 
  },
  {
    name: "Hardik Vyas",
    username: "@hardikvyas",
    quote:
      "I highly recommend anyone who is struggling with the next steps of their business. I was at a stalemate with my business and was only able to move it forward in ways I never knew how until I received guidance from Sagar Sir. Truly cares about their clients.",
    image: "https://avatar.vercel.sh/hardikvyas", 
  },
  {
    name: "Kavita Dhandre",
    username: "@kavitadhandre",
    quote:
      "Got so much support from our company registration to every work till now; everything is perfect. Staff is very polite, and we are happy with the services. Thank you, Bizzons Team 🙂",
    image: "https://avatar.vercel.sh/kavitadhandre", 
  },
  {
    name: "Akash Chaudhary",
    username: "@akashchaudhary",
    quote:
      "One of the best accounting firms, acts as your partner. Working with them for the past 5 years.",
    image: "https://avatar.vercel.sh/akashchaudhary", 
  },
  {
    name: "Vighnesh Peravi",
    username: "@vighneshperavi",
    quote:
      "Superb services by the company. Appreciate Sagar's efforts on how he handles the work. Good work, Sagar. God bless you. Thank you a lot.",
    image: "https://avatar.vercel.sh/vighneshperavi", 
  },
  {
    name: "Anand Telang",
    username: "@anandtelang",
    quote:
      "Sharp and proactive team. Helped me set up with the best and right advice. Been very supportive in my new journey. Keep it up...👍",
    image: "https://avatar.vercel.sh/anandtelang", 
  },
  {
    name: "Cigarette Wala",
    username: "@cigarettewala",
    quote:
      "Cooperative and supportive team. Very helpful, great advisers, and very professional. Glad to work with them. Thanks.",
    image: "https://avatar.vercel.sh/cigarettewala", 
  },
  {
    name: "Chetan Vyas",
    username: "@chetanvyas",
    quote:
      "Perfect quality services. Helped me with my registration with proper guidance.",
    image: "https://avatar.vercel.sh/chetanvyas", 
  },
  {
    name: "Parth Shirkhe",
    username: "@parthshirkhe",
    quote:
      "Awesome services for PSARA License. Thank you, Bizzons team 👌🏻👌🏻👌🏻",
    image: "https://avatar.vercel.sh/parthshirkhe", 
  },
  // {
  //   name: "Nagaraja P",
  //   username: "@nagarajap",
  //   quote:
  //     "Nice, professional, and timely service. Trustworthy.",
  //   image: "https://avatar.vercel.sh/nagarajap", 
  // },
  // {
  //   name: "Anwar Jamal",
  //   username: "@anwarjamal",
  //   quote:
  //     "Great work, all the work is done on time, and the support is up to the mark.",
  //   image: "https://avatar.vercel.sh/anwarjamal", 
  // },
  // {
  //   name: "Preeti Mandke",
  //   username: "@preetimandke",
  //   quote: "Excellent in services. Thank you, Avinash.",
  //   image: "https://avatar.vercel.sh/preetimandke", 
  // },
  {
    name: "Akhil Swaroop",
    username: "@akhilswaroop",
    quote:
      "Good domain knowledge, professional & timely delivery are the key factors of Bizzonns. I am glad to give my project to them.",
    image: "https://avatar.vercel.sh/akhilswaroop", 
  },
  {
    name: "Abhishek Sarathe",
    username: "@abhisheksarathe",
    quote:
      "Great service experience, satisfied with the quality of work for the customers.",
    image: "https://avatar.vercel.sh/abhisheksarathe", 
  },
  // {
  //   name: "Chetna Manchanda",
  //   username: "@chetnamanchanda",
  //   quote:
  //     "Best experience. Co-operative team. Thank you for your help.",
  //   image: "https://avatar.vercel.sh/chetnamanchanda", 
  // },
  // {
  //   name: "Ayush Gupta",
  //   username: "@ayushgupta",
  //   quote:
  //     "Very smart folks with great commitment and service delivery.",
  //   image: "https://avatar.vercel.sh/ayushgupta", 
  // },
  // {
  //   name: "RATANDEEP SONI",
  //   username: "@ratandeepsoni",
  //   quote:
  //     "Thanks, Sagar, for getting documents on time.",
  //   image: "https://avatar.vercel.sh/ratandeepsoni", 
  // },
  // {
  //   name: "Pravin Bhanudas Jagtap",
  //   username: "@pravinbhanudasjagtap",
  //   quote: "Best consulting and support provided.",
  //   image: "https://avatar.vercel.sh/pravinbhanudasjagtap", 
  // },
  // {
  //   name: "Baljit Parmar",
  //   username: "@baljitparmar",
  //   quote: "Great service, quick response.",
  //   image: "https://avatar.vercel.sh/baljitparmar", 
  // },
  // {
  //   name: "Arti Sawarkar",
  //   username: "@artisawarkar",
  //   quote: "Excellent support and helpful.",
  //   image: "https://avatar.vercel.sh/artisawarkar", 
  // },
  // {
  //   name: "Rajesh Jawre",
  //   username: "@rajeshjawre",
  //   quote: "Very best service.",
  //   image: "https://avatar.vercel.sh/rajeshjawre", 
  // },
  // {
  //   name: "Krishna Kumar",
  //   username: "@krishnakumar",
  //   quote: "Fast service.",
  //   image: "https://avatar.vercel.sh/krishnakumar", 
  // },
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
        <div className="mb-6 md:mb-0"><Link href="https://g.co/kgs/ovjD9oF"><p className="flex gap-2 text-blue-500"><Pencil size={16} className="mt-1" />Write a review</p></Link></div>
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
                    <blockquote className="mt-2 text-sm text-gray-900 dark:text-white h-20">
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
                    <blockquote className="mt-2 text-sm text-gray-900 dark:text-white h-20">
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
