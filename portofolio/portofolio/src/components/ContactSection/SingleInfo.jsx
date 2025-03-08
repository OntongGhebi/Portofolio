import PropTypes from "prop-types";

const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;

SingleInfo.propTypes = {
  Image: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
