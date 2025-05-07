import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockPosts } from '../../data/mockData';

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch posts from an API
    // For now, we're using mock data
    const sortedPosts = [...mockPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ).slice(0, 4);
    
    setTimeout(() => {
      setRecentPosts(sortedPosts);
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
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-blue-200 animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Articles</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Stay updated with my latest thoughts and ideas
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={item}
            >
              <Link 
                to={`/blog/${post.slug}`}
                className="md:w-1/3 overflow-hidden"
              >
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 1).map((category, idx) => (
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    5 min read
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;