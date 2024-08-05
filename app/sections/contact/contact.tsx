import * as React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center bg-neutral-900 w-full mt-auto h-screen text-[#F6C3FF]">
      <div className="text-9xl font-medium text-center max-lg:text-7xl">
        Get in touch.
      </div>
      <div className="flex gap-3.5 justify-center mt-10 text-2xl max-lg:flex-wrap">
        <div className="self-stretch my-auto">
          <a
            href="https://www.linkedin.com/in/camrynroadley"
            target="_blank"
            className="relative w-fit block hover:text-[#F3FB8E] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F3FB8E] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            LinkedIn
          </a>
        </div>
        <div className="self-stretch my-auto text-xl">⚬</div>
        <div className="peer/personal self-stretch my-auto">
          <a
            data-testid="github-personal-link"
            href="https://github.com/camrynroadley"
            target="_blank"
            className="relative w-fit block hover:text-[#F3FB8E] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F3FB8E] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            GitHub
          </a>
        </div>
        <div className="justify-center self-stretch px-3 py-1 my-auto text-xs font-medium whitespace-nowrap bg-[#F6C3FF] peer-hover/personal:bg-[#F3FB8E] transition-all rounded-md text-neutral-900">
          PERSONAL
        </div>
        <div className="self-stretch my-auto text-xl">⚬</div>
        <div className="peer/professional self-stretch">
          <a
            data-testid="github-professional-link"
            href="https://github.com/croadley"
            target="_blank"
            className="relative w-fit block hover:text-[#F3FB8E] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F3FB8E] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            GitHub
          </a>
        </div>
        <div className="justify-center self-stretch px-3 py-1 my-auto text-xs font-medium whitespace-nowrap bg-[#F6C3FF] peer-hover/professional:bg-[#F3FB8E] transition-all rounded-md text-neutral-900">
          PROFESSIONAL
        </div>
      </div>
    </div>
  );
};

export default Contact;
