import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Settings, 
  Palette, 
  TrendingUp, 
  Search, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['React & TypeScript', 'Mobile Responsive', 'Fast Loading', 'SEO Optimized'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Web Maintenance',
      description: 'Keep your website secure, updated, and performing at its best with our maintenance services.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', '24/7 Support'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience.',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Assets'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      features: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Optimization'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Digital Solutions for 
            <span className="text-primary"> Your Business</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to launch and beyond, we provide end-to-end digital services 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 p-12 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="primary-gradient">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;