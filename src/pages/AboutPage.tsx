import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Target, Heart, Shield, Zap } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in tech industry'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack expert specializing in modern web technologies'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer with expertise in UI/UX and branding'
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Digital marketing strategist driving growth and engagement'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Every decision we make is guided by what\'s best for our clients and their success.'
    },
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'We maintain the highest standards in code quality, design, and project delivery.'
    },
    {
      icon: Zap,
      title: 'Innovation & Growth',
      description: 'We stay ahead of trends and continuously evolve to deliver cutting-edge solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">Microtel Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of digital experts dedicated to helping businesses 
              transform and thrive in the digital landscape through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative digital solutions that drive 
                  growth, enhance user experiences, and create lasting value. We believe in making 
                  technology accessible and impactful for everyone.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading digital transformation partner, recognized for our excellence, 
                  innovation, and commitment to client success. We envision a future where every 
                  business can leverage technology to achieve their full potential.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={aboutTeam} 
                alt="Our Team" 
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6 p-8 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and passion for digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Microtel?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
                <p className="text-muted-foreground text-sm">500+ successful projects with measurable results and satisfied clients.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg">
              <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Award-Winning Team</h4>
                <p className="text-muted-foreground text-sm">Recognized experts in web development, design, and digital marketing.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg">
              <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Dedicated Support</h4>
                <p className="text-muted-foreground text-sm">24/7 support and ongoing maintenance to ensure your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;