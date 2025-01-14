import Image from "next/image";
import React from "react";
import imagehotel from "../../public/assets/images/hotels.jpg";
import { FaHotel } from "react-icons/fa";
import { BiStar, BiDollarCircle } from "react-icons/bi";
import NotsPriceSection from "./NotsPriceSection";
function Prices() {
  return (
    <div className="container mx-auto pt-5 ">
      <div className="flex flex-col gap-3 shadow-md p-3 rounded-lg">
        {/* hotels  */}
        <div className=" flex flex-col md:flex-row md:flex-wrap  gap-3  ">
          <div className=" text-[#029e9d]  border-b md:border-b-0 md:border-r md:p-3">
            <FaHotel size={70} />
            <h2 className="text-[#17233e] text-2xl font-serif capitalize font-bold my-2">
              hotels
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:w-[25%]  md:border-r md:pr-3">
            <div className="rounded-md overflow-hidden object-contain">
              <Image
                src={imagehotel}
                alt="Hotels"
                width={500}
                height={300}
                loading="lazy"
                layout="intrinsic"
              />
            </div>
            <p className="text-lg text-[#17233e] font-serif capitalize my-2">
              Holiday Inn Express Newport Beach
            </p>
            <div className="flex gap-2">
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-[25%] md:border-r md:pr-3">
            <div className="rounded-md overflow-hidden object-contain">
              <Image
                src={imagehotel}
                alt="Hotels"
                width={500}
                height={300}
                loading="lazy"
                layout="intrinsic"
              />
            </div>
            <p className="text-lg text-[#17233e] font-serif capitalize my-2">
              Holiday Inn Express Newport Beach
            </p>
            <div className="flex gap-2">
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-[25%] md:border-r md:pr-3">
            <div className="rounded-md overflow-hidden object-contain">
              <Image
                src={imagehotel}
                alt="Hotels"
                width={500}
                height={300}
                loading="lazy"
                layout="intrinsic"
              />
            </div>
            <p className="text-lg text-[#17233e] font-serif capitalize my-2">
              Holiday Inn Express Newport Beach
            </p>
            <div className="flex gap-2">
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
              <BiStar size={24} color="#ffbc00" />
            </div>
          </div>
        </div>
        {/* prise */}
        <div className="flex flex-col gap-3  ">
          <div className=" text-[#029e9d]  border-b">
            <BiDollarCircle size={70} />
            <h2 className="text-[#17233e] text-2xl font-serif capitalize font-bold my-2">
              prices
            </h2>
          </div>
          <div className=" flex flex-col gap-5 md:flex-row md:py-4 md:gap-7 ">
            {/* summer */}
            <div className="flex flex-col  gap-2 md:flex-1  ">
              <h4 className="text-[#17233e] text-xl font-serif capitalize ">MAY-SEPT</h4>
              <p  className="text-[#777] font-serif capitalize text-lg">
                <span  className="font-mono text-[#ffbc00]" > £ 905</span> Per Person in Triple Room
              </p>
              <p className="text-[#777] font-serif capitalize text-lg">
                <span  className="font-mono text-[#ffbc00]">£ 979 </span>Per  Person in Double Room
              </p>
              <p className="text-[#777] font-serif capitalize text-lg">
                <span className="font-mono text-[#ffbc00]"> £ 1465</span> One Person Traveling Alone
              </p>
            </div>
            {/* winter */}
            <div className="flex flex-col  gap-2 md:flex-1 ">
              <h4 className="text-[#17233e] text-xl font-serif capitalize ">OCT-APRIL</h4>
              <p  className="text-[#777] font-serif capitalize text-lg">
                <span  className="font-mono text-[#ffbc00]" > £ 1030</span> Per Person in Triple Room
              </p>
              <p className="text-[#777] font-serif capitalize text-lg">
                <span  className="font-mono text-[#ffbc00]">£ 1086 </span>Per  Person in Double Room
              </p>
              <p className="text-[#777] font-serif capitalize text-lg">
                <span className="font-mono text-[#ffbc00]"> £ 1720</span> One Person Traveling Alone
              </p>
            </div>
          </div>
        </div>
      </div>
      <NotsPriceSection/>
    </div>
  );
}

export default Prices;
