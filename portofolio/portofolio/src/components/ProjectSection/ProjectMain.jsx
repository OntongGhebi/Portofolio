import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "FreeStudy",
    year: "2023",
    align: "right",
    image: "../public/nextech.jpg",
    link: "#",
  },
  {
    name: "FreeStudy",
    year: "2023",
    align: "left",
    image: "../public/nextech.jpg",
    link: "#",
  },
  {
    name: "FreeStudy",
    year: "2023",
    align: "right",
    image: "../public/nextech.jpg",
    link: "#",
  },
  {
    name: "FreeStudy",
    year: "2023",
    align: "left",
    image: "../public/nextech.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
