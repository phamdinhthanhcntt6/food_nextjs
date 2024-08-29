import { siderData } from "@/app/(home)/components/data";
import { images } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Sider = () => {
  return (
    <div className="flex flex-col p-8 h-full w-1/6 rounded-lg bg-white gap-4 max-xl:hidden ">
      <div className="flex flex-row items-center ">
        <Image src={images.logo} alt="" />
        <span className="ml-3 uppercase text-[#1570EF] text-xl font-semibold">
          KanBan
        </span>
      </div>
      <div className="flex flex-col gap-8 mt-4">
        {siderData.map((item) => (
          <div key={item.id}>
            <Link
              href={item.href}
              className="flex flex-row items-center active:text-[#1570EF] gap-4"
            >
              <Image src={item.icon} className="w-6 h-6" alt="" />
              <span className="text-base text-[#5D6679]">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sider;
