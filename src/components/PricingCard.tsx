import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: string[];
  description: string;
  originalPrice?: number;
}

const PricingCard = ({ name, price, period, isPopular, features, description, originalPrice }: PricingCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
      isPopular 
        ? 'border-primary bg-gradient-to-b from-card to-secondary/50 shadow-lg shadow-primary/20' 
        : 'border-border bg-card hover:border-primary/50'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-1 rounded-full flex items-center">
            <Star className="w-4 h-4 text-white mr-1" />
            <span className="text-sm font-medium text-white">Most Popular</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          {originalPrice && (
            <div className="flex flex-col items-center mb-2">
              <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                SPECIAL OFFER!
              </div>
            </div>
          )}
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-foreground">${price}</span>
            <span className="text-muted-foreground ml-2">/{period}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-neon-blue mr-3 flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isPopular ? "hero" : "outline"} 
        className="w-full"
        size="lg"
        onClick={() => {
          const params = new URLSearchParams({
            plan: name,
            price: price.toString(),
            period: period
          });
          navigate(`/checkout?${params.toString()}`);
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
