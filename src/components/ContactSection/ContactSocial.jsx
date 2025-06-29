import SingleContactSocial from "./SingleContactSocial";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Icon={FaInstagram}
        link="https://www.instagram.com/ghebi_03/"
      />
      <SingleContactSocial
        Icon={FiGithub}
        link="https://github.com/OntongGhebi/"
      />
      <SingleContactSocial
        Icon={FaLinkedin}
        link="https://www.linkedin.com/in/ghebi-armando-8b473424a/"
      />
    </div>
  );
};

export default ContactSocial;
