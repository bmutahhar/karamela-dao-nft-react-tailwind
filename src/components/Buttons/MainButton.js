import React from "react";

const MainButton = ({ text }) => {
  return (
    <button className="mx-3 flex items-center justify-center bg-[#6E3FA3] py-3 px-6 rounded-lg capitalize shadow-sm hover:bg-[#592d8a]">
      {text}
    </button>
  );
};

export default MainButton;
