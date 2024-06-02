import * as React from "react";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/reads.json";
import { TALKS } from "@/app/constants";

const Talks = () => {
  return (
    <div className="h-[100rem] sticky top-0 z-30 flex gap-40 justify-between px-16 py-16 bg-[#B49D89] max-md:flex-wrap max-md:px-5">
      <NavBar sectionName={TALKS} />
      <div className="flex flex-col space-y-16">
        {data.map((read) => {
          const { heading, subheading, date } = read;
          return (
            <Card
              key={`card-${heading}`}
              sectionName={TALKS}
              heading={heading}
              subheading={subheading}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Talks;
