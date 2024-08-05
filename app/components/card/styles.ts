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
        "items-start flex flex-col justify-center h-[97vh] bg-[#D5E058] max-w-full max-sm:px-[7%] max-lg:px-[8%] lg:px-[12%] xl:px-[15%]";
      styles.headingClassName =
        "mt-6 text-9xl font-medium text-[#212121] max-md:max-w-full max-md:text-7xl";
      styles.descriptionClassName =
        "mt-8 text-3xl max-md:mt-10 max-md:max-w-full text-[#212121] max-md:text-xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-2xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      styles.buttonClassName =
        "mt-6 mr-1 px-6 text-sm justify-center bg-[#FF7C7C] rounded-[50px] font-medium text-[#000000] relative h-[44px] overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#D84949] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full max-md:px-4";
      break;
    case 1:
      styles.backgroundClassName =
        "items-start flex flex-col justify-center h-[92vh] bg-[#E1C664] max-w-full max-sm:px-[7%] max-lg:px-[8%] lg:px-[12%] xl:px-[15%]";
      styles.headingClassName =
        "mt-6 text-9xl font-medium text-[#212121] max-md:max-w-full max-md:text-7xl";
      styles.descriptionClassName =
        "mt-8 text-3xl max-md:mt-10 max-md:max-w-full text-[#212121] max-md:text-2xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-2xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      styles.buttonClassName =
        "mt-6 mr-1 px-6 text-sm justify-center bg-[#F6C3FF] rounded-[50px] font-medium text-[#000000] relative h-[44px] overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9774E0] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full max-md:px-4";
      break;
    case 2:
      styles.backgroundClassName =
        "items-start flex flex-col justify-center h-[87vh] bg-[#FF7C7C] max-w-full max-sm:px-[7%] max-lg:px-[8%] lg:px-[12%] xl:px-[15%]";
      styles.headingClassName =
        "mt-6 text-8xl font-medium text-[#212121] max-md:max-w-full max-md:text-4xl md:text-7xl";
      styles.descriptionClassName =
        "mt-8 text-3xl max-md:mt-10 max-md:max-w-full text-[#212121] max-md:text-2xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-2xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      break;
    case 3:
      styles.backgroundClassName =
        "items-start flex flex-col justify-center h-[84vh] bg-[#C7B1F6] max-w-full max-sm:px-[7%] max-md:px-[8%] md:px-[12%] lg:px-[12%] xl:px-[15%]";
      styles.headingClassName =
        "mt-6 text-8xl font-medium text-[#212121] max-md:max-w-full max-md:text-5xl md:text-7xl";
      styles.descriptionClassName =
        "mt-8 text-3xl max-md:mt-10 max-md:max-w-full text-[#212121] max-md:text-xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-2xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      break;
    case 4:
      styles.backgroundClassName =
        "items-start flex flex-col justify-center h-[80vh] bg-[#F6D5FC] max-w-full max-sm:px-[7%] max-md:px-[8%] md:px-[12%] lg:px-[12%] xl:px-[15%]";
      styles.headingClassName =
        "mt-6 text-8xl font-medium text-[#212121] max-md:max-w-full max-md:text-5xl md:text-7xl";
      styles.descriptionClassName =
        "mt-8 text-3xl max-md:mt-10 max-md:max-w-full text-[#212121] max-md:text-2xl";
      styles.subheadingClassName =
        "max-md:max-w-full font-medium text-[#212121] text-2xl";
      styles.dateClassName = "max-md:max-w-full font-normal text-[#212121]";
      break;
    default:
    // code block
  }
  return styles;
};

export default getStyles;
