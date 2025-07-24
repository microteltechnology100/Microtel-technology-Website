import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, Filter, Star, TrendingUp } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 24 },
    { id: 'web', label: 'Web Development', count: 12 },
    { id: 'mobile', label: 'Mobile Apps', count: 6 },
    { id: 'design', label: 'Design', count: 8 },
    { id: 'seo', label: 'SEO & Marketing', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart E-Commerce Platform',
      category: 'web',
      description: 'Complete e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      results: {
        metric: 'Sales Increase',
        value: '+150%',
        timeline: '6 months'
      },
      client: 'TechStart Inc.',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'HealthCare Mobile App',
      category: 'mobile',
      description: 'Patient management system with telemedicine features, appointment booking, and secure messaging.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'WebRTC'],
      results: {
        metric: 'Downloads',
        value: '50K+',
        timeline: '12 months'
      },
      client: 'MediCare Solutions',
      year: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics SaaS Dashboard',
      category: 'web',
      description: 'Real-time analytics platform with custom reporting, data visualization, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js', 'Docker'],
      results: {
        metric: 'User Efficiency',
        value: '+40%',
        timeline: '3 months'
      },
      client: 'DataViz Pro',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Brand Identity Redesign',
      category: 'design',
      description: 'Complete brand identity overhaul including logo design, color palette, typography, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Guidelines'],
      results: {
        metric: 'Brand Recognition',
        value: '+200%',
        timeline: '4 months'
      },
      client: 'Creative Studio Co.',
      year: '2023',
      link: '#',
      github: null,
      featured: true
    },
    {
      id: 5,
      title: 'SEO Campaign Success',
      category: 'seo',
      description: 'Comprehensive SEO strategy implementation with technical optimization and content marketing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['SEO Tools', 'Google Analytics', 'Content Strategy', 'Link Building'],
      results: {
        metric: 'Organic Traffic',
        value: '+300%',
        timeline: '8 months'
      },
      client: 'GrowthTech LLC',
      year: '2023',
      link: '#',
      github: null,
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant POS System',
      category: 'web',
      description: 'Complete restaurant management solution with POS integration, inventory tracking, and customer management.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Express.js', 'MySQL', 'Payment Gateway'],
      results: {
        metric: 'Order Processing',
        value: '+50%',
        timeline: '2 months'
      },
      client: 'Restaurant Chain',
      year: '2023',
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of successful projects that have helped businesses 
              achieve their digital transformation goals and drive measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Best Work
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {filters.find(f => f.id === project.category)?.label.split(' ')[0]}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{project.results.value}</div>
                      <div className="text-xs text-muted-foreground">{project.results.metric}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{project.results.timeline}</div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-medium text-foreground">{project.client}</p>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      {project.github && (
                        <Button variant="ghost" size="sm">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">All Projects</h2>
            <p className="text-muted-foreground">Filter by category to explore specific types of work</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${activeFilter === filter.id ? "primary-gradient" : ""} relative`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs bg-white/20 text-current border-0"
                >
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {filters.find(f => f.id === project.category)?.label.split(' ')[0]}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 p-3 bg-primary/5 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {project.results.value} {project.results.metric}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-xs text-muted-foreground">
                      {project.client} • {project.year}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      {project.github && (
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="primary-gradient">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;