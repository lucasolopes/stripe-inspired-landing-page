
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="relative overflow-hidden bg-stripe-secondary">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-stripe-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-stripe-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            variants={childVariants}
          >
            Infraestrutura de pagamentos para a internet
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
            variants={childVariants}
          >
            Milhões de empresas de todos os tamanhos usam nossa plataforma de software e APIs para aceitar pagamentos, fazer transferências e gerenciar seus negócios online.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={childVariants}
          >
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 w-full max-w-lg">
              {["Rápido", "Seguro", "Escalável", "Intuitivo", "Global", "Suporte 24/7"].map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-stripe-primary" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={childVariants}
          >
            <Button size="lg" className="bg-stripe-primary hover:bg-stripe-primary/90 group">
              Comece agora 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="link" className="text-white hover:text-stripe-primary">
              Fale com vendas
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-16 relative"
            variants={childVariants}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 bg-gray-800 p-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded flex-1 text-center">
                  https://api.suapagamentos.com
                </div>
              </div>
              <div className="p-4 text-left text-sm font-mono text-gray-300">
                <p><span className="text-blue-400">const</span> <span className="text-green-400">stripe</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">Stripe</span>.<span className="text-purple-400">create</span>({"{"}
                <br />&nbsp;&nbsp;<span className="text-orange-400">apiKey:</span> <span className="text-green-400">"sk_test_..."</span>
                <br />{"}"})<span className="text-gray-500">;</span></p>
                <p className="mt-2"><span className="text-blue-400">const</span> <span className="text-green-400">pagamento</span> = <span className="text-blue-400">await</span> <span className="text-green-400">stripe</span>.<span className="text-purple-400">pagamentos</span>.<span className="text-purple-400">create</span>({"{"}
                <br />&nbsp;&nbsp;<span className="text-orange-400">valor:</span> <span className="text-purple-400">2000</span><span className="text-gray-500">,</span>
                <br />&nbsp;&nbsp;<span className="text-orange-400">moeda:</span> <span className="text-green-400">"brl"</span><span className="text-gray-500">,</span>
                <br />&nbsp;&nbsp;<span className="text-orange-400">descrição:</span> <span className="text-green-400">"Exemplo de pagamento"</span>
                <br />{"}"})<span className="text-gray-500">;</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
