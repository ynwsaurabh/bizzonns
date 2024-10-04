// components/StatCard.tsx
import Image from 'next/image';

type StatCardProps = {
    imgUrl: string;
    value: string;
    title: string;
}

const StatCard = ({ imgUrl, value, title }: StatCardProps) => {
  return (
    <div className="flex items-center gap-3 p-4" data-aos="zoom-in">
      <Image src={imgUrl} width={48} height={48} alt={title} />
      <div className="flex flex-col">
        <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 dark:text-white">{value}</h2>
        <p className="text-[16px] font-light text-gray-500 dark:text-white">{title}</p>
      </div>
    </div>
  );
}

export default StatCard;
