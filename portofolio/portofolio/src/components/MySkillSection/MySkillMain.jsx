import MyAllSkills from "./MyAllSkills";
import MyAllSkillsSM from "./MyAllSkillsSM";
import MySkillText from "./MySkillText";

const MySkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <MySkillText />
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
