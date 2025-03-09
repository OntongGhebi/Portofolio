import MyAllSkills from "./MyAllSkills";
import MyAllSkillsSM from "./MyAllSkillsSM";
import MySkillText from "./MySkillText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MySkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <MySkillText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <MyAllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <MyAllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default MySkillMain;
