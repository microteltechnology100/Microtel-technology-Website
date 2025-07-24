import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const achievements = [
    { number: '500+', text: 'Projects Completed' },
    { number: '200+', text: 'Happy Clients' },
    { number: '5+', text: 'Years Experience' },
    { number: '24/7', text: 'Support Available' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-glow" />
                Trusted Digital Solutions Partner
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your 
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-white">
                    Digital Presence
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Microtel Technology delivers cutting-edge web development, design, and digital 
                marketing solutions that drive growth for startups and enterprises worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="primary-gradient text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="text-white text-sm">
                <span className="text-primary-glow font-semibold">Trusted by:</span>
              </div>
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <span>Startups</span>
                <span>•</span>
                <span>Fortune 500</span>
                <span>•</span>
                <span>Agencies</span>
                <span>•</span>
                <span>Enterprises</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                    {item.number}
                  </div>
                  <div className="text-white text-sm font-medium">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-center">
                <p className="text-white mb-4">Ready to get started?</p>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;