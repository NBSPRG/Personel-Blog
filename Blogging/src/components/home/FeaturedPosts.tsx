import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockPosts } from '../../data/mockData';

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch posts from an API
    // For now, we're using mock data
    const posts = mockPosts.filter(post => post.featured);
    setTimeout(() => {
      setFeaturedPosts(posts);
      setIsLoading(false);
    }, 500);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-blue-200 animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Posts</h2>
        <Link 
          to="/blog" 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-colors"
        >
          View all <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredPosts.map((post) => (
          <motion.div 
            key={post.id} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={item}
          >
            <Link to={`/blog/${post.slug}`}>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.slice(0, 2).map((category, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short', 
                    day: 'numeric'
                  })}
                </span>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedPosts;