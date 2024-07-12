import { PROJECTS, READS, TALKS, CONTACT } from "@/app/constants";

const getStyles = (index: number) => {
  let styles = {
    backgroundClassName: "",
    headingClassName: "",
    subheadingClassName: "",
    dateClassName: "",
    descriptionClassName: "",
    buttonClassName: "",
  };
  switch (index) {
    case 0:
      styles.backgroundClassName =
        "items-start px-16 py-12 bg-[#F8E5FF] max-w-full border-[#212121] border-2 rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#212121]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      styles.buttonClassName =
        "mt-6 mr-1 justify-center px-6 py-1 border-[#212121] border-2 rounded-[50px] font-medium text-[#000000] max-md:px-5";
      break;
    case 1:
      styles.backgroundClassName =
        "items-start px-16 py-12 bg-[#FFE8F0] border-[#212121] border-2 rounded-[50px] max-md:px-5 max-md:max-w-full";
        styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#212121]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      styles.buttonClassName =
        "mt-6 justify-center px-6 py-1 bg-[#000000] rounded-[50px] font-normal text-[#ffffff] max-md:px-5";
      break;
    case 2:
      styles.backgroundClassName =
      "items-start px-16 py-12 bg-[#FFEFD0] border-[#212121] border-2 rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
      "mt-6 text-7xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl";
    styles.descriptionClassName =
      "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#212121]";
    styles.subheadingClassName =
      "max-md:max-w-full font-medium text-[#212121] text-xl";
    styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      styles.buttonClassName =
        "mt-6 justify-center px-6 py-3 bg-[#F4E1F4] rounded-[50px] font-medium text-[#363636] max-md:px-5";
      break;
    case 3:
      styles.backgroundClassName =
      "items-start px-16 py-12 bg-[#FFFBD6] border-[#212121] border-2 rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
      "mt-6 text-7xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl";
    styles.descriptionClassName =
      "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#212121]";
    styles.subheadingClassName =
      "max-md:max-w-full font-medium text-[#212121] text-xl";
    styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      break;
    case 4:
      styles.backgroundClassName =
      "items-start px-16 py-12 bg-[#FAFFD9] border-[#212121] border-2 rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
      "mt-6 text-7xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl";
    styles.descriptionClassName =
      "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#212121]";
    styles.subheadingClassName =
      "max-md:max-w-full font-medium text-[#212121] text-xl";
    styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      break;
    case 5:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#FAFFD9] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#637775] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#637775]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#637775] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFF8EB]";
      break;
    default:
    // code block
  }
  return styles;
};

export default getStyles;
