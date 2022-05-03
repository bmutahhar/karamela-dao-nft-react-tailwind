import React from "react";
import MainButton from "../Buttons/MainButton";
import bgHero from "../../assets/images/bg-hero.png";

const HomeDisplay = () => {
  return (
    <section id="main">
      <div
        style={{ backgroundImage: `url(${bgHero})` }}
        className={`border-[1px] h-[90vh] flex items-center justify-center bg-contain bg-no-repeat bg-top`}
      >
        <div className="inline-block px-4">
          <h1 className="text-5xl mb-4 sm:mb-0 sm:leading-[75px] sm:text-6xl md:leading-[125px] md:text-7xl font-semibold ">
            Sweet sweet DAO
          </h1>
          <p className="text-left sm:text-center text-base font-normal leading-5 w-0 min-w-full mb-6">
            KaramelaDAO sweetenomics are straight FW: 1000 projects, $1M of
            revenue each, 1B of revenue. 50% of profits will be distributed to
            its citizens, 30% will remain to the treasury, 10% marketing and 10%
            charity
          </p>
          <div className="flex items-center">
            <MainButton text={"Learn more"} />
            <button> Join Discord</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDisplay;
