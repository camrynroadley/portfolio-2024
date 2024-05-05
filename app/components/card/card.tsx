import Image from "next/image";
import { PROJECTS, READS, TALKS } from "../../constants";
import { ProjectsStyles, ReadsStyles, TalksStyles } from "./styles";

interface CardProps {
  sectionName: string;
  subHeading: string;
  heading: string;
  description: string;
  showButton: boolean;
  showImage: boolean;
}

const Card = (props: CardProps): JSX.Element => {
  const {
    sectionName,
    subHeading,
    heading,
    description,
    showButton,
    showImage,
  } = props;

  // Create styles
  let styles = {
    cardClassName: "",
    subHeadingClassName: "",
    headingClassName: "",
    descriptionClassName: "",
  };

  switch (sectionName) {
    case PROJECTS:
      styles = ProjectsStyles;
      break;
    case READS:

    case TALKS:
      break;
    default:
      
  }



  return (
    <div className={styles.cardClassName}>
      <h2 className={styles.headingClassName}>{heading}</h2>
      <p>This is some information for card 1.</p>
    </div>
  );
};

export default Card;
