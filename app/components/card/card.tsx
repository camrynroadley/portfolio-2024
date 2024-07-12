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
    sectionName,
    heading,
    subheading,
    date,
    description,
    websiteLink,
    githubLink,
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

  // Split into regular and bold (medium) text
  // Assumption that the first string is the regular and the second is bold
  const descriptionTextArray = description?.split("bold");

  return (
    <motion.div>
      {index === 5 && (
        <div className="w-full flex flex-col justify-center text-fuchsia-200">
        <div className="flex justify-center items-center px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-60 mb-32 max-w-full max-md:my-10">
            <div className="text-9xl font-medium text-center max-md:max-w-full max-md:text-4xl">
              Get in touch.
            </div>
            <div className="flex gap-3.5 items-center mt-10 text-2xl max-md:flex-wrap">
              <div className="self-stretch my-auto">
                <a
                  href="https://www.linkedin.com/in/camrynroadley"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div className="self-stretch my-auto text-xl">⚬</div>
              <div className="self-stretch my-auto">GitHub</div>
              <div className="justify-center self-stretch px-1.5 py-1.5 my-auto text-sm font-medium whitespace-nowrap bg-fuchsia-200 rounded-md text-neutral-900">
                <a
                  href="https://www.linkedin.com/in/camrynroadley"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div className="self-stretch my-auto text-xl">⚬</div>
              <div className="self-stretch">
                <a
                  href="https://www.linkedin.com/in/camrynroadley"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div className="justify-center self-start px-1 py-1.5 text-sm font-medium whitespace-nowrap bg-fuchsia-200 rounded-md text-neutral-900">
                PROFESSIONAL
              </div>
              <div className="self-stretch my-auto text-xl">⚬</div>
              <div className="flex-auto self-stretch">
                Google Developer Profile
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <div className={backgroundClassName}>
        <div className={subheadingClassName}>
          {subheading} ⚬ <span className={dateClassName}>{date}</span>
        </div>
        <div className={headingClassName}>{heading}</div>
        <div className={descriptionClassName}>
          {/* {description} */}
          {descriptionTextArray?.[0] || ""}
          <span className="font-medium">{descriptionTextArray?.[1] || ""}</span>
        </div>
        {showButton && index === 0 && (
          <>
            <a target="_blank" href={githubLink}>
              <button className={buttonClassName}>
                <span className="relative z-10">GitHub</span>
              </button>
            </a>
            <a target="_blank" href={websiteLink}>
              <button className={buttonClassName}>
                <span className="relative z-10">Link</span>
              </button>
            </a>
          </>
        )}
        {showButton && index === 1 && (
          <>
            <a target="_blank" href={githubLink}>
              <button className={buttonClassName}>
                <span className="relative z-10">GitHub</span>
              </button>
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
