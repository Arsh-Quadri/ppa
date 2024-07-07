import Image from "next/image";
import logo from "../../public/smallLogo.svg";
import insta from "../../public/socialmedia/instagram.webp";
import dribble from "../../public/socialmedia/dribble.png";
import x from "../../public/socialmedia/x.png";
import yt from "../../public/socialmedia/youtube.webp";
import send from "../../public/send.png";

export default function Footer() {
  return (
    <footer className="footer w-full  text-white bg-[#263238] mx-auto p-12">
      <div className="w-full max-w-[1086px] mx-auto flex flex-wrap justify-between items-center gap-10 lg:gap-0 ">
        <div className="flex flex-col justify-center items-start mx-auto lg:mx-0 gap-5">
          <div className="flex justify-center items-center gap-2 text-white text-3xl font-bold">
            <Image src={logo} alt="logo" className="cursor-pointer" />
            Nexcent
          </div>
          <div className="text-sm text-[#c7c7c7]">
            Copyright @ 2024 Nexcent ltd. <br /> all right reserved
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-gray-600 rounded-full p-2">
              <Image src={insta} alt="social media" className="w-5" />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <Image src={dribble} alt="social media" className="w-5" />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <Image src={x} alt="social media" className="w-5" />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <Image src={yt} alt="social media" className="w-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-between flex-wrap items-start gap-16 mx-auto lg:m-0  text-center md:text-start">
          <div className="company flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white">Company</h3>
            <p className="text-[#c7c7c7] text-sm mt-3">About us</p>
            <p className="text-[#c7c7c7] text-sm">Blog</p>
            <p className="text-[#c7c7c7] text-sm">Contact us</p>
            <p className="text-[#c7c7c7] text-sm">Pricing</p>
            <p className="text-[#c7c7c7] text-sm">Testimonials</p>
          </div>
          <div className="support flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white">Support</h3>
            <p className="text-[#c7c7c7] text-sm mt-3">Help center</p>
            <p className="text-[#c7c7c7] text-sm">Terms of service</p>
            <p className="text-[#c7c7c7] text-sm">Legal</p>
            <p className="text-[#c7c7c7] text-sm">Privacy policy</p>
            <p className="text-[#c7c7c7] text-sm">Status</p>
          </div>
          <div className="email flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white">Stay up to date</h3>
            <div className="px-5 py-2 flex justify-center mt-4 rounded-md bg-gray-600 items-center">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-transparent outline-none"
              />
              <Image src={send} alt="logo" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
