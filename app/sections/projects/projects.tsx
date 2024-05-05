import * as projects from "../../data/projects.json";
import Card from "@/app/components/card/card";
import { PROJECTS } from "@/app/constants";
import { Project } from "@/app/models/types";

const Projects = (): JSX.Element => {
  const backgroundClassName = 'bg-[#454B3E] flex h-screen';

  return (
    <div className={backgroundClassName}>
      {/* Left half of the screen: Vertical menu bar */}
      <div className="w-1/4">
        {/* Menu items */}
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right half of the screen: Two cards with information */}
      <div className="w-3/4 p-8">
        {projects.map((project: Project, index: number) => {
          return (
            <Card
              key={`projects-card-${index}`}
              sectionName={PROJECTS}
              subHeading={`${project.subheading} ⚬ ${project.date}`}
              heading={project.heading}
              description={project.description}
              showButton={true}
              showImage={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
