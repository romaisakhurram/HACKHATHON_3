import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Leatest from "./components/Leatest"
import Offer from "./components/Offer"
import UniqueFeature from "./components/UniqueFeature"
import TrendingProduct from "./components/TrendingProduct"
import Discount from "./components/Discount"
import Topcategories from "./components/Topcategories"
import LatestUpdate from "./components/LatestUpdate"
import BlogPage from "./components/BlogPage"
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";

export default function Home() {
 
  return (

    <div>
      <TopHeader />
      <Header />
      <Hero/>
      <Feature/>
      <Leatest/>
      <Offer/>
      <UniqueFeature/>
      <TrendingProduct/>
      <Discount/> 
      <Topcategories/>
      <LatestUpdate/>
      <BlogPage/>
      <Footer/>
    </div>
  );
}
