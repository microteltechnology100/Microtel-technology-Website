import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, CheckCircle, ArrowRight, Gift, Bell, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive our latest updates soon.",
    });

    // Reset after 3 seconds for demo
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Industry Insights',
      description: 'Latest trends and best practices in web development and digital marketing'
    },
    {
      icon: Gift,
      title: 'Exclusive Resources',
      description: 'Free templates, guides, and tools available only to subscribers'
    },
    {
      icon: Bell,
      title: 'Early Access',
      description: 'Be the first to know about our new services and special offers'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      <Mail className="w-4 h-4 mr-2" />
                      Stay Updated
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Subscribe to Our 
                      <span className="text-primary"> Newsletter</span>
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Get the latest insights, tips, and exclusive resources delivered 
                      straight to your inbox. Join 5,000+ professionals who trust our content.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <benefit.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center space-x-6 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5K+</div>
                      <div className="text-xs text-muted-foreground">Subscribers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Weekly</div>
                      <div className="text-xs text-muted-foreground">Updates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Free</div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Subscription Form */}
                <div className="lg:pl-8">
                  {!isSubscribed ? (
                    <div className="space-y-6">
                      <div className="p-8 bg-card rounded-xl border border-border shadow-lg">
                        <form onSubmit={handleSubscribe} className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="h-12 text-base"
                              required
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full h-12 text-base primary-gradient font-semibold"
                          >
                            Subscribe Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </form>
                        
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                          No spam, unsubscribe at any time. We respect your privacy.
                        </p>
                      </div>

                      {/* Social Proof */}
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">Trusted by professionals at:</p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                          <span className="px-3 py-1 bg-muted/50 rounded-full">Google</span>
                          <span className="px-3 py-1 bg-muted/50 rounded-full">Microsoft</span>
                          <span className="px-3 py-1 bg-muted/50 rounded-full">Amazon</span>
                          <span className="px-3 py-1 bg-muted/50 rounded-full">Meta</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-6 py-12">
                      <div className="w-24 h-24 primary-gradient rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">Welcome Aboard!</h3>
                        <p className="text-muted-foreground">
                          Thank you for subscribing. Check your email for a confirmation message.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;