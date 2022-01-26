import React from "react";
import { Link } from "react-router-dom";
import aris from "../images/aris.png";

export default function ContainComponents() {
  return (
    <div>
      <BannerComponents />
      <DoingComponents />
    </div>
  );
}

export function BannerComponents() {
  return (
    <div>
      <div className=" w-full bg-gray-700 rounded-md bg-gradient-to-br from-green-500 to-green-400 static drop-shadow-md">
        <div className="flex flex-col absolute desktop:hidded laptop:hidden tablet:hidden mobile:block">
          <div className=" bg-lime-700 w-12 h-12 rounded-full opacity-10 ml-2 mt-2 drop-shadow-md"></div>
          <div className=" bg-green-800 w-14 h-14 rounded-full opacity-10 mobile:ml-20 drop-shadow-lg"></div>
          <div className=" bg-green-600 w-14 h-14 rounded-full opacity-30 mobile:ml-40 drop-shadow-lg"></div>
        </div>
        <div className="flex flex-row  justify-between px-5">
          <div className="flex mobile:flex-col tablet:py-20">
            <div className="text-white pt-10">
              <p className="font-semibold text-2xl">
                Hi I'm <span className=" text-gray-600">Aris</span> Trisnawan
              </p>
              <p className="font-semibold text-lg">
                I'm Frontend Developer. currently learning reactJs.
              </p>
            </div>
            <div className=" py-4 text-white">
              <Link
                to="/about"
                className="cursor-pointer py-2 px-2 bg-gradient-to-tr from-green-600 to-green-400 drop-shadow-lg rounded-lg hover:drop-shadow-xl"
              >
                More About Me
              </Link>
            </div>
          </div>
          <div className="mobile:hidden tablet:hidden laptop:block desktop:block my-auto">
            <div
              className=" w-40 h-40 bg-gradient-to-r from-green-700 to-green-200 rounded-full bg-center opacity-50 drop-shadow-lg"
              style={{ backgroundImage: `url(${aris})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DoingComponents() {
  return (
    <div className="py-5">
      <div>
        <p className="text-2xl font-bold">What I Do ?</p>
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 tablet:gap-6 laptop:gap-10">
          <div className="mobile w-full mobile:h-20 tablet:h-20 laptop:h-28 rounded-xl mx-auto  mt-5 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] cursor-pointer hover:scale-105">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
              <p className="my-auto text-lg font-medium">Building Projects</p>
            </div>
          </div>
          <div className="mobile w-full mobile:h-20 tablet:h-20 laptop:h-28 rounded-xl mx-auto  mt-5 bg-gradient-to-r p-[6px] from-[#c6fc03] via-[#03fc2c] to-[#03dffc] cursor-pointer hover:scale-105">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
              <p className="my-auto text-lg font-medium">Doing the challenge</p>
            </div>
          </div>
          <div className="mobile w-full mobile:h-20 tablet:h-20 laptop:h-28 rounded-xl mx-auto  mt-5 bg-gradient-to-r p-[6px] from-[#eddb11] via-[#378076] to-[#4668a3] cursor-pointer hover:scale-105">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
              <p className="my-auto text-lg font-medium">Jogging</p>
            </div>
          </div>
          <div className="mobile w-full mobile:h-20 tablet:h-20 laptop:h-28 rounded-xl mx-auto  mt-5 bg-gradient-to-r p-[6px] from-[#12b509] via-[#031452] to-[#870f5b] cursor-pointer hover:scale-105">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
              <p className="my-auto text-lg font-medium">Waching Film</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
