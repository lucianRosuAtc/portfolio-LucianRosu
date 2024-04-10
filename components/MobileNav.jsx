import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import NavBar from "./NavBar";
import Logo from "./Logo";
import Socials from "./Socials";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="dark:bg-lightDark">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-10 sm:gap-y-14 md:gap-y-20 lg:gap-y-24">
            <Logo />
            <NavBar
              containerStyles="flex flex-col items-center gap-y-6"
              onClose={() => Sheet.onClose()}
            />
          </div>
          <Socials containerStyles="flex gap-x-4" linkStyles="text-2xl hover:text-primary" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
