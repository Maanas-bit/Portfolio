"use client"

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import {useRouter} from "next/navigation"

const Footer = () => {
  let router = useRouter()

  function iufuwrh(){
    console.log("Hello")
    router.push("Touch")
  }
  function Copyright(){
    router.push("Copyright")
  }

  return ( 
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals. 
        </p>
        <MagicButton
            otherClasses="font-bold text-lg"
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={iufuwrh}
          />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <a onClick={Copyright} className="cursor-pointer">
          <p className="md:text-base text-sm md:font-normal font-light">Copyright &copy; 2024 Maanas Jakhar, cause why not 	&#58;&#41;</p>
        </a>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link} target="_blank">
              <div  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} width={20} height={20} className="filter-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;