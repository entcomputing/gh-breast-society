import Link from "next/link";

const Banner = () => {
  return (
    <div
      className={`flex items-center justify-center space-x-5 bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] text-white section-p`}
    >
      <Link href="#" rel="noopener noreferrer" target="_blank">
        <button className="bg-white font-semibold text-dark-pink px-5 py-3 rounded-[6px] uppercase lg:px-7 lg:text-lg tracking-wide">
          View Constitution
        </button>
      </Link>

      <Link href="#" rel="noopener noreferrer" target="_blank">
        <button className="bg-white font-semibold text-dark-pink px-5 py-3 rounded-[6px] uppercase lg:px-7 lg:text-lg tracking-wide">
          Speech
        </button>
      </Link>
    </div>
  );
};

export default Banner;
