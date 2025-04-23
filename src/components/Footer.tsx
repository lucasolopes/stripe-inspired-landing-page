import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Produto: ["Pagamentos", "Faturamento", "Conecte", "Preços", "Terminal", "Radar", "Sigma", "Atlas"],
  Empresa: ["Sobre", "Clientes", "Carreiras", "Blog", "Imprensa", "Parceiros", "Sustentabilidade"],
  Suporte: ["Documentação", "API", "Status", "Segurança", "Portal de desenvolvedores", "Comunidade", "Cookies"],
  Legal: ["Termos", "Privacidade", "Cookies", "Licenças", "Compliance", "Regulamentos", "Acessibilidade"],
};

export const Footer = () => {
  return (
    <footer className="bg-stripe-secondary text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-6">
              PayStream
            </h3>
            <p className="text-gray-300 mb-8 max-w-md">
              Infraestrutura de pagamentos para a internet. Milhões de empresas de todos os tamanhos usam nossa plataforma de software e APIs para aceitar pagamentos e gerenciar seus negócios online.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="mt-2 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PayStream, Inc. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap gap-4 md:justify-end">
              <div className="flex items-center">
                <div className="h-5 w-10 rounded bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                <span className="text-sm text-gray-400">Português do Brasil</span>
              </div>
              
              <div className="flex gap-4">
                <Link to="#" className="text-sm text-gray-400 hover:text-white">
                  Portal de desenvolvedores
                </Link>
                <Link to="#" className="text-sm text-gray-400 hover:text-white">
                  Centro de ajuda
                </Link>
                <Link to="#" className="text-sm text-gray-400 hover:text-white">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
