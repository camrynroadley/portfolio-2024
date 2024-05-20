import * as React from "react";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import { CONTACT } from "@/app/constants";

const Contact = () => {
  return (
    <div className="flex gap-40 justify-between px-16 py-16 bg-[#B7BCB1] max-md:flex-wrap max-md:px-5">
      <NavBar sectionName={CONTACT} />
      <div className="flex flex-col space-y-16">
        
      </div>
    </div>
  );
};

export default Contact