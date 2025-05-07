import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all h2 and h3 elements in the article
    const article = document.querySelector('article');
    if (!article) return;

    const elements = Array.from(article.querySelectorAll('h2, h3, h4'));
    
    const items: TOCItem[] = elements.map(element => {
      // Make sure each heading has an id
      if (!element.id) {
        element.id = element.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      }
      
      return {
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.charAt(1))
      };
    });
    
    setHeadings(items);
    
    // Set up IntersectionObserver to track which heading is currently visible
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px'
      }
    );
    
    elements.forEach(element => observer.observe(element));
    
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-24">
      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Table of Contents</h4>
      
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map(heading => (
            <li 
              key={heading.id}
              className={`${heading.level === 3 ? 'ml-4' : ''} ${heading.level === 4 ? 'ml-8' : ''}`}
            >
              <a
                href={`#${heading.id}`}
                className={`block py-1 border-l-2 pl-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  activeId === heading.id
                    ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium'
                    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;