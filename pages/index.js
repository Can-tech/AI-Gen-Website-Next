import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

// 2sGEVlgEhOeIf7VJ supabase pass
const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header hamburger={false} />
      <Hero />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
