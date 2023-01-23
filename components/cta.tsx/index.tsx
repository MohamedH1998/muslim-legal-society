import React from "react";
import Button from "../button";
import ExternalLink from "../external-link";

const Cta = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white w-full space-y-3 px-10 py-10">
      <h3 className="text-2xl font-semibold">Join us</h3>
      <p>
        Join the Muslim Legal Society and be a part of a thriving community of
        legal professionals and students
      </p>
      <ExternalLink link="https://docs.google.com/forms/d/1q0QzMfSgm3EtqmP7wxaUY_i6_DC0epc4y0Ytz1X89YU/viewform?edit_requested=true">
        Sign up
      </ExternalLink>
    </div>
  );
};

export default Cta;
