import { servicesData } from './components-data/services-data';

export default function Services() {
  return (
    <div className="my-12 xl:mb-36 px-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-24 xl:mb-32 text-center mx-auto">My Services</h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-[75px] xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col justify-center items-center py-4 w-full max-w-sm h-80 shadow-xl dark:shadow-lg dark:shadow-secondary border rounded-md px-4"
              >
                <div className="text-primary absolute -top-[50px]">
                  <div className="flex justify-center items-center w-24 h-24 bg-white shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg  rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="text-center">
                    <h3 className="mb-4">{item.title}</h3>
                    <div className="subtitle">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

