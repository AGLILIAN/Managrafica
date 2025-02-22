
import { Printer, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Printer className="h-6 w-6 text-primary" />
            <span className="font-semibold text-xl">PrintExpress</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-accent-dark hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-accent-dark hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#produtos" className="text-accent-dark hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#contato" className="text-accent-dark hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <Button variant="default" className="hidden md:flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Fazer Pedido
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
