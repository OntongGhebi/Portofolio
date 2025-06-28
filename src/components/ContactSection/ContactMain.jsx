import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-center text-blue mb-10">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-gray/60 p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default ContactMain;
