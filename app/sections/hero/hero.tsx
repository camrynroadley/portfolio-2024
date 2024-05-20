import * as React from "react";

const Hero = () => {
  return (
      <div className="flex flex-col justify-center pt-4 pr-6 pb-8 w-full bg-[#56425E] max-md:pr-5 max-md:max-w-full">
        <div className="self-end text-2xl text-purple-300 max-md:mr-2.5">
          MORE +
        </div>
        <div className="mt-10 ml-0 font-medium text-purple-300 text-[300px] max-md:max-w-full max-md:text-4xl">
          Camryn
        </div>
        <div className="mt-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-2xl text-purple-300 max-md:mt-10">
                When design is BY communities (i.e., the users or groups who
                stand to benefit from change or innovation) the process,
                end-to-end, is led from within. This is where the values of ABCD
                are fundamental. Skills, assets, knowledge and connections.
                <br />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow font-medium text-purple-300 whitespace-nowrap text-[300px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="max-md:max-w-full max-md:text-4xl">Roadley</div>
                <div className="shrink-0 mt-14 ml-80 rounded-full bg-white bg-opacity-50 h-[17px] w-[17px] max-md:mt-10 max-md:ml-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero;
