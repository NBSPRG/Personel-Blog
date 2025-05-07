import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, X, Image } from 'lucide-react';
import RichTextEditor from '../components/editor/RichTextEditor';
import { mockPosts } from '../data/mockData';

const EditorPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [allCategories] = useState(['Technology', 'Design', 'Programming', 'Productivity']);

  useEffect(() => {
    // Set page title
    document.title = id ? 'Edit Post - Your Blog' : 'New Post - Your Blog';
    
    // If editing, load post data
    if (id) {
      const post = mockPosts.find(p => p.id === id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setExcerpt(post.excerpt);
        setCoverImage(post.coverImage);
        setCategories(post.categories);
        setTags(post.tags);
      } else {
        navigate('/editor', { replace: true });
      }
    }
  }, [id, navigate]);

  const handleSave = async () => {
    // Validate form
    if (!title || !content || !excerpt || !coverImage) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSaving(true);
    
    // In a real app, this would save to a database or API
    // For now, we'll just simulate a save
    setTimeout(() => {
      setIsSaving(false);
      navigate('/blog');
    }, 1000);
  };

  const handleCategoryToggle = (category: string) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim()).filter(Boolean);
    setTags(tagsArray);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {id ? 'Edit Post' : 'Create New Post'}
          </h1>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={16} className="mr-2" /> Cancel
            </button>
            
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} className="mr-2" /> Save Post
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Title Input */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Post Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
                required
              />
            </div>
            
            {/* Content Editor */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Post Content <span className="text-red-500">*</span>
              </label>
              <RichTextEditor initialValue={content} onChange={setContent} />
            </div>
            
            {/* Excerpt Input */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Excerpt <span className="text-red-500">*</span>
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of your post"
                rows={3}
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white resize-none"
                required
              ></textarea>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                This will be displayed in post cards and search results.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cover Image <span className="text-red-500">*</span>
              </label>
              
              {coverImage ? (
                <div className="mb-3 relative rounded-lg overflow-hidden">
                  <img 
                    src={coverImage} 
                    alt="Cover" 
                    className="w-full h-40 object-cover"
                  />
                  <button
                    onClick={() => setCoverImage('')}
                    className="absolute top-2 right-2 p-1 bg-gray-900/60 rounded-full text-white hover:bg-gray-900/80"
                    aria-label="Remove image"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center mb-3">
                  <Image size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Drag and drop an image, or paste a URL
                  </p>
                </div>
              )}
              
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>
            
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Categories
              </label>
              <div className="space-y-2">
                {allCategories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={categories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                value={tags.join(', ')}
                onChange={handleTagsChange}
                placeholder="tag1, tag2, tag3"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Separate tags with commas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;