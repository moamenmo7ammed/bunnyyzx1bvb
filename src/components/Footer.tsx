// No imports needed for icons since we're removing social links

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lightning-fast video hosting platform built specifically for developers.
              Secure, scalable, and enterprise-ready.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">SDKs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://bunny.net/tos/" className="text-muted-foreground hover:text-foreground transition-colors">Terms and Conditions</a></li>
              <li><a href="https://bunny.net/acceptable-use/" className="text-muted-foreground hover:text-foreground transition-colors">Acceptable Use</a></li>
              <li><a href="https://bunny.net/gdpr/" className="text-muted-foreground hover:text-foreground transition-colors">GDPR</a></li>
              <li><a href="https://bunny.net/privacy/" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-center">
          <p className="text-muted-foreground text-sm">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;