
import { motion } from "framer-motion";
import { CreditCard, Globe, Users, BarChart3 } from "lucide-react";

const stats = [
  {
    title: "Transações processadas",
    value: "2.5B+",
    icon: CreditCard,
    color: "text-blue-500",
    description: "Bilhões de transações seguras"
  },
  {
    title: "Países suportados",
    value: "150+",
    icon: Globe,
    color: "text-green-500",
    description: "Pagamentos globais em segundos"
  },
  {
    title: "Clientes satisfeitos",
    value: "500k+",
    icon: Users,
    color: "text-purple-500",
    description: "Empresas de todos os tamanhos"
  },
  {
    title: "Taxa de aprovação",
    value: "99.9%",
    icon: BarChart3,
    color: "text-orange-500",
    description: "Máxima eficiência em pagamentos"
  },
];

export const Statistics = () => {
  return (
    <div className="py-24 bg-stripe-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Resultados comprovados
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossa plataforma de pagamentos é construída para escalar junto com seu negócio
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                  <h3 className="mt-2 text-4xl font-bold tracking-tight text-white">{stat.value}</h3>
                  <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
                </div>
                <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
