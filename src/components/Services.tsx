
import { Card } from "./ui/card";
import { Sticker, Building2, Image, Flag, Printer, Palette } from "lucide-react";

const services = [
  {
    icon: Sticker,
    title: "Adesivos",
    description: "Adesivos personalizados em diversos tamanhos e acabamentos",
  },
  {
    icon: Building2,
    title: "Fachadas Personalizadas",
    description: "Projetos completos de fachadas com materiais de alta qualidade",
  },
  {
    icon: Image,
    title: "Banners e Bandeirolas",
    description: "Impressão em grande formato com cores vibrantes",
  },
  {
    icon: Printer,
    title: "Plotagens",
    description: "Plotagem em diversos materiais e superfícies",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Desenvolvimento completo da sua marca",
  },
  {
    icon: Flag,
    title: "LED Neon",
    description: "Letreiros e painéis em LED neon personalizados",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-accent-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-accent-dark mb-4">Nossos Serviços</h2>
          <p className="text-accent">
            Soluções completas em comunicação visual para sua empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-accent-dark mb-2">{service.title}</h3>
              <p className="text-accent">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
