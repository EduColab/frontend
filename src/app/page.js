
import Image from "next/image";
import Nav from "@/components/navbar/Nav";
import { Header } from "@/components/header/Header";
import styles from "../styles/page.module.css";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
export default function Home() {
  return (
    <>
     <Nav />
      <Header />
      <CommunitySection />
      <Footer />
    </>
  );
}
