import PropTypes from "prop-types";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-blue">{name}</h2>
        <h2>{year}</h2>
        <a href={link}>
          View <HiMiniArrowTopRightOnSquare />
        </a>
      </div>
      <div>
        <div></div>
        <img src={image} alt="Project Image" />
      </div>
    </div>
  );
};

export default SingleProject;

SingleProject.propTypes = {
  name: PropTypes.node.isRequired,
  year: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
