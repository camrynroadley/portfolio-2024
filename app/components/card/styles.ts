import { PROJECTS, READS, TALKS, CONTACT } from "@/app/constants";

const getStyles = (sectionName: string) => {
  let styles = {
    backgroundClassName: "",
    headingClassName: "",
    subheadingClassName: "",
    dateClassName: "",
    descriptionClassName: "",
    buttonClassName: "",
  };
  switch (sectionName) {
    case PROJECTS:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#525B48] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-9 text-8xl font-medium text-[#DFEAD1] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        " mt-11 text-2xl max-md:mt-10 max-md:max-w-full text-[#DFEAD1]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#DFEAD1] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFEAD1]";
      styles.buttonClassName =
        "justify-center px-6 py-3 mt-8 bg-[#A1AF8E] rounded-[50px] font-medium text-[#363636] max-md:px-5";
      break;
    case READS:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#56425D] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-9 text-7xl font-medium text-[#CFA5DE] max-md:max-w-full max-md:text-4xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#CFA5DE] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#CFA5DE]";
      break;
    case TALKS:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#6E5642] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-9 text-8xl font-medium text-[#E4B08B] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        " mt-11 text-2xl max-md:mt-10 max-md:max-w-full text-[#E4B08B]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#E4B08B] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#E4B08B]";
      break;
    case CONTACT:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#525B48] rounded-[50px] max-md:px-5 max-md:max-w-full";
      break;
    default:
    // code block
  }
  return styles;
};

export default getStyles;
