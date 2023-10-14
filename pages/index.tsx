


import { Hero } from "@/components/hero";
import CategoryItems from '@/components/categoryItems';
import LastProducts from "@/components/lastProducts";
import { Container } from "react-bootstrap";
// import HotNewArrivals from "./home/hotNewArrivals";
import HotNewArrivals from './../components/hotNewArrivals';
import HomeBanner from "../components/homeBanner";

//--------------------------------
const Home = () => {



  return (
    <>
      <section>
        <Container>
          <Hero />
          <CategoryItems />
        </Container>
        <LastProducts sectionTitle="Latest Products" />
      </section>
      <section>
        <HomeBanner />
      </section>
      <section>
        <HotNewArrivals sectionTitle="Hot New Arrivals" />
      </section>
    </>
  )
}

export default Home