import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

const Notfound = () => {
    return (
      <div className="bg-base-300 h-screen">
        <div className="py-[80px] text-center space-y-6">
          <h1 className="text-[#244d3f] text-8xl font-extrabold">404</h1>
          <h2 className="text-5xl text-black font-bold">Page Not Found</h2>
          <p className="text-[#64748b] font-semibold">
            Looks like this friendship link is broken. The page <br /> you're
            looking for doesn't exist or has been removed
          </p>
          <Link href={"/"} className="btn bg-[#244d3f] text-white">
            <RiHome2Line />
            Home
          </Link>
        </div>
      </div>
    );
};

export default Notfound;