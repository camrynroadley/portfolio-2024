import { ABOUT, PROJECTS, READS, TALKS, CONTACT } from "../constants";
interface NavBarProps {
  sectionName: string;
}

const getStyles = (sectionName: string) => {
  let styles = {
    textClassName: '',
    selectedTextClassName: '',
  }
  switch (sectionName) {
    case "projects":
      styles.textClassName = "text-[#A1AF8E] hover:text-[#E3F6CA]";
      styles.selectedTextClassName = "text-[#DFEAD1] font-medium hover:text-[#E3F6CA]";
      break;
    case "reads":
      styles.textClassName = "text-[#56425D] hover:text-[#8E609E]";
      styles.selectedTextClassName = "text-[#360F43] font-medium hover:text-[#8E609E]";
      break;
    case "talks":
      styles.textClassName = "text-[#6E5642] hover:text-[#7E4C22]";
      styles.selectedTextClassName = "text-[#4B3522] font-medium hover:text-[#7E4C22]";
      break;
    case "contact":
      styles.textClassName = "text-[#525B48] hover:text-[#BBDB91]";
      styles.selectedTextClassName = "text-[#414F30] font-medium hover:text-[#E3F6CA]";
      break;
    default:
    // code block
  }
  return styles;
};

const NavBar = (props: NavBarProps): JSX.Element => {
  const { sectionName } = props;
  const { textClassName, selectedTextClassName } = getStyles(sectionName);
  return (
    <div className="flex flex-col self-start text-2xl whitespace-nowrap text-stone-400">
      <a href="#" className={sectionName === ABOUT ? selectedTextClassName : textClassName}>ABOUT</a>
      <a href="#" className={sectionName === PROJECTS ? selectedTextClassName : textClassName}>PROJECTS</a>
      <a href="#" className={sectionName === READS ? selectedTextClassName : textClassName}>READS</a>
      <a href="#" className={sectionName === TALKS ? selectedTextClassName : textClassName}>TALKS</a>
      <a href="#" className={sectionName === CONTACT ? selectedTextClassName : textClassName}>CONTACT</a>
    </div>
  );
};

export default NavBar;
