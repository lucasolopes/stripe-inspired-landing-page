
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-stripe-secondary">
      <div className="absolute inset-0 bg-gradient-to-r from-stripe-primary to-stripe-blue opacity-10 animate-gradient-x"></div>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Infraestrutura de pagamentos para a internet
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Milhões de empresas de todos os tamanhos usam nossa plataforma de software e APIs para aceitar pagamentos, fazer transferências e gerenciar seus negócios online.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-stripe-primary hover:bg-stripe-primary/90">
              Comece agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="link" className="text-white hover:text-stripe-primary">
              Fale com vendas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
