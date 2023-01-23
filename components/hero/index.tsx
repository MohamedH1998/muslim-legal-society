import React from "react";
import Button from "../button";
import ExternalLink from "../external-link";
import HeroImageGrid from "../hero-image-grid";

const Hero = () => {
  return (
    <div className="flex flex-col px-10 md:flex-row md:items-center md:justify-center md:px-24 md:space-x-10 py-20 min-[1473px]:px-40">
      <div className="w-full py-10 space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-5xl font-medium">
          Connecting Muslim legal professionals and students
        </h1>
        <p className="text-lucky-grey md:text-xl">
          A space for Muslim legal professionals and students to connect,
          organise, and belong.
        </p>
        <ExternalLink link="https://docs.google.com/forms/d/1q0QzMfSgm3EtqmP7wxaUY_i6_DC0epc4y0Ytz1X89YU/viewform?edit_requested=true">
          Sign up
        </ExternalLink>
      </div>
      <HeroImageGrid />
    </div>
  );
};

export default Hero;
