import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@microtel.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '123 Tech Street, Digital City, DC 12345',
      description: 'Visit us anytime'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM EST',
      description: 'Weekend support available'
    }
  ];

  const services = [
    'Website Development',
    'Web Maintenance',
    'Graphics Design',
    'Digital Marketing',
    'SEO Optimization',
    'Mobile App Development',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Start Your <span className="text-primary">Digital Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business? We'd love to hear about your project 
              and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full primary-gradient text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Quick Response Guarantee</h3>
                    <p className="text-muted-foreground text-sm">
                      We respond to all inquiries within 2 business hours during office hours.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-orange-50 border-orange-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300">
                      Emergency Support
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    For urgent technical issues with existing projects, call our emergency line:
                  </p>
                  <p className="font-semibold text-orange-800">+1 (555) 999-HELP</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Visit Our Office</h2>
            <p className="text-muted-foreground">
              Located in the heart of Digital City, we're always happy to meet in person.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 text-center">
            <div className="space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Microtel Technology HQ</h3>
                <p className="text-muted-foreground">123 Tech Street, Digital City, DC 12345</p>
              </div>
              <Button variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;