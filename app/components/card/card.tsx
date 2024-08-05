"use client";
import getStyles from "./styles";
import { motion } from "framer-motion";

interface Button {
  label: string;
  link: string;
}

interface CardProps {
  index: number;
  type: string;
  heading: string;
  subheading: string;
  date: string;
  description?: string;
  buttons?: Button[];
}

const Card = (props: CardProps): JSX.Element => {
  const { index, type, heading, subheading, date, description, buttons } =
    props;
  const {
    backgroundClassName,
    headingClassName,
    subheadingClassName,
    dateClassName,
    descriptionClassName,
    buttonClassName,
  } = getStyles(index);

  // Split into regular and bold (medium) text
  // Assumption that the first string is the regular and the second is bold
  const descriptionTextArray = description?.split("bold");

  return (
    <motion.div>
      <div className={backgroundClassName}>
        <div className={subheadingClassName}>
          {subheading} ⚬ <span className={dateClassName}>{date}</span>
        </div>
        <div className={headingClassName}>{heading}</div>
        <div className={descriptionClassName}>
          {/* {description} */}
          {descriptionTextArray?.[0] || ""}
          <span className="font-medium">{descriptionTextArray?.[1] || ""}</span>
          {descriptionTextArray?.[2] || ""}
        </div>
        <div className="flex flex-row">
          {buttons?.length &&
            buttons.map((button: Button) => (
              <span key={`button-${button.label}`}>
                <a target="_blank" href={button.link}>
                  <button className={buttonClassName}>
                    <span className="relative z-10">{button.label}</span>
                  </button>
                </a>
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
