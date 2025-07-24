import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Settings, 
  Palette, 
  TrendingUp, 
  Search, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';

const ServicesPage = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance for your business needs.',
      features: [
        'Custom Web Development',
        'Responsive Design',
        'Performance Optimization',
        'CMS Integration',
        'E-commerce Solutions',
        'API Development'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
      pricing: 'Starting from $2,999',
      duration: '4-8 weeks',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Web Maintenance',
      description: 'Keep your website secure, updated, and performing at its best with our comprehensive maintenance services.',
      features: [
        'Security Updates',
        'Performance Monitoring',
        'Content Updates',
        'Backup Management',
        'Technical Support',
        'Analytics Reports'
      ],
      technologies: ['Monitoring Tools', 'Security Plugins', 'Analytics', 'CDN'],
      pricing: 'Starting from $299/month',
      duration: 'Ongoing',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience across all platforms.',
      features: [
        'Brand Identity Design',
        'UI/UX Design',
        'Print Design',
        'Digital Assets',
        'Marketing Materials',
        'Social Media Graphics'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva Pro'],
      pricing: 'Starting from $599',
      duration: '1-3 weeks',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
      features: [
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'PPC Advertising',
        'Analytics & Reporting',
        'Marketing Automation'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot'],
      pricing: 'Starting from $1,499/month',
      duration: '3-6 months',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our proven SEO strategies.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building',
        'Local SEO',
        'SEO Audits'
      ],
      technologies: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console'],
      pricing: 'Starting from $999/month',
      duration: '6-12 months',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'App Store Optimization',
        'Push Notifications',
        'Analytics Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      pricing: 'Starting from $9,999',
      duration: '12-20 weeks',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals, requirements, and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates beautiful designs and develops robust solutions using modern technologies.'
    },
    {
      step: '03',
      title: 'Testing & Launch',
      description: 'Thorough testing ensures quality, followed by a smooth launch and deployment.'
    },
    {
      step: '04',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure your project continues to succeed.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesBg} 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-primary-glow">Digital Services</span>
            </h1>
            <p className="text-xl leading-relaxed">
              Comprehensive digital solutions designed to transform your business 
              and accelerate your growth in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="primary-gradient">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing & Duration */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{service.pricing}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full primary-gradient">
                      Get Quote
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Work Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="primary-gradient">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 border-t border-border">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;