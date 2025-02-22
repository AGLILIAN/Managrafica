
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleOrder = () => {
    window.location.href = `https://wa.me/5541998783857?text=${encodeURIComponent(
      "Olá! Gostaria de fazer um pedido."
    )}`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-lighter to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-accent-dark">
            Impressões de Alta Qualidade
            <span className="text-primary"> em Tempo Real</span>
          </h1>
          <p className="text-xl text-accent leading-relaxed">
            Materiais impressos com excelência e agilidade. Do arquivo à entrega, cuidamos de tudo para você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleOrder}
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            >
              Fazer Pedido
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
