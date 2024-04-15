"use client";

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
  return (
    <form className="flex flex-col mt-10 xl:mt-16 gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <UserRound size={20} className="absolute top-2 right-2 text-primary" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="email" />
        <MailIcon size={20} className="absolute top-2 right-2 text-primary" />
      </div>
      <div className="relative flex items-center">
        <Textarea type="name" id="name" rows="7" placeholder="Message" />
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
