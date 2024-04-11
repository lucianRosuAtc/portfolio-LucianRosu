import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
const servicesData = [
  {
    title: "Web Development",
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    description:
      "I can create a website that will help you grow your business.",
  },
  {
    title: "Mobile Development",
    icon: <Blocks size={72} strokeWidth={0.8} />,
    description:
      "I can create a mobile app that will help you grow your business.",
  },
  {
    title: "UI/UX Design",
    icon: <Gem size={72} strokeWidth={0.8} />,
    description: "I can create a design that will help you grow your business.",
  },
];

export default function Services() {
  return (
    <div className="mb-12 xl:mb-36">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-20 xl:mb-24 text-center mx-auto">My Services</h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-[70px] xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="relative flex flex-col justify-center items-center py-4 w-full max-w-sm h-80 shadow-xl dark:shadow-lg dark:shadow-secondary"
              >
                <CardHeader className="text-primary absolute -top-[75px]">
                  <div className="flex justify-center items-center w-24 h-24 bg-white shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg  rounded-full">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
