
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    title: "Fachada Completa",
    description: "Projeto e execução de fachada com iluminação LED",
    price: "Sob consulta",
    image: "/placeholder.svg",
  },
  {
    title: "Banner em Lona",
    description: "Impressão digital em lona 440g com acabamento",
    price: "R$ 59,90/m²",
    image: "/placeholder.svg",
  },
  {
    title: "Cardápio Premium",
    description: "Cardápios personalizados com design exclusivo",
    price: "A partir de R$ 89,90",
    image: "/placeholder.svg",
  },
];

const Products = () => {
  const handleOrder = (product: string) => {
    const message = `Olá! Gostaria de fazer um orçamento para: ${product}`;
    window.location.href = `https://wa.me/5541998783857?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="produtos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-accent-dark mb-4">Produtos em Destaque</h2>
          <p className="text-accent">
            Conheça algumas das nossas soluções mais populares
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent-dark mb-2">{product.title}</h3>
                <p className="text-accent mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{product.price}</span>
                  <Button
                    onClick={() => handleOrder(product.title)}
                    variant="outline"
                    className="group"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Orçamento
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
