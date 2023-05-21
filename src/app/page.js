import Image from "next/image";
import Nav from "@/components/navbar/Nav";
import { Header } from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import CommunitySection from "@/components/CommunitySection/CommunitySection";
import Caption from "@/components/caption/caption";
import Carrers from "../components/careers/careers.jsx";
import Universities from "@/components/universities/universities";


export default function Home({titleC}) {
  return (
    <>
      <Nav />
      <Header />
      <Caption />
      <Carrers />
      <Universities/>
      <CommunitySection />
      <Footer />
    </>
  );
}
