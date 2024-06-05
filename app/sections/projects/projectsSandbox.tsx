"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
  useSpring,
} from "framer-motion";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/projects.json";
import { PROJECTS } from "@/app/constants";

const Projects = () => {
  const { scrollYProgress } = useScroll();
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
    ease: "easeOut"
  };

  const cardY = useTransform(scrollYProgress, [0.3, 0.4], [1000, 0]);
  const position = useTransform(scrollYProgress, [0.2, 0.9], ["flex", "sticky"]);
  const aboutTextOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
      <div className="">
        {data.map((project) => {
          const { heading, subheading, date, description } = project;
          return (
            <motion.div
              key={`card-${heading}`}
              style={{
                position,
              }}
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
            >
            <div className="top-0 z-30 flex mb-24">
              <Card
                key={`card-${heading}`}
                sectionName={PROJECTS}
                heading={heading}
                subheading={subheading}
                date={date}
                description={description}
              />
              </div>
            </motion.div>
          );
        })}
      </div>
  );
};

export default Projects;
