import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import { Post } from '../../types';

interface RelatedPostsProps {
  currentPostId: string;
  posts: Post[];
}

const RelatedPosts = ({ currentPostId, posts }: RelatedPostsProps) => {
  // Filter out the current post and limit to 3 related posts
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Link 
          to="/blog" 
          className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Browse all articles
        </Link>
      </div>
    </section>
  );
};

export default RelatedPosts;