import { FaFigma, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeillustrator } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Illustrator",
    icon: SiAdobeillustrator,
  },
];

const MyAllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange hover:text-lightGray" />
            <p className="text-center mt-4 text-lightGray">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyAllSkillsSM;
