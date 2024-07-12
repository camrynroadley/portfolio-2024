"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { COLORS } from "./constants";
import NavBar from "./components/navBar";
import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projectsSandbox";
import Reads from "./sections/reads/readsSandbox";
import Talks from "./sections/talks/talksSandbox";
import Contact from "./sections/contact/contact";
import { ABOUT, PROJECTS, READS, TALKS } from "./constants";

const Home = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [section, setSection] = useState(ABOUT);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const yProgress = scrollYProgress.get();
  //   if (yProgress > 0.3 && yProgress < 0.75) {
  //     setSection(PROJECTS);
  //   } else if (yProgress > 0.75 && yProgress < 1) {
  //     setSection(READS);
  //   }
  // });

  // Background Colors
  // const bgColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.6, 0.8, 1],
  //   [COLORS.BG_PURPLE, COLORS.BG_BLUE, COLORS.BG_GREEN, COLORS.BG_LIGHT_PURPLE, COLORS.BG_ORANGE]
  // );

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["#131313", "#F3FB8E"]
  );

  useEffect(() => {
    console.log("*** section: ", section);
  }, [section]);

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="overflow-clip">
        <Hero />
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
