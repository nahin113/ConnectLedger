import { IoAddOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto py-[40px] pt-[40px] text-center">
        <h1 className="text-[48px] font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] pb-[32px] pt-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn rounded-[4px] bg-[#244d3f] font-semibold text-white flex items-center justify-center gap-[4px] mx-auto">
          <IoAddOutline size={18} />
          <span>Add a Friend</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
