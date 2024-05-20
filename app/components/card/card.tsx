import { PROJECTS, READS } from "../../constants";
import getStyles from "./styles";

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
        <span className="">
          Designed and developed a new website for the Big Sand volleyball club
          using{" "}
        </span>
        <span className="font-medium">
          TypeScript, React, Next.js, Node.js, Express and GCP.{" "}
        </span>
      </div>
      {showButton && <button className={buttonClassName}>LEARN MORE</button>}
      {showEmbedContent && (
        <iframe
          src={embedLink}
          height="434"
          width="504"
          title="LinkedIn Embedded Post"
        />
      )}
    </div>
  );
};

export default Card;
