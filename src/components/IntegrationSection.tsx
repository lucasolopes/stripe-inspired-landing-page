
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const integrationTabs = [
  {
    value: "javascript",
    label: "JavaScript",
    code: `// Instale o pacote
// npm install @pagamento/js

import { Pagamento } from '@pagamento/js';

// Inicialize com sua chave API
const pagamento = new Pagamento('pk_test_1234');

// Crie um token de pagamento
const { token } = await pagamento.createToken({
  card: {
    number: '4242 4242 4242 4242',
    exp_month: 12,
    exp_year: 2025,
    cvc: '123',
  }
});

// Use o token para fazer a cobrança
const response = await pagamento.charges.create({
  amount: 2000, // R$20,00
  currency: 'brl',
  source: token,
  description: 'Compra em: Minha Loja',
});

console.log(response.status); // "succeeded"`,
  },
  {
    value: "python",
    label: "Python",
    code: `# Instale o pacote
# pip install pagamento

import pagamento

# Configure sua chave API
pagamento.api_key = "sk_test_1234"

# Crie uma cobrança
charge = pagamento.Charge.create(
    amount=2000,  # R$20,00
    currency="brl",
    source="tok_visa",
    description="Cobrança de exemplo",
    customer="cus_12345",
)

print(charge.status)  # "succeeded"
print(charge.id)      # "ch_1234"`,
  },
  {
    value: "php",
    label: "PHP",
    code: `// Instale via Composer
// composer require pagamento/pagamento-php

require 'vendor/autoload.php';

// Configure a chave API
\\Pagamento\\Pagamento::setApiKey('sk_test_1234');

// Crie uma cobrança
$charge = \\Pagamento\\Charge::create([
  'amount' => 2000, // R$20,00
  'currency' => 'brl',
  'source' => 'tok_visa', 
  'description' => 'Cobrança de exemplo',
]);

echo $charge->status; // "succeeded"
echo $charge->id;     // "ch_1234"`,
  },
  {
    value: "go",
    label: "Go",
    code: `// Instale o pacote
// go get github.com/pagamento/pagamento-go

package main

import (
	"fmt"
	"github.com/pagamento/pagamento-go"
)

func main() {
	pagamento.Key = "sk_test_1234"

	params := &pagamento.ChargeParams{
		Amount:      pagamento.Int64(2000), // R$20,00
		Currency:    pagamento.String("brl"),
		Description: pagamento.String("Cobrança de exemplo"),
	}
	params.SetSource("tok_visa")

	ch, err := pagamento.Charges.New(params)
	if err != nil {
		// Trate o erro
	}

	fmt.Println(ch.Status) // "succeeded"
}`,
  },
];

export const IntegrationSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-stripe-secondary">
              Integração simples em qualquer linguagem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Nossa API foi projetada para desenvolvedores, com SDKs para todas as principais linguagens de programação
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                {integrationTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-stripe-primary data-[state=active]:text-white">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {integrationTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-400">exemplo.{tab.value === "javascript" ? "js" : tab.value}</div>
                    </div>
                    <pre className="bg-gray-900 p-4 text-sm overflow-x-auto text-gray-300">
                      <code>{tab.code}</code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button className="bg-gray-100 hover:bg-gray-200 text-stripe-secondary">
              Ver documentação completa
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
