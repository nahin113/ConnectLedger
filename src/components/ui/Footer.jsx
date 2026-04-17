import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] ">
      <div className="pt-[80px] pb-[30px] space-y-[70px] w-full lg:w-8/12 mx-auto">
        <div className="footer-start text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            <span className="font-extrabold">Keen</span>Keeper
          </h1>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="social-links space-y-4 pt-4">
            <h4 className="font-medium text-[20px]">Social Links</h4>
            <div className="icons flex w-[144px] mx-auto justify-between items-center">
              <div className="w-[40px] h-[40px] rounded-full text-[#101727] bg-white flex justify-center items-center">
                <TbBrandInstagramFilled size={24} />
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-[#101727] bg-white flex justify-center items-center">
                <FaFacebookSquare size={20} />
              </div>
              <div className="w-[40px] h-[40px] rounded-full text-[#101727] bg-white flex justify-center items-center">
                <FaXTwitter size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left footer-end text-base-100/50 lg:flex justify-between items-center">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="pt-4 lg:pt-0 lg:flex justify-between items-center gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
