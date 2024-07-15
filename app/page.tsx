"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./sections/hero/hero";
import Works from "./sections/works/works";

const Page = () => {
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
      current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const useMounted = () => {
  //   const [mounted, setMounted] = useState<boolean>();
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  //   return mounted;
  // };

  // const mounted = useMounted();
  // if (!mounted) return null;
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

export default Page;
