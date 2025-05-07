import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import RelatedPosts from '../components/blog/RelatedPosts';
import TableOfContents from '../components/blog/TableOfContents';
import { Post } from '../types';
import { mockPosts } from '../data/mockData';

const SinglePostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Set up scroll tracking for reading progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const readingProgress = scrollTop / docHeight;
      setReadingProgress(readingProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // In a real app, fetch post from API
    // For now, we're using mock data
    setIsLoading(true);
    
    setTimeout(() => {
      const foundPost = mockPosts.find(p => p.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
        document.title = `${foundPost.title} - Your Blog`;
      } else {
        navigate('/404', { replace: true });
      }
      
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-blue-200 animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${readingProgress * 100}%` }}
      ></div>
      
      <div className="pt-24 min-h-screen">
        {/* Hero Section */}
        <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl px-6 py-8 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4"
            >
              <ArrowLeft size={16} className="mr-1" /> Back
            </button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-8">
              <span className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </span>
              <span className="mx-3">•</span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                5 min read
              </span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Share article"
              >
                <Share2 size={16} className="mr-1" /> Share
              </button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <article className="prose dark:prose-invert lg:prose-lg max-w-none bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              
              <RelatedPosts currentPostId={post.id} posts={mockPosts} />
            </div>
            
            <div className="lg:w-1/3">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;