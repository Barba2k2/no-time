import Image from "next/image";
import Header from "../_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold p-2">Hello World</h1>
    </>
  );
}
