import Header from "@/app/(home)/components/Header";
import Sider from "@/app/(home)/components/Sider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex">
      <body className="flex">
        <Sider />
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
