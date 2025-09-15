import { Shield, Zap, Globe, Code, BarChart3, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced DRM protection, token authentication, and geo-blocking to keep your content secure."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Global CDN with edge caching ensures your videos load instantly worldwide."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "180+ edge locations across 6 continents for optimal performance everywhere."
    },
    {
      icon: Code,
      title: "Developer First",
      description: "RESTful APIs, SDKs for all major languages, and comprehensive documentation."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Detailed insights into viewer behavior, engagement metrics, and performance data."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert technical support when you need it, with guaranteed response times."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Modern{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale video applications 
            with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;