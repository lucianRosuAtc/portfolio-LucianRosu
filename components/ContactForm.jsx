"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    isLoading: false,
    error: "",
    success: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState({ ...formState, success: "", error: "" });

    if (!formState.email || !formState.name || !formState.message) {
      setFormState({ ...formState, error: "All fields are required" });
      return;
    }

    const templateParams = {
      subject: formState.email,
      name: formState.name,
      message: formState.message,
    };

    setFormState({ ...formState, isLoading: true });
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      )
      .then(
        function (response) {
          setFormState({
            name: "",
            email: "",
            message: "",
            isLoading: false,
            success: "Email sent successfully!",
            error: "",
          });
        },
        function (error) {
          setFormState({
            ...formState,
            error: "Something went wrong. Please try again later.",
            isLoading: false,
          });
          console.error(error);
        }
      );
  };

  return (  
      <form
        onSubmit={sendEmail}
        className="flex flex-col mt-10 xl:mt-12 gap-y-4"
      >
        <div className="relative flex items-center">
          <Input
            type="text"
            name="name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            placeholder="Your Name"
            required
          />
          <UserRound
            size={20}
            className="absolute top-2 right-2 text-primary"
          />
        </div>

        <div className="relative flex items-center">
          <Input
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            placeholder="Your Email"
            required
          />
          <MailIcon size={20} className="absolute top-2 right-2 text-primary" />
        </div>

        <div className="relative flex items-center">
          <Textarea
            name="message"
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            placeholder="Your Message"
            required
            rows="10"
          />
          <MessageCircleMore
            size={20}
            className="absolute top-2 right-2 text-primary"
          />
        </div>

        <Button
          disabled={formState.isLoading}
          type="submit"
          className="flex items-center justify-center gap-x-2 max-w-md"
        >
          {formState.isLoading ? "Sending..." : "Send Message"}
          <ArrowRightIcon size={20} />
        </Button>
      </form>
  );
}
