import React from "react";
import aris from "../images/aris.png";
import cv_aris from "../file/Aris_Trisnawan.pdf";

export default function AboutComponent() {
  return (
    <div>
      <ProfileComponent />
      <ExperienceComponent />
    </div>
  );
}

export function ProfileComponent() {
  return (
    <div>
      <div className="text-center py-4">
        <span className="text-green-600 text-xl font-medium">ABOUT ME</span>
        <p className=" text-3xl font-bold">Here's my story.</p>
      </div>
      <div className="flex mobile:flex-col laptop:flex-row laptop:gap-5">
        <div
          className="mobile:w-full mobile:h-52 tablet:w-72 tablet:mx-auto rounded-2xl bg-green-400 bg-center mb-4"
          style={{ backgroundImage: `url(${aris})` }}
        ></div>
        <div className="mobile:w-full mobile:text-justify text-lg">
          <p>
            Hello my name is Aris Trisnawan, you can call me aris. I was born in
            the city of Ciamis August 25, 1998.
          </p>
          <p className="py-2">
            I am a frontend developer, currently I am a freelance as a frontend
            developer. I'm currently learning a library from javascript, namely
            reactJs and also a framework from css, namely TailwindCSS.
          </p>
          <p>
            I am a graduate of telkom university in 2021 and I got a cum laude
            award. I am at telkom university majoring in D3 application software
            engineering.
          </p>
        </div>
      </div>
      <div className="py-3">
        <a
          href={cv_aris}
          download
          className="py-2 px-3 rounded bg-gradient-to-tr from-green-800 to-green-400 text-white drop-shadow-md hover:drop-shadow-xl cursor-pointer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export function ExperienceComponent() {
  return (
    <div>
      <div>
        <p className="font-bold mobile:text-2xl py-3">Work Experience</p>
        <p className=" text-lg">
          Here's a brief rundown of my most recent experiences:
        </p>
        <div className="flex flex-row justify-between py-3 text-lg">
          <div>
            <p>Telkom University</p>
          </div>
          <div>
            <p>Frontend Developer 2021 -</p>
          </div>
        </div>
        <div className="flex flex-row justify-between pb-3 text-lg">
          <div>
            <p>PT Sampul Kreative</p>
          </div>
          <div>
            <p>Frontend Developer 2020-2021</p>
          </div>
        </div>
        <div className="flex flex-row justify-between pb-3  text-lg">
          <div>
            <p>Rastek.id</p>
          </div>
          <div>
            <p>Frontend Developer 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
