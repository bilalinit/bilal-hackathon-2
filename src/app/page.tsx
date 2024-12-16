import Bestseller from "./components/Bestseller";
import Carousel2 from "./components/carousel2";
import Crousel1 from "./components/crousel1";
import Featuredpost from "./components/featuredpost";
import Hero from "./components/hero";
import NavBar from "./components/NavBar";
import Universe from "./components/universe";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Crousel1/>
      <Hero/> 
      <Bestseller />
      <Carousel2/>
      <Universe/>
      <Featuredpost/>

    </div>
  );
}
