import React from "react";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";

// Top level component
export const AppComponent = () => {
  return (
    <div className="home">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
