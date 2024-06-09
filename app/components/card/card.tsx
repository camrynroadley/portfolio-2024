"use client";
import { PROJECTS, READS } from "../../constants";
import getStyles from "./styles";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

interface CardProps {
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  sectionName: string;
  heading: string;
  subheading: string;
  date: string;
  description?: string;
  websiteLink?: string;
  githubLink?: string;
}

const Card = (props: CardProps): JSX.Element => {
  const {
    index,
    progress,
    range,
    targetScale,
    sectionName,
    heading,
    subheading,
    date,
    description,
    websiteLink,
    githubLink
  } = props;
  const {
    backgroundClassName,
    headingClassName,
    subheadingClassName,
    dateClassName,
    descriptionClassName,
    buttonClassName,
  } = getStyles(index);
  const showButton = sectionName === PROJECTS || sectionName === READS;

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <motion.div style={{  }}>
      <div className={backgroundClassName}>
        <div className={subheadingClassName}>
          {subheading} ⚬ <span className={dateClassName}>{date}</span>
        </div>
        <div className={headingClassName}>{heading}</div>
        <div className={descriptionClassName}>{description}</div>
        {showButton && index === 0 && (
          <>
            <a target="_blank" href={websiteLink}><button className={buttonClassName}>WEBSITE</button></a>
            <a target="_blank" href={githubLink}><button className={buttonClassName}>GITHUB</button></a>
          </>
        )}
                {showButton && index === 1 && (
          <>
            <a target="_blank" href={githubLink}><button className={buttonClassName}>GITHUB</button></a>
          </>
        )}
        {showButton && index === 2 && (
          <a target="_blank" href={websiteLink}><button className={buttonClassName}>READ POST</button></a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
