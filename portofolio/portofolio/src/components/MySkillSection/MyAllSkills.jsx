import { FaFigma, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeillustrator } from "react-icons/si";
import MySingleSkill from "./MySingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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

const MyAllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <MySingleSkill
                key={index}
                text={item.skill}
                icon={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAllSkills;
