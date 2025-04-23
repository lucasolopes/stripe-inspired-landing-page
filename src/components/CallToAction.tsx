
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const features = [
    "Ativação instantânea",
    "Sem taxas ocultas",
    "Suporte 24/7",
    "Testes gratuitos",
    "Sem contrato de fidelidade",
    "Cancelamento a qualquer momento",
  ];

  return (
    <div className="bg-stripe-gray py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-stripe-primary/80 to-stripe-blue/80 p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-stripe-secondary mb-6">
                    Comece agora mesmo
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-stripe-primary hover:bg-stripe-primary/90 text-white py-6 h-auto">
                      Criar conta gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      Nenhum cartão de crédito necessário
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tight text-stripe-secondary">
                Transforme a forma como você processa pagamentos
              </h2>
              <p className="text-lg text-gray-600">
                Junte-se a milhares de empresas que já aumentaram suas vendas e reduziram custos com nossa plataforma de pagamentos completa e intuitiva.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-blue-100 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stripe-secondary">Integração rápida</h4>
                    <p className="text-gray-600">Comece a aceitar pagamentos em minutos, não semanas</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stripe-secondary">Escalável</h4>
                    <p className="text-gray-600">Do primeiro cliente a milhões de transações por dia</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-purple-100 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stripe-secondary">Segurança completa</h4>
                    <p className="text-gray-600">Proteção total de dados e prevenção de fraudes</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
