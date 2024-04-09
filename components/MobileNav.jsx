import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
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
      <SheetContent>
        <div className="flex flex-col items-center gap-8">
          <Logo />
          <NavBar />
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  );
}
