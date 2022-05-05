import React from "react";
import MainButton from "../components/Buttons/MainButton";
import HollowButton from "../components/Buttons/HollowButton";
import eyeIcon from "../assets/icons/eye-icon.svg";
import heartIcon from "../assets/icons/heart-icon.svg";
import mouthIcon from "../assets/icons/mouth-icon.svg";
import karamelaIcon from "../assets/icons/karamela-icon.svg";

const Token = () => {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[80%] h-[70%] 2xl:h-[50%] bg-transparent relative">
        <img
          src={eyeIcon}
          alt="Eye Icon"
          className="h-[100px] absolute -top-16 md:left-14"
        />
        <img
          src={heartIcon}
          alt="Heart Icon"
          className="h-[100px] absolute -top-12 -right-12"
        />
        <img
          src={karamelaIcon}
          alt="Karamela Icon"
          className="h-[100px] absolute bottom-24 sm:bottom-[-2.875rem] -right-8 sm:right-14"
        />
        <img
          src={mouthIcon}
          alt="Mouth Icon"
          className="h-[100px] absolute -bottom-12 md:-bottom-6 -left-12 z-10"
        />
        <div className="w-[100%] h-[100%] frost-bg flex flex-col items-center justify-evenly">
          <h4 className="text-base font-semibold text-[#00C65E] uppercase">
            Introducing
          </h4>
          <p className="text-3xl text-center md:text-4xl 2xl:text-5xl font-semibold">
            Our token, Lollipop ($loll)
          </p>
          <div className="w-[50%] flex flex-col md:flex-row items-center justify-around">
            <div className="flex mr-5">
              <div className="mt-3 mr-2">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 0L20.4593 13.5H0.540708L10.5 0Z"
                    fill="#00C65E"
                  />
                </svg>
                <span className="text-[#00C65E] text-xs">35%</span>
              </div>
              <div className="flex flex-col items-center justify-center mb-6 md:mb-0">
                <span className="text-4xl md:text-5xl leading-[48px] font-bold">
                  113
                </span>
                <span className="text-base md:text-lg font-normal text-[#D1D5DB]">
                  loll/usdc
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl leading-[48px] font-bold">
                $290,670,442
              </span>
              <span className="text-base md:text-lg font-normal text-[#D1D5DB]">
                Current DAO tresury
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <MainButton text="Convert ETH to loll" />
            <HollowButton text="Add $lol to your wallet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
