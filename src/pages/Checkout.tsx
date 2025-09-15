import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, AlertCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const [isEgypt, setIsEgypt] = useState<boolean | null>(null);
  const [showPaymentError, setShowPaymentError] = useState(false);
  
  const plan = searchParams.get('plan');
  const price = searchParams.get('price');
  const period = searchParams.get('period');

  useEffect(() => {
    // Simulate country detection
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIsEgypt(data.country_code === 'EG');
      } catch {
        // Fallback: assume not Egypt for demo
        setIsEgypt(false);
      }
    };
    
    detectCountry();
  }, []);

  const handlePayment = (method: string) => {
    // Simulate payment processing
    setTimeout(() => {
      setShowPaymentError(true);
    }, 2000);
  };

  if (isEgypt === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Detecting your location...</p>
        </div>
      </div>
    );
  }

  if (!isEgypt) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <p className="text-muted-foreground mb-6">
              Currently, payments are not available in your country. Payment gateways for your country will be provided soon. Please be patient.
            </p>
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase</p>
        </div>

        {/* Order Summary */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">{plan} Plan</span>
            <span className="font-semibold">${price}/{period}</span>
          </div>
          <div className="border-t border-border pt-2 mt-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span className="text-primary">${price}</span>
            </div>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
          
          {showPaymentError && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-destructive mr-2" />
                <span className="text-destructive font-medium">Payment Error</span>
              </div>
              <p className="text-destructive/80 mt-1">Payment processing failed. Please try again.</p>
            </div>
          )}

          <div className="space-y-4">
            {/* Credit Card */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <CreditCard className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Credit Card</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
              </div>
              
              <Button 
                className="w-full mt-4" 
                onClick={() => handlePayment('card')}
                disabled={showPaymentError}
              >
                Pay with Credit Card
              </Button>
            </div>

            {/* Apple Pay */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Smartphone className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Apple Pay</span>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handlePayment('apple')}
                disabled={showPaymentError}
              >
                <span className="mr-2">🍎</span>
                Pay with Apple Pay
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;