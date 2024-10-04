import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  link: string;
  desc: string;
};

const BlogCard = ({ id, imgUrl, title, link, desc }: BlogCardProps) => {
  return (
    <div
      className="relative bg-gray-200 dark:bg-gray-900 rounded-lg shadow-lg mx-5 lg:mx-0 mt-20 lg:my-12"
      data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}
    >
      <Image
        src={imgUrl}
        width={368}
        height={286}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute z-10 top-[15.25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] bg-[#fff] dark:bg-[#000] p-4 text-center rounded-lg shadow-lg">
        <h2 className="text-[16px]  text-black dark:text-white lg:text-[24px] font-semibold">{title}</h2>
        <p className="mt-2 text-[14px] lg:text-base text-black dark:text-white">
          {desc}
        </p>
        <Link
          href={link}
          className="text-blue-500 hover:underline mt-2 p-2 lg:p-4 inline-block"
        >
          Contact us &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
