"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero = ({ onButtonClick }: HeroProps) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const springYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });

  const firstNameX = useTransform(springYProgress, [0, 0.02], [0, -1200]);
  const lastNameX = useTransform(springYProgress, [0, 0.02], [0, 1200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const buttonPointerEvents = useTransform(scrollYProgress, [0, 0.01], ['auto', 'none']);

  return (
    <div className="flex flex-col items-center px-20 max-md:px-5">
      <div className="mt-24 w-full max-w-[1210px] max-md:mt-10 max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <motion.div
              style={{
                x: firstNameX,
              }}
            >
              <div className="font-medium text-[#F3FB8E] text-[200px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Camryn
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full">
            <motion.div
              style={{
                opacity: textOpacity,
              }}
            >
              <div className="mt-40 text-2xl text-white max-md:mt-10 max-md:max-w-full">
                Front-end developer based in Canada.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1027px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <motion.div
              style={{
                opacity: textOpacity,
              }}
            >
              <div className="text-2xl text-right text-white max-md:mt-5">
                Passionate about{" "}
                <span className="font-medium text-white">human connection</span>{" "}
                and building enjoyable, accessible apps.
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <motion.div
              style={{
                x: lastNameX,
              }}
            >
              <div className="font-medium text-[#F3FB8E] text-[200px] -mt-24 max-md:mt-5 max-md:max-w-full max-md:text-4xl">
                Roadley
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="fixed right-10 bottom-10">
        <motion.div
          style={{
            opacity: buttonOpacity,
            pointerEvents: buttonPointerEvents,
          }}
        >
          <button onClick={onButtonClick} className="px-6 text-xs justify-center bg-[#F6C3FF] rounded-[50px] font-medium text-[#000000] h-[44px] justify-center bg-[#FF7C7C] rounded-[50px] font-medium text-[#000000] relative h-[44px] overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#D84949] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full max-md:px-4">
            <span className="relative z-10">Recent Works</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
