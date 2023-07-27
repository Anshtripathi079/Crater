import Faqs from "./components/Faqs/Faqs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Services/Service";
import Testimonials from "./components/Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const App = () => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1200,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div>
      <Header />
      <Hero defaultOptions={defaultOptions} />
      <Service defaultOptions={defaultOptions} />
      <Features />
      <Testimonials defaultOptions={defaultOptions} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
