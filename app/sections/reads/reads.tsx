import * as React from "react";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/reads.json";
import { READS } from "@/app/constants";

const Reads = () => {
  return (
    <div className="flex gap-40 justify-between px-16 py-16 bg-[#CDC3D0] max-md:flex-wrap max-md:px-5">
      <NavBar sectionName={READS}/>
      <div className="flex flex-col space-y-16">
        {data.map((read) => {
          const { heading, subheading, date } = read;
          return (
            <Card
              key={`card-${heading}`}
              sectionName={READS}
              heading={heading}
              subheading={subheading}
              date={date}
              embedLink="https://www.linkedin.com/embed/feed/update/urn:li:share:7158533789558726657"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reads;
