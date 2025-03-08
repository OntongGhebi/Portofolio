import SingleContactSocial from "./SingleContactSocial";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial Icon={FaInstagram} link="#" />
      <SingleContactSocial Icon={FiGithub} link="#" />
      <SingleContactSocial Icon={FaLinkedin} link="#" />
    </div>
  );
};

export default ContactSocial;
