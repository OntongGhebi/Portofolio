import PropTypes from "prop-types";

const ExpInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-blue pb-2">{number}</p>
      <p className="font-bold text-xl text-lightGray uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExpInfo;

ExpInfo.propTypes = {
  number: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
