"use client";
import * as React from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import NavBar from "./components/navBar";
import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import Reads from "./sections/reads/reads";
import Talks from "./sections/talks/talks";
import Contact from "./sections/contact/contact";

const Home = () => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("*** latest: ", latest);
  });
  return (
    <div className="overflow-clip">
      <Hero />
      <Projects />
      <Reads />
      <Talks />
      <Contact />
    </div>
  );
}

export default Home;
