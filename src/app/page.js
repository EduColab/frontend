import Image from "next/image";
import styles from "../styles/page.module.css";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <>
      <CommunitySection />
      <Footer />
    </>
  );
}
