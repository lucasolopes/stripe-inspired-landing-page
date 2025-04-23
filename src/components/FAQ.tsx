
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Como integrar a API de pagamentos ao meu site?",
    answer: "Nossa API é fácil de integrar, com SDKs disponíveis para JavaScript, Python, Ruby, PHP e outras linguagens. A documentação completa está disponível no Portal do Desenvolvedor, e nossa equipe de suporte está pronta para ajudar durante todo o processo de implementação."
  },
  {
    question: "Quais métodos de pagamento são suportados?",
    answer: "Aceitamos cartões de crédito e débito (Visa, Mastercard, American Express, Elo), métodos locais como PIX, boleto bancário, e soluções digitais como Apple Pay, Google Pay e Samsung Pay. Também processamos pagamentos internacionais em mais de 135 moedas."
  },
  {
    question: "Quanto custam os serviços de processamento de pagamento?",
    answer: "Nossa estrutura de preços é transparente, com uma taxa de 2.9% + R$0,30 por transação para cartões nacionais. Oferecemos descontos por volume e planos personalizados para empresas com alto volume de transações. Entre em contato com nossa equipe de vendas para uma cotação específica para seu negócio."
  },
  {
    question: "Como são tratadas as questões de segurança e conformidade?",
    answer: "Temos certificação PCI DSS nível 1 e utilizamos criptografia avançada para proteger todos os dados sensíveis. Nossa solução antifraude utiliza IA para detectar comportamentos suspeitos e reduzir chargebacks. Estamos em conformidade com a LGPD e outras regulamentações internacionais de proteção de dados."
  },
  {
    question: "Quanto tempo leva para os pagamentos serem depositados na minha conta?",
    answer: "Os pagamentos aprovados são normalmente liquidados em D+1 (um dia útil) para contas padrão. Oferecemos também opções de liquidação no mesmo dia para contas qualificadas, mediante taxas adicionais. O prazo exato pode variar de acordo com o método de pagamento e o seu banco."
  },
  {
    question: "Como funciona a proteção contra fraudes?",
    answer: "Nossa plataforma utiliza algoritmos avançados de machine learning que analisam mais de 100 variáveis em tempo real para cada transação. O sistema identifica padrões suspeitos e pode bloquear ou encaminhar transações para revisão manual, reduzindo significativamente as perdas com fraudes sem impactar a experiência dos clientes legítimos."
  },
  {
    question: "É possível personalizar a página de checkout?",
    answer: "Sim, oferecemos opções completas de personalização para a página de checkout. Você pode adicionar seu logotipo, personalizar cores, campos e fluxos, além de hospedar o checkout dentro do seu próprio site para uma experiência perfeita para seus clientes."
  },
];

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<string | null>("item-0");
  
  const handleExpand = (value: string) => {
    setExpandedIndex(value === expandedIndex ? null : value);
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-stripe-secondary">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Respostas para as dúvidas mais comuns sobre nossa plataforma de pagamentos
            </p>
          </motion.div>
          
          <Accordion type="single" collapsible value={expandedIndex || undefined} className="w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <AccordionItem value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger 
                    onClick={() => handleExpand(`item-${i}`)}
                    className="py-5 font-medium text-left text-stripe-secondary hover:text-stripe-primary"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
