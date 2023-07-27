import Faqs from "./components/Faqs/Faqs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Services/Service";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Features />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
