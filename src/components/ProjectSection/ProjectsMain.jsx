import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "FreeStudy",
    year: "2023",
    align: "right",
    image: "/nextech.jpg",
    link: "#",
  },
  {
    name: "FreeStudy",
    year: "2023",
    align: "left",
    image: "/nextech.jpg",
    link: "#",
  },
  {
    name: "Documentation Testing App-Spotify",
    year: "2025",
    align: "right",
    image: "/anomali.png",
    link: "https://testing-app-spotify.vercel.app/",
  },
  {
    name: "Fres Jewelry E-Commerce",
    year: "2025",
    align: "left",
    image: "/frewel.png",
    link: "https://fresjewelry-ebus.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
