import Header from "@/app/(home)/components/Header";
import Sider from "@/app/(home)/components/Sider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-[#F0F1F3]">
      <div className="flex w-full gap-1">
        <Sider />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
