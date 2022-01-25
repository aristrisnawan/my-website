import React from "react";
import ContainComponents from "./ContainComponents";
import HeaderComponent from "./HeaderComponent";

export default function Layout() {
  return (
    <div className=" px-44 mobile:px-0">
      <HeaderComponent />
      <ContainComponents />
    </div>
  );
}
