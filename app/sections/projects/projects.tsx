import NavBar from "@/app/components/navBar";
import Card from "@/app/components/card/card";
import data from "@/app/data/projects.json";
import { PROJECTS } from "@/app/constants";

const Projects = () => {
  return (
    <div className="h-[100rem] sticky top-0 z-10 flex gap-40 justify-between px-16 py-16 bg-[#454B3E] max-md:flex-wrap max-md:px-5">
      <NavBar sectionName={PROJECTS} />
      <div className="flex flex-col space-y-16">
        {data.map((project) => {
          const { heading, subheading, date, description } = project;
          return (
            <Card
              key={`card-${heading}`}
              sectionName={PROJECTS}
              heading={heading}
              subheading={subheading}
              date={date}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
