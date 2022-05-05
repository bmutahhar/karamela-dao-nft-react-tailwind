import React from "react";
import MainButton from "../Buttons/MainButton";
import HollowButton from "../Buttons/HollowButton";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import bgHero from "../../assets/images/bg-hero.png";

const HomeDisplay = () => {
  return (
    <section
      id="main"
      // style={{ backgroundImage: `url(${bgHero})` }}
      // className="bg-cover bg-no-repeat bg-center"
    >
      <div className={`h-[100vh] flex flex-col items-center justify-start`}>
        <div className="inline-block px-4 mt-32">
          <h1 className="text-center text-4xl leading-[50px] mb-4 sm:mb-0 sm:leading-[75px] sm:text-6xl 2xl:text-8xl 2xl:leading-[125px] md:leading-[125px] md:text-7xl font-semibold ">
            Sweet sweet DAO
          </h1>
          <p className="text-center text-base font-normal leading-5 w-0 min-w-full mb-8">
            KaramelaDAO sweetenomics are straight FW: 1000 projects, $1M of
            revenue each, 1B of revenue. 50% of profits will be distributed to
            its citizens, 30% will remain to the treasury, 10% marketing and 10%
            charity
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <MainButton text={"Learn more"} />
            <HollowButton icon={<Discord />} text={"Join discord"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDisplay;
