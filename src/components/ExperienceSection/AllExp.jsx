import SingleExp from "./SingleExp";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "ABC Company",
    date: "2024-Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale applications.",
      "Working on the performance of web applications.",
    ],
  },
  {
    job: "UI/UX Designer",
    company: "BCD Company",
    date: "2024-Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale applications.",
      "Working on the performance of web applications.",
    ],
  },
  {
    job: "Logo Designer",
    company: "CDE Company",
    date: "2024-Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale applications.",
      "Working on the performance of web applications.",
    ],
  },
];

const AllExp = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExp key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-lightblue lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExp;
