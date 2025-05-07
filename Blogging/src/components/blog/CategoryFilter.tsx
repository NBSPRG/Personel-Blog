import { useState } from 'react';
import { Tag, Check } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategories, onSelectCategory }: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedCategories = isExpanded 
    ? categories 
    : categories.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <Tag className="mr-2 text-blue-500" size={18} />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Categories</h3>
      </div>
      
      <div className="space-y-2">
        {displayedCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-md transition-colors ${
              selectedCategories.includes(category)
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`}
          >
            <span>{category}</span>
            {selectedCategories.includes(category) && (
              <Check size={16} className="text-blue-600 dark:text-blue-400" />
            )}
          </button>
        ))}
      </div>
      
      {categories.length > 5 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;