import AskHelp from "@/components/AskHelp";
import Features from "@/components/Features";
import Intro from "@/components/Intro";
import StoresCards from "@/components/StoresCards";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <AskHelp />
      <StoresCards />
    </>
  );
}
