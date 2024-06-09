"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
  useSpring,
} from "framer-motion";
import Lenis from '@studio-freight/lenis'
import Card from "@/app/components/card/card";
import data from "@/app/data/data.json";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const transitionValues = {
    duration: 0.8,
    type: "spring",
    ease: "easeOut",
  };

  const cardY = useTransform(scrollYProgress, [0.3, 0.4], [1000, 0]);
  const position = useTransform(
    scrollYProgress,
    [0.2, 0.9],
    ["flex", "sticky"]
  );
  const aboutTextOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

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
        return "sticky top-20 z-20 flex mb-64";
      case 1:
        return "sticky top-28 z-20 flex mb-64";
      case 2:
        return "sticky top-36 z-20 flex mb-64";
      case 3:
        return "sticky top-44 z-20 flex mb-64";
      case 4:
        return "sticky top-52 z-20 flex mb-64";
      case 5:
        return "sticky top-20 z-20 flex mb-64";
    }
  };

  return (
    <div ref={container} className="">
      {data.map((item, index) => {
        const { type, heading, subheading, date, description, websiteLink, githubLink } = item;
        const targetScale = 1 - ((1 / (index + 2)) * 0.2);
  
        return (
          <div
            key={`card-${heading}`}
            className={getCardWrapperClassName(index)}
          >
            <Card
              index={index}
              progress={scrollYProgress}
              range={[index * 0.1, 1]}
              targetScale={targetScale}
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

export default Projects;
