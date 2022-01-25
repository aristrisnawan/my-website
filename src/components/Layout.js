import React from "react";
import ContainComponents from "./ContainComponents";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function Layout() {
  return (
    <div className="mobile:px-4 laptop:px-52 tablet:px-32">
      <HeaderComponent />
      <ContainComponents />
      <FooterComponent />
    </div>
  );
}
