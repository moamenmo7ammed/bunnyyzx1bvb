import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [period, setPeriod] = useState<'monthly' | 'annual' | 'semi-annual'>('monthly');

  const plans = {
    monthly: [
      {
        name: "Starter",
        price: 100,
        period: "month",
        description: "Perfect for small projects and prototypes",
        features: [
          "250GB bandwidth",
          "250GB SSD storage",
          "Global CDN",
          "Basic analytics",
          "API access",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: 150,
        period: "month",
        isPopular: true,
        description: "Ideal for growing applications and teams",
        features: [
          "550GB bandwidth",
          "550GB SSD storage",
          "Advanced CDN",
          "Real-time analytics",
          "Priority support",
          "Custom domains",
          "Webhook integrations",
          "Team collaboration"
        ]
      },
      {
        name: "Enterprise",
        price: 260,
        period: "month",
        originalPrice: 400,
        description: "For large-scale applications and organizations",
        features: [
          "1200GB bandwidth",
          "1200GB SSD storage",
          "Enterprise CDN",
          "Advanced security",
          "Custom integrations",
          "SLA guarantee",
          "Dedicated account manager"
        ]
      }
    ],
    annual: [
      {
        name: "Starter",
        price: 1000,
        period: "year",
        description: "Perfect for small projects and prototypes",
        features: [
          "250GB bandwidth",
          "250GB SSD storage",
          "Global CDN",
          "Basic analytics",
          "API access",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: 1500,
        period: "year",
        isPopular: true,
        description: "Ideal for growing applications and teams",
        features: [
          "550GB bandwidth",
          "550GB SSD storage",
          "Advanced CDN",
          "Real-time analytics",
          "Priority support",
          "Custom domains",
          "Webhook integrations",
          "Team collaboration"
        ]
      },
      {
        name: "Enterprise",
        price: 2600,
        period: "year",
        originalPrice: 4000,
        description: "For large-scale applications and organizations",
        features: [
          "1200GB bandwidth",
          "1200GB SSD storage",
          "Enterprise CDN",
          "Advanced security",
          "Custom integrations",
          "SLA guarantee",
          "Dedicated account manager"
        ]
      }
    ],
    'semi-annual': [
      {
        name: "Starter",
        price: 500,
        period: "6 months",
        description: "Perfect for small projects and prototypes",
        features: [
          "250GB bandwidth",
          "250GB SSD storage",
          "Global CDN",
          "Basic analytics",
          "API access",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: 750,
        period: "6 months",
        isPopular: true,
        description: "Ideal for growing applications and teams",
        features: [
          "550GB bandwidth",
          "550GB SSD storage",
          "Advanced CDN",
          "Real-time analytics",
          "Priority support",
          "Custom domains",
          "Webhook integrations",
          "Team collaboration"
        ]
      },
      {
        name: "Enterprise",
        price: 1300,
        period: "6 months",
        originalPrice: 2000,
        description: "For large-scale applications and organizations",
        features: [
          "1200GB bandwidth",
          "1200GB SSD storage",
          "Enterprise CDN",
          "Advanced security",
          "Custom integrations",
          "SLA guarantee",
          "Dedicated account manager"
        ]
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that scales with your needs. All plans include our core features 
            with no hidden fees.
          </p>
        </div>

        <PricingToggle period={period} onPeriodChange={setPeriod} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans[period].map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="text-primary hover:text-primary/80 font-medium">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;