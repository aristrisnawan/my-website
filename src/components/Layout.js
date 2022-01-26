import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function Layout({ children }) {
  return (
    <div className="mobile:px-4 laptop:px-52 tablet:px-32">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
