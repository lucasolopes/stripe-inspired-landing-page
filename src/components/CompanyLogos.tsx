
import { Card } from "@/components/ui/card";

export const CompanyLogos = () => {
  return (
    <div className="bg-stripe-gray py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-stripe-secondary mb-12">
          Empresas líderes confiam em nossa plataforma
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="flex items-center justify-center p-8 bg-white/50 backdrop-blur-sm">
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
