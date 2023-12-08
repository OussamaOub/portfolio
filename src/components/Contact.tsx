import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { sendComment } from "../utils";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await sendComment(name, email, message);
    if (!res) {
      alert("Error sending message");
      return;
    }
    alert("Message sent successfully");
    Promise.all([setName(""), setEmail(""), setMessage("")]);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen"
      id="Contact"
    >
      <h1 className="text-4xl font-bold text-center text-white pt-20">
        Get in Touch
      </h1>
      <form
        className="flex flex-col items-center justify-evenly lg:w-[50vw] lg:h-[60vh] mobile:w-[90%] mt-8 bg-white h-[400px] rounded-xl mb-10 "
        id="contactcontainer"
        onSubmit={handleSubmit}
        // action={() => handleSubmit()}
      >
        <Input
          type="text"
          isRequired
          label="Name"
          onChange={(e) => setName(e.target.value)}
          variant="bordered"
          className="w-2/3"
          autoComplete="off"
          value={name}
        />
        <Input
          type="email"
          label="Email"
          isRequired
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          className="w-2/3"
          autoComplete="off"
          value={email}
        />
        <Textarea
          label="Message"
          isRequired
          variant="bordered"
          placeholder="Your message"
          disableAutosize
          value={message}
          autoComplete="false"
          classNames={{
            base: "w-2/3",
            input: "resize-y min-h-[40px]",
          }}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          className=" text-white lg:w-1/4 mobile:w-1/2 text-xl font-semibold"
          color="success"
          variant="shadow"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
