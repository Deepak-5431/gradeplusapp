import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import KeyFeatures from "./pages/keyFeature";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Crousal from "./components/Crousal";
import Client from "./pages/Client";
import Schools from "./pages/Schools";
import Details from "./pages/Details";
import Applink from "./components/Applink";
import ExploreCourse from "./pages/ExploreCourse";
import Featuredcourses from "./components/FeaturedCourses";
import SubjectiveAssessment from "./components/SubjectiveAssessment";
import School from "./components/School";
import { Section } from "lucide-react";
const Home = () => {
  return (
    <div>
      <Header />
      <section id="home"><Crousal /></section>
      <section id="keyfeatures"><KeyFeatures /></section>
      
      <SubjectiveAssessment />
      <section id="About us"><ExploreCourse /></section>
      <School />
      <section id="herosection"><HeroSection /></section>
      <Details />
      
     
      <Featuredcourses />
      <section id="gallery"><Gallery /></section>
      <section id="form"><Form /></section>
      <section id="testimonies"><Schools /></section>
      <Client />
      <Applink />
      <Footer />
    </div>
  );
};

export default Home;
