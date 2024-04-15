import { HomeIcon, PhoneIcon, MailIcon, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              Say Hello
            </div>
            <h1 className="">Let's work together</h1>
            <p className="max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti vero expedita dignissimos natus reprehenderit. Rerum
              corporis perferendis consequatur ipsam.
            </p>
          </div>
          {/* ilustration */}
          <div className="hidden xl:flex w-full text-primary justify-center">
            <Image
              src="/img/logo&header/LucianRosuPortfolioNoBg.png"
              width={400}
              height={400}
              alt="Lucian Rosu"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* info text and form  */}

        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 xl:text-lg">

          <div className="flex items-center gap-x-8 ">
            <MailIcon size={18} className="text-primary" />
            <a href="mailto:lucian.rosu.atc@gmail.com" className="hover:text-primary">lucian.rosu.atc@gmail.com</a>
          </div>
          <div className="flex items-center gap-x-8 ">
            <HomeIcon size={18} className="text-primary" />
            <div className="">Exeter UK</div>
          </div>
          <div className="flex items-center gap-x-8 ">
            <PhoneCall size={18} className="text-primary" />
            <a href="tel:07505709297" className="hover:text-primary">07505709297</a>
          </div>
          </div>
        <form>Form</form>
        </div>
      </div>
    </section>
  );
}
