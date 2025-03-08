import PropTypes from "prop-types";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-white text-blue rounded-full p-3 flex items-center">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;

SingleContactSocial.propTypes = {
  Icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};
