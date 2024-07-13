"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./sections/hero/hero";
import Works from "./sections/works/works";

const Home = () => {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["#131313", "#F3FB8E"]
  );

  const executeScroll = () => {
    if (myRef?.current) {
      const current = myRef.current as any;
      current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="overflow-clip">
        <div className="pb-96">
          <Hero onButtonClick={executeScroll} />
        </div>
        <div ref={myRef}>
          <Works />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
