"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { BouncingBall } from "../../components/bouncingBall";

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const temporaryx = useSpring(scrollYProgress, {
    bounce: 0,
  });

  let firstNameX = useTransform(temporaryx, [0, 0.02], [0, -1200]);
  let lastNameX = useTransform(temporaryx, [0, 0.02], [0, 1200]);
  const aboutTextOpacity = useTransform(scrollYProgress, [0.02, 0.1, 0.4], [0, 1, 0]);
  const aboutTextY = useTransform(scrollYProgress, [0.1, 0.2], [0, -200]);
  const moreTextDisplay = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["block", "none"]
  );
  // bg-[#56425E]
  return (
    <AnimatePresence>
      <div className="h-[100rem] sticky top-0 z-0">
        <div className="flex flex-col pt-4 pb-20 text-purple-300">
          <div className="fixed self-end mr-8 text-2xl max-md:mr-2.5">
            MORE +
          </div>
          <div className="flex flex-col pr-8 pl-20 mt-20 font-medium whitespace-nowrap text-[270px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <div className="max-md:max-w-full -mt-24 max-md:text-4xl">
              <motion.div
                // animate={{ x: 100 }}
                // transition={{ type: "spring", bounce: 0.5 }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                style={{
                  x: firstNameX,
                }}
              >
                Camryn
              </motion.div>
            </div>
            <div className="self-end -mt-32 mr-16 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              <motion.div
                style={{
                  x: lastNameX,
                }}
              >
                Roadley
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-6xl -translate-y-96 text-center w-3/4">
              <motion.div
                style={{
                  opacity: aboutTextOpacity,
                  color: '#B4C4FF'
                }}
              >
                Developer and designer based in Canada. Passionate about human
                connection and building enjoyable, accessible apps to enable it.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
