import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
}
