
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A adoção dessa plataforma de pagamentos transformou completamente a nossa operação online. A taxa de conversão aumentou em 45% e o tempo dedicado a resolver problemas de pagamento diminuiu drasticamente.",
    author: "Maria Silva",
    position: "CEO, TechStore",
    company: "techstore",
  },
  {
    quote: "Integramos a API em menos de um dia e começamos a processar pagamentos internacionais imediatamente. O suporte técnico está sempre disponível para resolver qualquer dúvida.",
    author: "João Oliveira",
    position: "CTO, GlobalCommerce",
    company: "globalcommerce",
  },
  {
    quote: "A segurança e confiabilidade da plataforma nos deu tranquilidade para expandir nosso negócio. As taxas competitivas e relatórios detalhados são um diferencial importante.",
    author: "Ana Mendes",
    position: "Diretora Financeira, FashionBR",
    company: "fashionbr",
  },
  {
    quote: "A facilidade de implementação e a robustez da solução anti-fraude nos permitiu focar no crescimento do negócio sem nos preocupar com chargebacks ou problemas técnicos.",
    author: "Carlos Ferreira",
    position: "Fundador, AppMaster",
    company: "appmaster",
  },
];

export const Testimonials = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-stripe-gray to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-stripe-secondary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empresas de todos os tamanhos confiam em nossa plataforma para processar milhões de transações diariamente
          </motion.p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="min-h-[320px] border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-stripe-primary/40 mb-6" />
                    <p className="text-gray-700 flex-grow italic">"{testimonial.quote}"</p>
                    <div className="mt-8 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-stripe-secondary font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-stripe-secondary">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mx-2 bg-white border border-gray-200" />
            <CarouselNext className="relative static mx-2 bg-white border border-gray-200" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
