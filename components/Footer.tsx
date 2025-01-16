import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Take the First Step Towards Creating Something <span className="text-orange-200">Extraordinary.</span>
        </h1>
        <p className="text-orange-400 md:mt-10 my-5 text-center">
          Get in touch, and let&apos;s make it happen.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=guire24rumble@gmail.com" 
        target="_blank" rel="noreferrer"
        >
          <MagicButton
            title="Send me an email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Anthony Maguire | GuireWire
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#221003] rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;