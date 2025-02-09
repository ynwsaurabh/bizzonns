import BlogCard from "./BlogCard";

interface MarketingContent {
  id: number;
  title: string;
  imgUrl: string;
  link: string;
  desc: string;
}

const marketingContent: MarketingContent[] = [
  {
    id: 1,
    title: "Mumbai",
    imgUrl: "/mumbai.jpg",
    link: "/contact",
    desc: "321, Powai Plaza76, Hiranandani Gardens, Powai, Mumbai, Maharashtra- 400076",
  },
  {
    id: 2,
    title: "Ranchi",
    imgUrl: "/ranchi.jpg",
    link: "/contact",
    desc: "321, Powai Plaza76, Hiranandani Gardens, Powai, Mumbai, Maharashtra- 400076",
  },
  {
    id: 3,
    title: "Bengaluru",
    imgUrl: "/bengaluru.jpg",
    link: "/contact",
    desc: "159, 17 C Main KHB Colony 05th Block, Koramangala, Bangalore - 95"
  },
];

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto text-center font-inter py-12 pb-12 overflow-hidden">
      <div className="font-inter mx-5 lg:mx-0" data-aos="fade-right">
        <h1 className="text-5xl leading-tight text-gray-900 dark:text-white font-bold">
        Visit Us at Our Locations
        </h1>
        <p className="text-black dark:text-white font-light text-base">
        We have multiple locations ready to serve you.<br />  Check out our nearest one!
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-between items-center gap-3">
        {marketingContent.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
