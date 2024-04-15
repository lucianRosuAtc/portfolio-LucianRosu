import ContactForm from "@/components/ContactForm";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
      <div className="container mx-auto">
        <div className="grid pt-12 mb-6 xl:mb-14">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              Say Hello
            </div>
            <h1 className="my-4">Let's work together</h1>
            <p className="max-w-[600px] xl:max-w-[900px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti vero expedita dignissimos natus reprehenderit. Rerum
              corporis perferendis consequatur ipsam.
            </p>
          </div>
        </div>

        <div className="grid mb-14 xl:mb-24">
          <div className="flex flex-col gap-y-4 xl:gap-y-6 xl:text-lg">
            <div className="flex items-center gap-x-8 ">
              <MailIcon size={18} className="text-primary" />
              <a
                href="mailto:lucian.rosu.atc@gmail.com"
                className="hover:text-primary"
              >
                lucian.rosu.atc@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div className="">Exeter UK</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <a href="tel:07505709297" className="hover:text-primary">
                07505709297
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
  );
}
