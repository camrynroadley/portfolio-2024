"use client";
import { useRef } from "react";
import {
  useScroll,
} from "framer-motion";
import Lenis from '@studio-freight/lenis';
import Card from "@/app/components/card/card";
import data from "@/app/data/data.json";

const Content = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const lenis = new Lenis()

  lenis.on('scroll', (e: any) => {
    console.log(e)
  })

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  const getCardWrapperClassName = (index: number) => {
    switch (index) {
      case 0:
        return "sticky top-8 z-0 flex mb-64";
      case 1:
        return "sticky top-16 z-1 flex mb-64";
      case 2:
        return "sticky top-24 z-2 flex mb-64";
      case 3:
        return "sticky top-32 z-3 flex mb-64";
      case 4:
        return "sticky top-40 z-4 flex mb-64";
      case 5:
        return "sticky top-0 z-4 flex mb-64";
    }
  };

  return (
    <div className="py-96">
      {data.map((item, index) => {
        const { type, heading, subheading, date, description, websiteLink, githubLink } = item;
        return (
          <div
            key={`card-${heading}`}
            className={getCardWrapperClassName(index)}
          >
            <Card
              index={index}
              progress={scrollYProgress}
              range={[index * 0.1, 1]}
              sectionName={type}
              heading={heading}
              subheading={subheading}
              date={date}
              description={description}
              websiteLink={websiteLink}
              githubLink={githubLink}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Content;
