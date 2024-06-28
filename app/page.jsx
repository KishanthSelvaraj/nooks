import ProductsPage from "@/components/ProductsPage";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Features_2 from "@/components/Features_2";
import Features from "@/components/Feature";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
   <Header/>
    <About/>
    <Features_2/>
    <Gallery/>
    {/* <Features/> */}
    <Contact/>
    {/* <Footer/> */}
    </div>
  );
}
