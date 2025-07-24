import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutTeam from '@/assets/about-team.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that are ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every project is tailored to meet your unique business goals and requirements.'
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'We maintain the highest standards in every aspect of our work and deliverables.'
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Technologies' },
    { number: '500+', label: 'Projects Delivered' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                About Microtel Technology
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Transforming Ideas into 
                <span className="text-primary"> Digital Reality</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Microtel Technology, we're passionate about helping businesses thrive in the digital age. 
                With over 5 years of experience and a team of skilled professionals, we've successfully 
                delivered 500+ projects across various industries.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensive Digital Solutions</h4>
                  <p className="text-muted-foreground">From web development to digital marketing, we cover all aspects of your digital journey.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Expert Team</h4>
                  <p className="text-muted-foreground">Our skilled developers, designers, and marketers bring years of industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-muted-foreground">500+ successful projects and 98% client satisfaction rate speak for our quality.</p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="primary-gradient">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={aboutTeam} 
                alt="Microtel Technology Team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg border">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;