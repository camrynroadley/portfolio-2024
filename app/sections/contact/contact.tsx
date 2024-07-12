import * as React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center text-fuchsia-200">
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
  );
};

export default Contact;
