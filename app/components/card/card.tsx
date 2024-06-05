"use client";
import { useRef } from "react";
import { PROJECTS, READS } from "../../constants";
import getStyles from "./styles";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

interface CardProps {
  sectionName: string;
  heading: string;
  subheading: string;
  date: string;
  description?: string;
  embedLink?: string;
}

const Card = (props: CardProps): JSX.Element => {
  const { sectionName, heading, subheading, date, description, embedLink } =
    props;
  const {
    backgroundClassName,
    headingClassName,
    subheadingClassName,
    dateClassName,
    descriptionClassName,
    buttonClassName,
  } = getStyles(sectionName);
  const showButton = sectionName === PROJECTS;
  const showEmbedContent = sectionName == READS;
  return (
    <div className={backgroundClassName}>
      <div className={subheadingClassName}>
        {subheading} ⚬ <span className={dateClassName}>{date}</span>
      </div>
      <div className={headingClassName}>{heading}</div>
      <div className={descriptionClassName}>
        {description}
      </div>
      {showButton && <button className={buttonClassName}>LEARN MORE</button>}
      {showEmbedContent && (
        <iframe
          src={embedLink}
          height="300"
          width="504"
          title="LinkedIn Embedded Post"
        />
      )}
    </div>
  );
};

export default Card;
