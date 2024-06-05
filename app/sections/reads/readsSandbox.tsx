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
import * as React from "react";
import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/reads.json";
import { READS } from "@/app/constants";

const Reads = () => {
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

  const cardY = useTransform(scrollYProgress, [0.6, 0.7], [1000, 0]);
  const position = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    ["flex", "sticky"]
  );
  const aboutTextOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
      <div className="">
        {data.map((read) => {
          const { heading, subheading, date } = read;
          return (
            <motion.div
              key={`card-${heading}`}
              // style={{
              //   y: cardY,
              //   position,
              // }}
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <Card
                key={`card-${heading}`}
                sectionName={READS}
                heading={heading}
                subheading={subheading}
                date={date}
                embedLink="https://www.linkedin.com/embed/feed/update/urn:li:share:7158533789558726657"
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default Reads;
