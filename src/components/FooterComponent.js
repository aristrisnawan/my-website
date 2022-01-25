import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";

export default function FooterComponent() {
  return (
    <div className="w-full py-10 border-t-2">
      <div className="flex mobile:flex-col tablet:flex-row tablet:justify-between laptop:flex-row laptop:justify-between">
        <p>© 2022 | Aris Trisnawan</p>
        <div className="flex flex-row gap-5 mobile:pt-3 tablet:pt-0 laptop:pt-0">
          <a
            href="https://www.linkedin.com/in/aris-trisnawan-657776193"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={linkedin} alt="" className="w-6" />
          </a>
          <a
            href="https://github.com/aristrisnawan"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={github} alt="" className="w-6" />
          </a>
          <a
            href="https://www.instagram.com/aristrisnawan1998/"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={instagram} alt="" className="w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
