import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/blog/SearchBar';
import CategoryFilter from '../components/blog/CategoryFilter';
import PostGrid from '../components/blog/PostGrid';
import { Post } from '../types';
import { mockPosts } from '../data/mockData';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set page title
    document.title = 'Your Blog - Articles';
    
    // Get URL params
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    
    // In a real app, fetch posts from API
    // For now, we're using mock data
    setTimeout(() => {
      setPosts(mockPosts);
      
      // Extract unique categories
      const allCategories = Array.from(
        new Set(mockPosts.flatMap(post => post.categories))
      ).sort();
      setCategories(allCategories);
      
      setIsLoading(false);
    }, 500);
  }, [searchParams]);

  useEffect(() => {
    // Filter posts based on selected categories and search query
    let result = [...posts];
    
    if (selectedCategories.length > 0) {
      result = result.filter(post => 
        post.categories.some(category => selectedCategories.includes(category))
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set('category', selectedCategories[0]);
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    setSearchParams(params, { replace: true });
    
  }, [posts, selectedCategories, searchQuery, setSearchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Blog Articles
          </h1>
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <CategoryFilter 
              categories={categories}
              selectedCategories={selectedCategories}
              onSelectCategory={handleSelectCategory}
            />
          </div>
          
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isLoading ? 'Loading articles...' : 
                  `${filteredPosts.length} Article${filteredPosts.length !== 1 ? 's' : ''}`
                }
              </h2>
              
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            <PostGrid posts={filteredPosts} loading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;