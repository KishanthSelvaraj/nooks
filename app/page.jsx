import ProductsPage from "@/components/ProductsPage";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Features_2 from "@/components/Features_2";
import Features from "@/components/Feature";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
// import Gal2 from "@/components/Gal2";


export default function Home() {
  return (
    <div>
   <Header/>
    <About/>
    <Features_2/>
    <Gallery/>
    {/* <Gal2/> */}
    {/* <Features/> */}
    <Contact/>
    </div>
  );
}
