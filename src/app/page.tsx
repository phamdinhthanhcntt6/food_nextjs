import Link from "next/link";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Link href={"/dashboard"}>Home</Link>
    </h1>
  );
}
