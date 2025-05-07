import { Book } from 'lucide-react';

const Logo = () => {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg rotate-3 opacity-70"></div>
      <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-lg"></div>
      <Book className="relative z-10 text-blue-600 dark:text-blue-400" size={20} />
    </div>
  );
};

export default Logo;