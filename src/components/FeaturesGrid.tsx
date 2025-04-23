
import { motion } from "framer-motion";
import { Shield, Globe, Zap, CreditCard, Code, Lock, Database, LineChart } from "lucide-react";

const features = [
  {
    name: "Pagamentos globais",
    description: "Aceite pagamentos de clientes em todo o mundo com suporte para mais de 135 moedas e métodos locais.",
    icon: Globe,
    color: "bg-blue-100",
    textColor: "text-blue-700",
    iconColor: "text-blue-500",
  },
  {
    name: "Segurança avançada",
    description: "Proteção contra fraudes com inteligência artificial e criptografia de ponta a ponta para todas as transações.",
    icon: Shield,
    color: "bg-green-100",
    textColor: "text-green-700",
    iconColor: "text-green-500",
  },
  {
    name: "Processamento rápido",
    description: "Otimização de taxas de aprovação e processamento instantâneo de pagamentos com mínima latência.",
    icon: Zap,
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
    iconColor: "text-yellow-500",
  },
  {
    name: "Métodos flexíveis",
    description: "Suporte a diversos métodos de pagamento, incluindo cartões, PIX, boletos e pagamentos por aproximação.",
    icon: CreditCard,
    color: "bg-purple-100",
    textColor: "text-purple-700",
    iconColor: "text-purple-500",
  },
  {
    name: "APIs robustas",
    description: "APIs bem documentadas e SDKs para todas as linguagens de programação principais do mercado.",
    icon: Code,
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    iconColor: "text-indigo-500",
  },
  {
    name: "Autenticação multi-fator",
    description: "Camadas adicionais de segurança com autenticação multi-fator e biometria para proteção de dados.",
    icon: Lock,
    color: "bg-red-100",
    textColor: "text-red-700",
    iconColor: "text-red-500",
  },
  {
    name: "Armazenamento seguro",
    description: "Armazenamento criptografado de dados sensíveis em conformidade com PCI DSS e LGPD.",
    icon: Database,
    color: "bg-pink-100",
    textColor: "text-pink-700",
    iconColor: "text-pink-500",
  },
  {
    name: "Analytics em tempo real",
    description: "Painéis de controle em tempo real com métricas detalhadas sobre suas transações e clientes.",
    icon: LineChart,
    color: "bg-teal-100",
    textColor: "text-teal-700",
    iconColor: "text-teal-500",
  },
];

export const FeaturesGrid = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stripe-secondary">
            Ferramentas poderosas para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece uma suite completa de soluções para ajudar sua empresa a crescer e prosperar no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} mb-6`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className={`text-lg font-semibold ${feature.textColor}`}>
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
