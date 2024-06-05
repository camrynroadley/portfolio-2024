import * as React from "react";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/reads.json";
import { TALKS } from "@/app/constants";

const Talks = () => {
  return (
      <div>
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
  );
};

export default Talks;
