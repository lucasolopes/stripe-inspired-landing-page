
import { Shield, Globe, Zap, CreditCard } from "lucide-react";

const features = [
  {
    name: "Pagamentos globais",
    description: "Aceite pagamentos de clientes em todo o mundo com suporte para mais de 135 moedas.",
    icon: Globe,
  },
  {
    name: "Segurança em primeiro lugar",
    description: "Proteção contra fraudes e criptografia de ponta a ponta para todas as transações.",
    icon: Shield,
  },
  {
    name: "Processamento rápido",
    description: "Otimização de taxas de aprovação e processamento instantâneo de pagamentos.",
    icon: Zap,
  },
  {
    name: "Métodos flexíveis",
    description: "Suporte a diversos métodos de pagamento, incluindo cartões e pagamentos locais.",
    icon: CreditCard,
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-primary/10 text-stripe-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stripe-secondary">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
