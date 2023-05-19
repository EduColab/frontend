import Image from "next/image";
import styles from "../styles/page.module.css";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import UniversitiesSection from "@/components/UniversitiesSection";

export default function Home() {
  return (
    <>
      <UniversitiesSection />
      <CommunitySection />
      <Footer />
    </>
  );
}
