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

  let nameColor = useTransform(temporaryx, [0, 0.02], ['#D5FFE9', '#555555']);
  let infoColor = useTransform(temporaryx, [0, 0.02], ['#555555', '#D5FFE9']);


  const aboutTextOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.1, 0.4],
    [0, 1, 0]
  );
  const aboutTextY = useTransform(scrollYProgress, [0.1, 0.2], [0, -200]);
  const moreTextDisplay = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["block", "none"]
  );
  // bg-[#56425E]
  return (
    // <AnimatePresence>
    //   <div className="h-[100rem] sticky top-0 z-0">
    //     <div className="flex flex-col pt-4 pb-20 text-[#DFF8EB]">
    //       {/* <div className="fixed self-end mr-8 text-2xl max-md:mr-2.5">
    //         MORE +
    //       </div> */}
    //       <div className="flex flex-col pr-8 pl-20 mt-20 font-medium whitespace-nowrap text-[300px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    //         <div className="max-md:max-w-full -ml-28 -mt-24 max-md:text-4xl">
    //           <motion.div
    //             // animate={{ x: 100 }}
    //             // transition={{ type: "spring", bounce: 0.5 }}
    //             // initial={{ opacity: 0 }}
    //             // animate={{ opacity: 1 }}
    //             // exit={{ opacity: 0 }}
    //             style={{
    //               x: firstNameX,
    //             }}
    //           >
    //             Camryn
    //           </motion.div>
    //         </div>
    //         {/* <div className="self-end -mt-32 mr-16 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl"> */}
    //         <div className="">
    //           <div className="-mt-44 ml-64 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
    //             <motion.div
    //               style={{
    //                 x: lastNameX,
    //               }}
    //             >
    //               Roadley
    //             </motion.div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center">
    //         <div className="text-6xl -translate-y-96 text-center w-3/4">
    //           <motion.div
    //             style={{
    //               opacity: aboutTextOpacity,
    //               color: "#323232",
    //             }}
    //           >
    //             Developer and designer based in Canada. Passionate about human
    //             connection and building enjoyable, accessible apps to enable it.
    //           </motion.div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </AnimatePresence>
    <div className="flex flex-col justify-center">
      <div className="flex flex-col px-5 py-7 max-md:max-w-full">
        <div className="self-end text-2xl text-[#747474] max-md:mr-2.5">
          MORE +
        </div>
        <motion.div
          style={{
            x: firstNameX,
          }}
        >
          <div className="self-start -ml-12 -mt-24 font-medium text-[#D5FFE9] text-[300px] max-md:max-w-full max-md:text-4xl">
            Camryn
          </div>
        </motion.div>
        <div className="flex flex-col pr-6 pl-12 -mt-36 w-full max-md:px-5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="mt-28 text-2xl text-justify text-[#747474] max-md:mt-10">
                  Developer and designer based in Canada. Passionate about human
                  connection and building enjoyable, accessible apps to enable
                  it.
                  <br />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <motion.div
                  style={{
                    x: lastNameX,
                    // color: nameColor,
                  }}
                >
                  <div className="font-medium text-[#D5FFE9] text-[300px] max-md:mt-9 max-md:max-w-full max-md:text-4xl">
                    Roadley
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
