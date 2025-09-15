import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-neon-blue mr-2" />
            <span className="text-sm text-muted-foreground">Lightning-fast video delivery for developers</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight">
            Video Hosting
            <br />
            Built for Developers
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Secure, scalable video hosting with enterprise-grade protection. 
            Deploy globally in seconds with our developer-first API.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="group">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Shield className="w-5 h-5 text-neon-blue" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Zap className="w-5 h-5 text-neon-purple" />
              <span>Global CDN</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <Play className="w-5 h-5 text-neon-pink" />
              <span>API-First Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;