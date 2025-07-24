import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, User, Clock, Search, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const categories = [
    { name: 'Web Development', count: 24, color: 'bg-blue-100 text-blue-800' },
    { name: 'Digital Marketing', count: 18, color: 'bg-green-100 text-green-800' },
    { name: 'Design Trends', count: 15, color: 'bg-purple-100 text-purple-800' },
    { name: 'SEO Tips', count: 12, color: 'bg-orange-100 text-orange-800' },
    { name: 'Mobile Apps', count: 8, color: 'bg-pink-100 text-pink-800' },
    { name: 'Industry News', count: 6, color: 'bg-indigo-100 text-indigo-800' }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the web development landscape, from AI integration to serverless architectures and beyond.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    author: 'Alex Thompson',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Web Development',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Essential SEO Strategies That Actually Work in 2024',
      excerpt: 'Learn proven SEO techniques that can boost your website\'s visibility and drive organic traffic.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop',
      author: 'Sarah Chen',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'SEO Tips'
    },
    {
      id: 3,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first design and how to implement it effectively.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      author: 'Michael Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Design Trends'
    },
    {
      id: 4,
      title: 'Digital Marketing Automation: Tools and Best Practices',
      excerpt: 'Discover how to leverage automation tools to streamline your marketing efforts and improve ROI.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      author: 'Emily Johnson',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Digital Marketing'
    },
    {
      id: 5,
      title: 'React vs Vue vs Angular: Choosing the Right Framework in 2024',
      excerpt: 'A comprehensive comparison of popular JavaScript frameworks to help you make the right choice.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop',
      author: 'Alex Thompson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'How color choices impact user behavior and conversion rates on your website.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      author: 'Michael Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      date: 'March 3, 2024',
      readTime: '4 min read',
      category: 'Design Trends'
    },
    {
      id: 7,
      title: 'Building High-Performance Mobile Apps with React Native',
      excerpt: 'Best practices for developing fast, scalable mobile applications using React Native.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      author: 'Sarah Chen',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Mobile Apps'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <BookOpen className="w-4 h-4 mr-2" />
              Tech Insights & Tips
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest trends, tips, and insights in web development, 
              digital marketing, and technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-3 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge className="bg-primary text-white w-fit">
                      Featured
                    </Badge>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={featuredPost.authorImage} 
                          alt={featuredPost.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="primary-gradient w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={post.authorImage} 
                            alt={post.author}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-xs text-muted-foreground">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="default" size="sm" className="primary-gradient">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Link 
                        to="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {category.name}
                      </Link>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Popular Posts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3 group cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input type="email" placeholder="Your email address" />
                    <Button className="w-full primary-gradient">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;