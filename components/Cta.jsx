import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="py-24 bg-orange-100 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h4 className="max-w-xl text-center mb-8">
            Ready to bring your project to life? Let's turn your ideas into
            reality. Get in touch today!
          </h4>
          <Link href="/contact">
            <Button className="gap-2 px-9">Contact Me</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
