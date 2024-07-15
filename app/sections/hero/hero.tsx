"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface HeroProps {
  onButtonClick: () => void;
}

const Hero = ({ onButtonClick }: HeroProps) => {
  const { scrollYProgress } = useScroll();

  const springYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });

  const firstNameX = useTransform(springYProgress, [0, 0.02], [0, -1500]);
  const lastNameX = useTransform(springYProgress, [0, 0.02], [0, 1500]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const buttonPointerEvents = useTransform(
    scrollYProgress,
    [0, 0.01],
    ["auto", "none"]
  );

  return (
    <div className="h-screen flex flex-col items-center max-lg:px-10">
      <div className="mt-[8%] w-full max-w-full max-lg:mt-10">
        <div className="flex w-[1000px] ml-auto mr-auto max-md:flex-col">
          <div className="flex flex-col">
            <motion.div
              style={{
                x: firstNameX,
              }}
            >
              <div className="font-medium text-[#F3FB8E] text-[200px] max-md:text-7xl max-lg:text-9xl">
                Camryn
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col mt-auto mb-auto ml-5 w-[200px] max-lg:hidden">
            <motion.div
              style={{
                opacity: textOpacity,
              }}
            >
              <div className="mt-10 text-2xl text-white">
                Front-end developer based in Canada.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full">
        <div className="flex w-[1000px] ml-auto mr-auto -mt-24 max-lg:mt-0">
          <div className="flex flex-col mt-auto mb-auto max-lg:hidden">
            <motion.div
              style={{
                opacity: textOpacity,
              }}
            >
              <div className="text-2xl text-right text-white">
                Passionate about{" "}
                <span className="font-medium text-white">human connection</span>{" "}
                and building enjoyable, accessible apps.
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col ml-5 max-lg:ml-0 max-md:w-full">
            <motion.div
              style={{
                x: lastNameX,
              }}
            >
              <div className="font-medium text-[#F3FB8E] text-[200px] max-lg:mt-0 max-md:text-7xl max-lg:text-9xl">
                Roadley
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-full lg:hidden xl:hidden 2xl:hidden">
        <motion.div
          style={{
            opacity: textOpacity,
          }}
        >
          <div className="text-2xl text-left text-white md:text-3xl">
            Front-end developer based in Canada. Passionate about{" "}
            <span className="font-medium text-white">human connection</span> and
            building enjoyable, accessible apps.
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-12 right-12">
        <motion.div
          style={{
            opacity: buttonOpacity,
            pointerEvents: buttonPointerEvents,
          }}
        >
          <button
            onClick={onButtonClick}
            className="px-6 text-xs justify-center bg-[#F6C3FF] rounded-[50px] font-medium text-[#000000] h-[44px] justify-center bg-[#FF7C7C] rounded-[50px] font-medium text-[#000000] relative h-[44px] overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#D84949] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full max-md:px-4"
          >
            <span className="relative z-10">Recent Works</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
