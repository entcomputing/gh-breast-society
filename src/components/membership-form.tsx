import { FormEvent, useState } from "react";
import { notifications } from "@mantine/notifications";

import emailjs from "emailjs-com";

import TextInput from "./inputs/text-input";
import GradientButton from "./buttons/gradient-button";
import GrayText from "./gray-text";

const MembershipForm = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [title, setTitle] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [affiliates, setAffiliates] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
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
      console.log({
        name,
        sex,
        title,
        qualifications,
        profession,
        address,
        affiliates,
        email,
        number,
        type,
      });

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        "template_4syrhvg",
        {
          name,
          sex,
          title,
          qualifications,
          profession,
          address,
          affiliates,
          email,
          number,
          type,
          form_type: "Membership",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      notifications.show({
        message: "Memebership Details Sent Successfully!",
        color: "teal",
      });
    } catch (error) {
      notifications.show({
        message: "Memebership Details Sending Failed! Try Again",
        color: "red",
      });
    } finally {
      setIsSending(false);
      setName("");
      setSex("");
      setTitle("");
      setQualifications("");
      setProfession("");
      setAddress("");
      setAffiliates("");
      setEmail("");
      setNumber("");
      setType("");
    }
  };

  return (
    <form className="pt-10 space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <GrayText text="Personal Information" />

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
          <TextInput
            placeholder="your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextInput
            placeholder="sex"
            onChange={(e) => setSex(e.target.value)}
            value={sex}
          />
          <TextInput
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
      </div>

      <div className="space-y-5">
        <GrayText text="Professional Details" />

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
          <TextInput
            placeholder="Qualification(s)"
            onChange={(e) => setQualifications(e.target.value)}
            value={qualifications}
          />
          <TextInput
            placeholder="Profession / Occupation /Specialty"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
          />
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
          <TextInput
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <TextInput
            placeholder="Affiliated Institution(s)"
            onChange={(e) => setAffiliates(e.target.value)}
            value={affiliates}
          />
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
          <TextInput
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            placeholder="Telephone Number(s)"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
          <TextInput
            placeholder="Choose membership type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
          <GradientButton
            text="Submit"
            classNames="px-5 py-2 rounded-[6px]"
            onClick={() => {}}
            type="submit"
            disabled={isSending}
          />
        </div>
      </div>
    </form>
  );
};

export default MembershipForm;
