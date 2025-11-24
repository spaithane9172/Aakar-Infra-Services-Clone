import ProjectCard from "./ProjectCard";
import { ourProjects } from "@/data/ourProjects.data";

const OurProjects = () => {
  return (
    <div id="projects" className="px-4 md:px-40 py-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-6 md:mb-10">
        {ourProjects.title}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {ourProjects.projects.map((data) => (
          <ProjectCard data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
