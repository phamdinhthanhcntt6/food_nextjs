import { icons } from "@/assets/icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full justify-between rounded-lg bg-white flex flex-row py-7 px-8 items-center max-lg:w-full">
      <div className="py-2 p-4 border rounded-lg flex flex-row items-center w-1/3 gap-2 max-lg:border-none">
        <Image src={icons.search} alt="" className="w-6 h-6" />
        <Input
          placeholder="Search"
          className="active:border-none h-2/3 w-full max-xl:hidden"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Image src={icons.notification} alt="" className="w-6 h-6" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="" />
        </Avatar>
      </div>
    </div>
  );
};
export default Header;
