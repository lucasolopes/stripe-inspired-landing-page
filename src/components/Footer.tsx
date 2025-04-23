
import { Link } from "react-router-dom";

const footerLinks = {
  Produto: ["Pagamentos", "Faturamento", "Conecte", "Preços"],
  Empresa: ["Sobre", "Clientes", "Carreiras", "Blog"],
  Suporte: ["Documentação", "API", "Status", "Segurança"],
  Legal: ["Termos", "Privacidade", "Cookies", "Licenças"],
};

export const Footer = () => {
  return (
    <footer className="bg-stripe-secondary text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
