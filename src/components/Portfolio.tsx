import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: 'seo', label: 'SEO & Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: '+150% sales increase',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management system with appointment booking and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      results: '10K+ downloads',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard with real-time data visualization and reporting tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      results: '40% efficiency boost',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity package including logo, colors, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      technologies: ['Adobe Creative Suite', 'Figma', 'Branding'],
      results: '200% brand recognition',
      link: '#',
      github: null
    },
    {
      id: 5,
      title: 'SEO Optimization Campaign',
      category: 'seo',
      description: 'Comprehensive SEO strategy that improved organic traffic and search rankings.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['SEO Tools', 'Google Analytics', 'Content Strategy'],
      results: '+300% organic traffic',
      link: '#',
      github: null
    },
    {
      id: 6,
      title: 'Restaurant Management System',
      category: 'web',
      description: 'Complete restaurant management solution with POS integration and inventory tracking.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Express.js', 'MySQL', 'Payment Gateway'],
      results: '50% order processing speed',
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Portfolio
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Showcasing Our 
            <span className="text-primary"> Best Work</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses 
            achieve their digital transformation goals and drive measurable results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "primary-gradient" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {filters.find(f => f.id === project.category)?.label.split(' ')[0]}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    Results: {project.results}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    {project.github && (
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Interested in Working With Us?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="primary-gradient">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;