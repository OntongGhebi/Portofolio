import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

const ProjectMain = () => {
  return (
    <div className="mt-10">
      <div>
        <ProjectText />
      </div>
      <div>
        <ProjectImage />
      </div>
    </div>
  );
};

export default ProjectMain;
