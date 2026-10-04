
import React from "react";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCourses />
      <WhyChooseUs/>
      <Stats />
      <CTA/>
      <Footer />
    </>
  );
};

export default Home;