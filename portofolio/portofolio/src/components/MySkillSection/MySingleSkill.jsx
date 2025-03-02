import PropTypes from "prop-types";

const MySingleSkill = ({ icon, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-lightOrange h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-gray hover:scale-105 transform transition-all duration-500 text-5xl border-4 border-lightblue">
          {icon}
        </div>
        <p className="text-gray font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-lightblue absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default MySingleSkill;

// Menambahkan validasi props
MySingleSkill.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
