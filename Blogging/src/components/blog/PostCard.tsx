import { Link } from 'react-router-dom';
import { Post } from '../../types';
import { Calendar, Clock } from 'lucide-react';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact';
}

const PostCard = ({ post, variant = 'default' }: PostCardProps) => {
  if (variant === 'compact') {
    return (
      <article className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <Link to={`/blog/${post.slug}`} className="shrink-0">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-16 h-16 object-cover rounded-md"
          />
        </Link>
        
        <div>
          <Link to={`/blog/${post.slug}`}>
            <h3 className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>
          
          <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short', 
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </article>
    );
  }
  
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
          
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;