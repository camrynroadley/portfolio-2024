"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ABOUT, PROJECTS, READS, TALKS, CONTACT, COLORS } from "../constants";

interface NavBarProps {
  sectionName: string;
}

const getStyles = (sectionName: string) => {
  let styles = {
    textClassName: "",
    selectedTextClassName: "",
  };
  switch (sectionName) {
    case "projects":
      styles.textClassName = "text-[#5C5C5C] hover:text-[#E3F6CA]";
      styles.selectedTextClassName =
        "text-[#1D1D1D] hover:text-[#E3F6CA]";
      break;
    case "reads":
      styles.textClassName = "text-[#5C5C5C] hover:text-[#8E609E]";
      styles.selectedTextClassName =
        "text-[#1D1D1D] hover:text-[#8E609E]";
      break;
    case "talks":
      styles.textClassName = "text-[#5C5C5C] hover:text-[#7E4C22]";
      styles.selectedTextClassName =
        "text-[#1D1D1D] hover:text-[#7E4C22]";
      break;
    case "contact":
      styles.textClassName = "text-[#5C5C5C] font-medium hover:text-[#BBDB91]";
      styles.selectedTextClassName =
        "text-[#1D1D1D] hover:text-[#E3F6CA]";
      break;
    default:
    // code block
  }
  return styles;
};

const NavBar = (props: NavBarProps): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const { sectionName } = props;
  console.log("*** sectionName: ", sectionName);
  const { textClassName, selectedTextClassName } = getStyles(sectionName);

  // Background Colors
  const textColor = useTransform(
    scrollYProgress,
    [0.5, 0.7, 1],
    [COLORS.NAV_PROJECTS_UNSELECTED, COLORS.NAV_READS_UNSELECTED, COLORS.NAV_TALKS_UNSELECTED]
  );

  return (
    <div className="sticky top-20 z-10 ">
      <div className="flex flex-col self-start text-xl whitespace-nowrap">
          <a
            href="#"
            className={
              sectionName === ABOUT ? selectedTextClassName : textClassName
            }
          >
            About
          </a>
        <a
          href="#"
          className={
            sectionName === PROJECTS ? selectedTextClassName : textClassName
          }
        >
          Projects
        </a>
        <a
          href="#"
          className={
            sectionName === READS ? selectedTextClassName : textClassName
          }
        >
          Reads
        </a>
        <a
          href="#"
          className={
            sectionName === TALKS ? selectedTextClassName : textClassName
          }
        >
          Talks
        </a>
        <a
          href="#"
          className={
            sectionName === CONTACT ? selectedTextClassName : textClassName
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
