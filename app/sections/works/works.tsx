"use client";
import Lenis from "@studio-freight/lenis";
import Card from "@/app/components/card/card";
import data from "@/app/data/data.json";
import { CONTACT } from "@/app/constants";
import Contact from "../contact/contact";

const Works = () => {
  const lenis = new Lenis();

  const raf = (time: any) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const getCardWrapperClassName = (index: number) => {
    switch (index) {
      case 0:
        return "sticky top-8 z-0 max-w-full mb-64";
      case 1:
        return "sticky top-16 z-1 max-w-full mb-64";
      case 2:
        return "sticky top-24 z-2 max-w-full mb-64";
      case 3:
        return "sticky top-32 z-3 max-w-full mb-64";
      case 4:
        return "sticky top-40 z-4 max-w-full mb-96";
      case 5:
        return "sticky z-5 max-w-full";
    }
  };

  return (
    <>
      {data.map((item, index) => {
        const { type, heading, subheading, date, description, buttons } = item;
        return (
          <div
            key={`card-${heading}`}
            className={getCardWrapperClassName(index)}
          >
            {type === CONTACT ? (
              <Contact />
            ) : (
              <Card
                index={index}
                type={type}
                heading={heading}
                subheading={subheading}
                date={date}
                description={description}
                buttons={buttons}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Works;
