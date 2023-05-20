
import Image from "next/image";
import Nav from "@/components/navbar/Nav";
import { Header } from "@/components/header/Header";
import styles from "../styles/page.module.css";
import Footer from "@/components/Footer/Footer";
import CommunitySection from "@/components/CommunitySection/CommunitySection";
import Carrers from "../components/careers/careers.jsx"


export default function Home() {
  return (
    <>
     <Nav />
      <Header />
      <Carrers />
      <CommunitySection />
      <Footer />
    </>
  );
}
