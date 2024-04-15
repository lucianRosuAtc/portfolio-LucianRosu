

'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  UserRound,
  MailIcon,
  ArrowRightIcon,
  MessageCircleMore,
} from "lucide-react";

export default function ContactForm() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Update inputs value
  const handleParam = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(process.env.FORM, {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };

  return (
    <form
      action={process.env.FORM} 
      method="POST"
      onSubmit={formSubmit}
      className="flex flex-col mt-10 xl:mt-16 gap-y-4"
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          name="name"
          value={query.name}
          onChange={handleParam}
          placeholder="Name"
        />
        <UserRound size={20} className="absolute top-2 right-2 text-primary" />
      </div>

      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          value={query.email}
          onChange={handleParam}
          placeholder="Email"
        />
        <MailIcon size={20} className="absolute top-2 right-2 text-primary" />
      </div>

      <div className="relative flex items-center">
        <Textarea
          name="message"
          id="message"
          rows="7"
          placeholder="Message"
          value={query.message}
          onChange={handleParam}
        />
        <MessageCircleMore
          size={20}
          className="absolute top-2 right-2 text-primary"
        />
      </div>
      
      <Button
        type="submit"
        className="flex items-center justify-center gap-x-2"
      >
        Send Message
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}