
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5541998783857";
  const message = "Olá! Gostaria de fazer um pedido.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
