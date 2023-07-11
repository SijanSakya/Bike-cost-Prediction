import React from "react";
import Image from 'next/image'
import Img1 from "@/static/img/homeImage.jpg"

const HeroSection = () => {
  return (
    <div className=" ">
      <div className=" h-[474px] flex justify-center items-center  w-full py-4">
        <Image
          src={Img1}
          className="object-cover h-[474px]"
        //    height={300}
        //   width={300}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
