import { FormEvent, useState } from "react";
import { notifications } from "@mantine/notifications";
import emailjs from "emailjs-com";

import TextInput from "./inputs/text-input";
import TextArea from "./inputs/text-area";
import GradientButton from "./buttons/gradient-button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(regex)) {
      notifications.show({
        message: "Kindly input valid email address",
        color: "red",
      });

      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        "template_z6lmh7j",
        {
          name,
          email,
          subject,
          message,
          form_type: "Contact",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      notifications.show({
        message: "Message Sent Successfully!",
        color: "teal",
      });
    } 
    finally {
      setIsSending(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  function SendMail() {
    var params = {
      name,
      email,
      subject,
      message,
      form_type: "Contact",
    }
    emailjs.send("service_5bruqjf", "template_c6dqsqa", params, "S_4W_iW3N59XFvYvn")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
        <TextInput
          placeholder="your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <TextInput
        placeholder="your subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />

      <TextArea
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <GradientButton
        text="Submit"
        classNames="px-5 py-2 rounded-[6px]"
        onClick={() => {SendMail()}}  
        type="submit"
        disabled={isSending}
      />
    </form>
  );
};

export default ContactForm;
