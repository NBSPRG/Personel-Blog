import { useState, useRef, useEffect } from 'react';
import { Bold, Italic, List, ListOrdered, Image, Link, Heading1, Heading2, Heading3, Code } from 'lucide-react';

interface RichTextEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const RichTextEditor = ({ initialValue = '', onChange }: RichTextEditorProps) => {
  const [content, setContent] = useState(initialValue);
  const editorRef = useRef<HTMLDivElement>(null);

  // Sync content changes with parent
  useEffect(() => {
    onChange(content);
  }, [content, onChange]);

  // Initialize the editor with the initial value
  useEffect(() => {
    if (editorRef.current && initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue]);

  const handleContentChange = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value);
    handleContentChange();
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const formatBlock = (block: string) => {
    document.execCommand('formatBlock', false, block);
    handleContentChange();
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = `<img src="${event.target?.result}" alt="Uploaded image" class="my-4 max-w-full rounded" />`;
          execCommand('insertHTML', img);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleLinkInsert = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const toolbarButtons = [
    { icon: <Bold size={18} />, action: () => execCommand('bold'), tooltip: 'Bold' },
    { icon: <Italic size={18} />, action: () => execCommand('italic'), tooltip: 'Italic' },
    { icon: <Heading1 size={18} />, action: () => formatBlock('h1'), tooltip: 'Heading 1' },
    { icon: <Heading2 size={18} />, action: () => formatBlock('h2'), tooltip: 'Heading 2' },
    { icon: <Heading3 size={18} />, action: () => formatBlock('h3'), tooltip: 'Heading 3' },
    { icon: <List size={18} />, action: () => execCommand('insertUnorderedList'), tooltip: 'Bullet List' },
    { icon: <ListOrdered size={18} />, action: () => execCommand('insertOrderedList'), tooltip: 'Numbered List' },
    { icon: <Code size={18} />, action: () => execCommand('formatBlock', 'pre'), tooltip: 'Code Block' },
    { icon: <Image size={18} />, action: handleImageUpload, tooltip: 'Insert Image' },
    { icon: <Link size={18} />, action: handleLinkInsert, tooltip: 'Insert Link' },
  ];

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.action}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={button.tooltip}
            type="button"
          >
            {button.icon}
          </button>
        ))}
      </div>
      
      <div
        ref={editorRef}
        contentEditable
        className="prose dark:prose-invert max-w-none p-4 min-h-[300px] focus:outline-none"
        onInput={handleContentChange}
        onBlur={handleContentChange}
      />
    </div>
  );
};

export default RichTextEditor;