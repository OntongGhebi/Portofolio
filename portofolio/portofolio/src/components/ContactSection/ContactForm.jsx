import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_52d68y9", "template_l8hu97z", form.current, {
        publicKey: "RrvHVlfnFLjtZFc1w",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-blue">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-gray px-2 border border-lightblue hover:border-lightblue transition-all duration-500"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-gray px-2 border border-lightblue hover:border-lightblue transition-all duration-500"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-gray p-2 border border-lightblue hover:border-lightblue transition-all duration-500"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-lightblue text-white h-12 font-bold text-xl hover:bg-lightblue transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
