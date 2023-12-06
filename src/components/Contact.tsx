import { Button, Input, Textarea } from "@nextui-org/react";
import { MouseEventHandler, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Submitting ${name} ${email} ${message}`);
  };

  return (
    <div className="flex flex-col items-center justify-center" id="Contact">
      <h1 className="text-4xl font-bold text-center text-white pt-20">
        Get in Touch
      </h1>
      <form
        className="flex flex-col items-center justify-evenly lg:w-[50vw] lg:h-[60vh] mobile:w-[90%] mt-8 bg-white h-[400px] rounded-xl mb-10 "
        id="contactcontainer"
        // onSubmit={handleSubmit}
      >
        <Input
          type="text"
          required
          label="Name"
          onChange={(e) => setName(e.target.value)}
          variant="bordered"
          className="w-2/3"
          value={name}
        />
        <Input
          type="text"
          label="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          className="w-2/3"
          value={email}
        />
        {/* <textarea
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="contactmessage"
          value={message}
        /> */}
        <Textarea
          label="Message"
          required
          variant="bordered"
          placeholder="Your message"
          disableAutosize
          classNames={{
            base: "w-2/3",
            input: "resize-y min-h-[40px]",
          }}
        />

        <Button
          className=" text-white lg:w-1/4 mobile:w-1/2 text-xl font-semibold"
          color="success"
          variant="shadow"
          onClick={handleSubmit}
          // onClick={async () => {
          //   if (name === "" || email === "" || message === "") {
          //     alert("Please fill all the fields");
          //     return;
          //   }
          //   const res = await sendComment(name, email, message);
          //   if (res === true) {
          //     alert("Message sent successfully");
          //     setName("");
          //     setEmail("");
          //     setMessage("");
          //   }
          // }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}