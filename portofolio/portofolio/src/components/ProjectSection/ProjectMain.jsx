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
    <div className="mt-10">
      <div>
        <ProjectText />
      </div>
      <div>
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
