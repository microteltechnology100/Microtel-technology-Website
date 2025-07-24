import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
      content: 'Microtel Technology transformed our online presence completely. Their team delivered a stunning website that increased our conversion rate by 200%. The attention to detail and professionalism was outstanding.',
      rating: 5,
      projectType: 'Website Development'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Growth Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'The SEO campaign they ran for us was exceptional. We saw a 300% increase in organic traffic within 6 months. Their strategic approach and transparent reporting made all the difference.',
      rating: 5,
      projectType: 'SEO Optimization'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Working with Microtel was a game-changer for our business. They created a beautiful brand identity and developed our e-commerce platform. Sales increased by 150% in the first quarter!',
      rating: 5,
      projectType: 'Brand Design & E-commerce'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      content: 'Their mobile app development skills are top-notch. The app they built for us has over 50K downloads and excellent user ratings. The code quality and user experience are exceptional.',
      rating: 5,
      projectType: 'Mobile App Development'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Operations Manager',
      company: 'RetailPro',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      content: 'The ongoing maintenance and support from Microtel has been invaluable. Our website runs smoothly, and they\'re always quick to implement updates and fix any issues.',
      rating: 5,
      projectType: 'Web Maintenance'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Client Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients 
            <span className="text-primary"> Say About Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Microtel Technology.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 text-center space-y-6 border-2 hover:border-primary/20 transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Project Type Badge */}
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      {testimonial.projectType}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background border-2 hover:border-primary"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background border-2 hover:border-primary"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;