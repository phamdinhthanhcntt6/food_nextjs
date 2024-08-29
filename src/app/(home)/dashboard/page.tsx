import { saleData } from "@/app/(home)/dashboard/data";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="flex flex-col p-8 w-full gap-6">
      <div className="flex gap-6 w-full max-lg:flex-col">
        <div className="rounded-lg bg-white w-2/3 p-4 flex flex-col max-lg:w-full max-lg:mx-auto">
          <span className="text-[#383E49] text-xl font-medium max-lg:text-center">
            Sales Overview
          </span>
          <div className="flex justify-between w-full mt-6 max-2xl:grid max-2xl:grid-cols-2 items-center">
            {saleData.map((item) => (
              <div key={item.id} className="flex">
                <div className="flex flex-col justify-center">
                  <div className="w-full">
                    <Image
                      src={item.icon}
                      alt=""
                      className="mx-auto max-lg:mx-0"
                    />
                  </div>
                  <div className="mt-4 flex flex-row gap-8 items-center max-md:flex-col">
                    <span className="text-[#5D6679] text-base font-semibold">
                      ₹ {item.count}
                    </span>
                    <span className="text-[#5D6679] text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                </div>
                <>
                  {item.id <= saleData.length - 1 && (
                    <div className="ml-16 border-[#F0F1F3] border max-2xl:hidden"></div>
                  )}
                </>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white w-1/3 p-4 max-lg:w-full">
          <span className="text-[#383E49] text-xl font-medium">
            Inventory Summary
          </span>
        </div>
      </div>
      <div className="flex gap-6 w-full ">
        <div className="rounded-lg bg-white w-2/3 p-4">
          <span className="text-[#383E49] text-xl font-medium">
            Purchase Overview
            <div className="flex justify-between w-full mt-6 max-lg:grid max-lg:grid-cols-1">
              {saleData.map((item) => (
                <div key={item.id} className="flex flex-row">
                  <div className="flex flex-col justify-center">
                    <div className="w-full">
                      <Image src={item.icon} alt="" className="mx-auto" />
                    </div>
                    <div className="mt-4 flex flex-row gap-8 items-center">
                      <span className="text-[#5D6679] text-base font-semibold">
                        ₹ {item.count}
                      </span>
                      <span className="text-[#5D6679] text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <>
                    {item.id <= saleData.length - 1 && (
                      <div className="ml-16 border-[#F0F1F3] border max-lg:hidden"></div>
                    )}
                  </>
                </div>
              ))}
            </div>
          </span>
        </div>
        <div className="rounded-lg bg-white w-1/3 p-4">
          <span className="text-[#383E49] text-xl font-medium">
            Product Summary
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
