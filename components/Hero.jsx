import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-orange-100 dark:bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col justify-center xl:mx-0 mx-auto text-center xl:text-left max-w-xl">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-wider">
              Web Developer
            </div>
            <h1 className="mb-4">Hello, my name is Lucian Rosu</h1>
            <p className="text-muted-foreground text-lg mb-8 font-light max-w-md mx-auto xl:mx-0">
              A concise summary offering insights into myself, my professional
              journey, and my occupational engagements.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-2 px-9">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-2 border border-primary"
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials />
          </div>

          <div className="hidden xl:flex relative">
            <div className="">
              <DevImg />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

