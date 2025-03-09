import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="ls:text-2xl sm:text-xl uppercase text-lightOrange"
      >
        Software Developer and Logo Deigner
      </motion.h2>
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.5rem] lg:text-5xl sm:text-4xl font-bold uppercase font-special text-blue"
      >
        Ghebi Armando
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A Passionate Software Developer with 1 years experience & <br /> Logo
        Designer with 2 years of experince.
      </motion.p>
    </div>
  );
};

export default HeroText;
