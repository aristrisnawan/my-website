import React from "react";
import aris from "../images/aris.png";

export default function ContainComponents() {
  return (
    <div className=" mobile:px-4 tablet:px-20">
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
              <button className="cursor-pointer py-2 px-2 bg-green-500 drop-shadow-lg rounded-lg">
                More About Me
              </button>
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
