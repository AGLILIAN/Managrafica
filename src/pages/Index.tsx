
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
