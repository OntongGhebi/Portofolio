import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4">Get in Touch</h2>
        <p className="text-white">
          Feel Free to reach put if you`d like to collbaorate <br />
          you are just a few clocks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;
