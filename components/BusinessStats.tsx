import StatCard from "./StatCard";

const StatContent = [
  {
    title: "Clients Serverd",
    value: "6000 +",
    imgUrl: "/members.svg",
  },
  // {
  //   title: "Clubs",
  //   value: "46,328",
  //   imgUrl: "/club.svg",
  // },
  // {
  //   title: "Event Bookings",
  //   value: "828,267",
  //   imgUrl: "/event.svg",
  // },
  // {
  //   title: "Payments",
  //   value: "1,926,436",
  //   imgUrl: "/payment.svg",
  // },
];

const BusinessStats: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F7FA] dark:bg-gray-900 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-center p-12">
      <div className="font-inter " data-aos="fade-right">
        <h1 className="text-gray-900 dark:text-white font-semibold text-[27px] lg:text-[40px]">
          Helping a local&nbsp; <br />
          <span className="text-[#fd8115]">business reinvent itself</span>
        </h1>
        <p className="text-gray-700 dark:text-white text-[16px] font-normal">
          We reached here with our hard work and dedication.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8 mt-5"> */}
      <div className="grid grid-cols-1 gap-8 mt-5">
        {StatContent.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default BusinessStats;
