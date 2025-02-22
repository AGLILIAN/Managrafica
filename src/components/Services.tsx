
import { Card } from "./ui/card";
import { Printer, Image, FileText, Book, Package, Calendar } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Impressão Digital",
    description: "Alta qualidade em pequenas e grandes tiragens",
  },
  {
    icon: Image,
    title: "Banners e Lonas",
    description: "Impressão em grande formato com cores vibrantes",
  },
  {
    icon: FileText,
    title: "Material Corporativo",
    description: "Cartões de visita, papel timbrado e envelopes",
  },
  {
    icon: Book,
    title: "Encadernação",
    description: "Diversos tipos de acabamento disponíveis",
  },
  {
    icon: Package,
    title: "Embalagens",
    description: "Desenvolvimento e produção personalizada",
  },
  {
    icon: Calendar,
    title: "Calendários",
    description: "Personalizados para sua empresa",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-accent-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-accent-dark mb-4">Nossos Serviços</h2>
          <p className="text-accent">
            Oferecemos uma ampla gama de serviços de impressão para atender todas as suas necessidades
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
