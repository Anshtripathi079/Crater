import Faqs from "./components/Faqs/Faqs";
import Features from "./components/Features/Features";
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
    </div>
  );
};

export default App;
