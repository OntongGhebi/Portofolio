import PropTypes from "prop-types";

const SingleExp = ({ experience }) => {
  return (
    <div className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-lightOrange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-lightblue">{experience.job}</p>
      <p className="text-lightOrange">{experience.company}</p>
      <p className="text-lightGray">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExp;

SingleExp.propTypes = {
  experience: PropTypes.shape({
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
