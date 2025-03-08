import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="ghebiarmando@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+6285274160980" Image={FiPhone} />
      <SingleInfo
        text="Kab. Padang Pariaman, Sumatera Barat"
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
