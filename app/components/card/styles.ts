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
        "items-start px-16 py-12 bg-[#48483A] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#DFEAD1] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#DFEAD1]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#DFEAD1] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFEAD1]";
      styles.buttonClassName =
        "mt-6 justify-center px-6 py-3 bg-[#DFEAD1] rounded-[50px] font-medium text-[#363636] max-md:px-5";
      break;
    case 1:
      styles.backgroundClassName =
        "items-start px-16 py-12 bg-[#5C574F] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#DFEAD1] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#DFEAD1]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#DFEAD1] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFEAD1]";
      styles.buttonClassName =
        "mt-6 justify-center px-6 py-3 bg-[#DFEAD1] rounded-[50px] font-medium text-[#363636] max-md:px-5";
      break;
    case 2:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#84687C] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#F4E1F4] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#F4E1F4]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#F4E1F4] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#F4E1F4]";
      styles.buttonClassName =
        "mt-6 justify-center px-6 py-3 bg-[#F4E1F4] rounded-[50px] font-medium text-[#363636] max-md:px-5";
      break;
    case 3:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#586A67] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#DFF8EB] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#DFF8EB]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#DFF8EB] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFF8EB]";
      break;
    case 4:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#7C8685] rounded-[50px] max-md:px-5 max-md:max-w-full";
      styles.headingClassName =
        "mt-6 text-7xl font-medium text-[#DFF8EB] max-md:max-w-full max-md:text-4xl";
      styles.descriptionClassName =
        "mt-8 text-2xl max-md:mt-10 max-md:max-w-full text-[#DFF8EB]";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#DFF8EB] text-xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#DFF8EB]";
      break;
    case 5:
      styles.backgroundClassName =
        "flex flex-col items-start px-16 py-12 bg-[#DFF8EB] rounded-[50px] max-md:px-5 max-md:max-w-full";
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
