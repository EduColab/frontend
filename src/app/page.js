import Image from "next/image";
import Nav from "@/components/navbar/Nav";
import { Header } from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import CommunitySection from "@/components/CommunitySection/CommunitySection";
import Carrers from "../components/careers/careers.jsx";
import Universities from "@/components/universities/universities";


export default function Home({titleC}) {
  return (
    <>
      <Nav />
      <Header />
      <Carrers />
      <Universities/>
      <CommunitySection />
      <Footer />
    </>
  );
}
