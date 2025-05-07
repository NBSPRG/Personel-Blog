import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt: 'Learn how to set up a new project with React and TypeScript, and understand the benefits of using TypeScript with React.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>React and TypeScript are a powerful combination for building robust web applications. TypeScript adds static typing to JavaScript, which can help catch errors early and improve the development experience.</p>
      
      <h3 id="why-typescript">Why TypeScript?</h3>
      <p>TypeScript provides several benefits when working with React:</p>
      <ul>
        <li>Catch errors during development instead of runtime</li>
        <li>Better IDE support with autocompletion and inline documentation</li>
        <li>More maintainable code, especially for larger projects</li>
        <li>Easier refactoring</li>
      </ul>
      
      <h2 id="setting-up">Setting Up a New Project</h2>
      <p>The easiest way to start a new React project with TypeScript is to use Create React App with the TypeScript template:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>This will create a new project with React and TypeScript already configured.</p>
      
      <h2 id="basic-usage">Basic TypeScript Usage in React</h2>
      
      <h3 id="typing-props">Typing Component Props</h3>
      <p>One of the most common uses of TypeScript in React is to type component props:</p>
      
      <pre><code>interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};</code></pre>
      
      <h3 id="typing-state">Typing Component State</h3>
      <p>You can also type the state in functional components:</p>
      
      <pre><code>interface User {
  id: string;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // ...
};</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>TypeScript adds valuable type safety to React applications. While there is a learning curve, the benefits in terms of code quality and developer experience are well worth it.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['Programming', 'React', 'TypeScript'],
    tags: ['react', 'typescript', 'javascript', 'web development'],
    publishedAt: '2023-04-15T12:00:00Z',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering CSS Grid Layout',
    slug: 'mastering-css-grid-layout',
    excerpt: 'A comprehensive guide to CSS Grid Layout, covering everything from basic concepts to advanced techniques for creating complex layouts.',
    content: `
      <h2 id="introduction">Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system that revolutionizes how we create web layouts. Unlike Flexbox, which is primarily one-dimensional, Grid allows precise control over both rows and columns.</p>
      
      <h2 id="basic-concepts">Basic Concepts</h2>
      <p>To create a grid container, you set <code>display: grid</code> on an element:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}</code></pre>
      
      <p>This creates a 3-column grid where the middle column is twice as wide as the others, with 2 rows that auto-size to their content, and a 20px gap between all cells.</p>
      
      <h3 id="grid-lines">Grid Lines and Grid Areas</h3>
      <p>Grid lines are the dividing lines that make up the grid structure. You can place items precisely using these lines:</p>
      
      <pre><code>.item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-row: 2 / 3; /* Start at line 2, end at line 3 */
}</code></pre>
      
      <h2 id="advanced-techniques">Advanced Techniques</h2>
      
      <h3 id="auto-placement">Auto-placement</h3>
      <p>Grid's auto-placement algorithm can intelligently place items when you don't specify their exact position:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}</code></pre>
      
      <p>This creates as many 200px columns as can fit in the container, with each taking an equal fraction of leftover space.</p>
      
      <h3 id="grid-areas">Named Grid Areas</h3>
      <p>You can create named areas for a more visual way of defining your layout:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>CSS Grid is a powerful layout tool that gives web designers unprecedented control over page layout. While it has a learning curve, the flexibility it provides is well worth the investment of time to master it.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['Design', 'CSS', 'Web Development'],
    tags: ['css', 'grid', 'layout', 'web design'],
    publishedAt: '2023-05-22T10:30:00Z',
    featured: true
  },
  {
    id: '3',
    title: 'Improving Your Productivity with VSCode',
    slug: 'improving-productivity-vscode',
    excerpt: 'Discover the essential extensions, shortcuts, and configurations that will supercharge your development workflow in Visual Studio Code.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Visual Studio Code (VSCode) has become one of the most popular code editors among developers. Its rich extension ecosystem and high customizability make it a powerful tool for writing code efficiently.</p>
      
      <h2 id="essential-extensions">Essential Extensions</h2>
      <p>Here are some must-have extensions for every developer:</p>
      
      <h3 id="general-extensions">General Extensions</h3>
      <ul>
        <li><strong>Prettier</strong> - Code formatter that enforces a consistent style</li>
        <li><strong>ESLint</strong> - Linting utility for JavaScript and TypeScript</li>
        <li><strong>GitLens</strong> - Supercharges Git capabilities within VSCode</li>
        <li><strong>Path Intellisense</strong> - Autocompletes filenames</li>
      </ul>
      
      <h3 id="language-specific">Language-Specific Extensions</h3>
      <ul>
        <li><strong>JavaScript (ES6) code snippets</strong> - Snippets for JavaScript in ES6 syntax</li>
        <li><strong>Python</strong> - Rich support for the Python language</li>
        <li><strong>Tailwind CSS IntelliSense</strong> - Intelligent Tailwind CSS class name completion</li>
      </ul>
      
      <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
      <p>Mastering keyboard shortcuts is essential for productivity. Here are some of the most useful ones:</p>
      
      <h3 id="editing-shortcuts">Editing Shortcuts</h3>
      <ul>
        <li><code>Ctrl+D</code> (or <code>Cmd+D</code> on Mac) - Select the next occurrence of the current selection</li>
        <li><code>Alt+Up/Down</code> (or <code>Option+Up/Down</code> on Mac) - Move line up/down</li>
        <li><code>Ctrl+/</code> (or <code>Cmd+/</code> on Mac) - Toggle line comment</li>
      </ul>
      
      <h3 id="navigation-shortcuts">Navigation Shortcuts</h3>
      <ul>
        <li><code>Ctrl+P</code> (or <code>Cmd+P</code> on Mac) - Quick file navigation</li>
        <li><code>Ctrl+Shift+F</code> (or <code>Cmd+Shift+F</code> on Mac) - Search across all files</li>
        <li><code>Ctrl+G</code> (or <code>Cmd+G</code> on Mac) - Go to a specific line</li>
      </ul>
      
      <h2 id="configuration">Configuration Customization</h2>
      <p>Tailoring VSCode to your preferences can significantly improve your workflow:</p>
      
      <pre><code>{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "workbench.startupEditor": "none",
  "explorer.confirmDelete": false
}</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Taking the time to customize VSCode and learn its features will pay off in increased productivity. Start with the extensions and shortcuts mentioned here, and gradually build your perfect development environment.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['Productivity', 'Tools', 'Programming'],
    tags: ['vscode', 'editor', 'productivity', 'tools'],
    publishedAt: '2023-03-08T15:45:00Z',
    featured: false
  },
  {
    id: '4',
    title: 'Introduction to Web Accessibility',
    slug: 'introduction-web-accessibility',
    excerpt: 'Learn the fundamentals of web accessibility and why it matters. This guide covers WCAG guidelines, testing tools, and practical tips for making your websites accessible to everyone.',
    content: `
      <h2 id="what-is-accessibility">What is Web Accessibility?</h2>
      <p>Web accessibility (often abbreviated as a11y) refers to the practice of designing and developing websites that can be used by everyone, including people with disabilities. This includes visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
      
      <h2 id="why-important">Why Accessibility Matters</h2>
      <p>Implementing accessibility is important for several reasons:</p>
      <ul>
        <li><strong>Inclusivity</strong> - Everyone deserves equal access to information and functionality on the web</li>
        <li><strong>Legal compliance</strong> - Many countries have laws requiring websites to be accessible</li>
        <li><strong>Better UX for everyone</strong> - Accessibility improvements often benefit all users</li>
        <li><strong>SEO benefits</strong> - Many accessibility practices also improve search engine optimization</li>
      </ul>
      
      <h2 id="wcag-guidelines">WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) are the most widely accepted standards for web accessibility. They are organized around four principles:</p>
      
      <h3 id="perceivable">1. Perceivable</h3>
      <p>Information and user interface components must be presentable to users in ways they can perceive.</p>
      <ul>
        <li>Provide text alternatives for non-text content (e.g., alt text for images)</li>
        <li>Provide captions and transcripts for audio and video</li>
        <li>Create content that can be presented in different ways without losing information</li>
        <li>Make it easier for users to see and hear content</li>
      </ul>
      
      <h3 id="operable">2. Operable</h3>
      <p>User interface components and navigation must be operable.</p>
      <ul>
        <li>Make all functionality available from a keyboard</li>
        <li>Give users enough time to read and use content</li>
        <li>Do not use content that causes seizures or physical reactions</li>
        <li>Help users navigate and find content</li>
      </ul>
      
      <h3 id="understandable">3. Understandable</h3>
      <p>Information and the operation of user interface must be understandable.</p>
      <ul>
        <li>Make text readable and understandable</li>
        <li>Make content appear and operate in predictable ways</li>
        <li>Help users avoid and correct mistakes</li>
      </ul>
      
      <h3 id="robust">4. Robust</h3>
      <p>Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.</p>
      <ul>
        <li>Maximize compatibility with current and future user tools</li>
        <li>Use valid, semantic HTML</li>
      </ul>
      
      <h2 id="practical-tips">Practical Implementation Tips</h2>
      <h3 id="semantic-html">Use Semantic HTML</h3>
      <p>Semantic HTML provides meaning to your content, which helps assistive technologies understand your page:</p>
      
      <pre><code><!-- Instead of this -->
<div class="header">My Site</div>
<div class="navigation">
  <div class="nav-item">Home</div>
  <div class="nav-item">About</div>
</div>

<!-- Use this -->
<header>My Site</header>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav></code></pre>
      
      <h2 id="testing-tools">Testing and Evaluation Tools</h2>
      <p>Several tools can help you evaluate the accessibility of your website:</p>
      <ul>
        <li><strong>WAVE</strong> - Web Accessibility Evaluation Tool by WebAIM</li>
        <li><strong>Axe</strong> - Accessibility testing engine for websites and applications</li>
        <li><strong>Lighthouse</strong> - Automated tool for improving web page quality, including accessibility</li>
        <li><strong>Screen readers</strong> - NVDA (Windows), VoiceOver (Mac), JAWS (Windows, commercial)</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Web accessibility is not just a nice-to-have feature but an essential aspect of web development. By following accessibility guidelines, you create a better experience for all users and ensure that your website can be used by the widest possible audience.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['Web Development', 'Accessibility', 'Best Practices'],
    tags: ['accessibility', 'a11y', 'wcag', 'inclusive design'],
    publishedAt: '2023-06-10T09:15:00Z',
    featured: true
  },
  {
    id: '5',
    title: 'Understanding Modern JavaScript: ES6 and Beyond',
    slug: 'understanding-modern-javascript-es6-beyond',
    excerpt: 'Explore the essential features introduced in ECMAScript 2015 (ES6) and later versions that have transformed how we write JavaScript.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>JavaScript has evolved significantly since the introduction of ECMAScript 2015 (ES6). This article explores the key features that have made modern JavaScript more powerful, expressive, and maintainable.</p>
      
      <h2 id="let-const">let and const</h2>
      <p>Before ES6, variables were declared using <code>var</code>, which had function scope. ES6 introduced <code>let</code> and <code>const</code> with block scope:</p>
      
      <pre><code>// Using var (function scoped)
function oldWay() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

// Using let (block scoped)
function newWay() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

// Using const (block scoped, cannot be reassigned)
const PI = 3.14159;
PI = 3; // Error: Assignment to constant variable</code></pre>
      
      <h2 id="arrow-functions">Arrow Functions</h2>
      <p>Arrow functions provide a more concise syntax and lexically bind the <code>this</code> value:</p>
      
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With 'this' binding
function Person() {
  this.age = 0;
  
  // Traditional
  setInterval(function() {
    this.age++; // 'this' refers to the global object
  }, 1000);
  
  // Arrow function
  setInterval(() => {
    this.age++; // 'this' refers to the Person instance
  }, 1000);
}</code></pre>
      
      <h2 id="template-literals">Template Literals</h2>
      <p>Template literals allow for embedded expressions and multi-line strings:</p>
      
      <pre><code>const name = 'World';
const message = \`Hello \${name}!\`;

// Multi-line strings
const multiLine = \`
  This is a multi-line
  string that doesn't need
  concatenation or escape characters.
\`;</code></pre>
      
      <h2 id="destructuring">Destructuring Assignment</h2>
      <p>Destructuring allows you to extract values from arrays and objects into distinct variables:</p>
      
      <pre><code>// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30

// With renamed variables
const { name: personName } = person;
console.log(personName); // 'John'</code></pre>
      
      <h2 id="spread-operator">Spread Operator</h2>
      <p>The spread operator expands an iterable into individual elements:</p>
      
      <pre><code>// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Cloning an array
const original = [1, 2, 3];
const copy = [...original];

// Spreading objects (ES2018)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }</code></pre>
      
      <h2 id="promises-async-await">Promises and Async/Await</h2>
      <p>Promises provide a cleaner way to handle asynchronous operations, and async/await makes them even more readable:</p>
      
      <pre><code>// Using Promises
function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Using async/await (ES2017)
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>
      
      <h2 id="modules">ES Modules</h2>
      <p>ES6 introduced a standardized module system:</p>
      
      <pre><code>// math.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply, { PI, add } from './math.js';
console.log(PI); // 3.14159
console.log(add(1, 2)); // 3
console.log(multiply(2, 3)); // 6</code></pre>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Modern JavaScript offers a wealth of features that make code more readable, maintainable, and powerful. Understanding these features is essential for any JavaScript developer working on modern web applications.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['JavaScript', 'Programming', 'Web Development'],
    tags: ['javascript', 'es6', 'ecmascript', 'web development'],
    publishedAt: '2023-02-18T14:20:00Z',
    featured: false
  },
  {
    id: '6',
    title: 'Building a Personal Productivity System',
    slug: 'building-personal-productivity-system',
    excerpt: 'Design a personalized productivity system that works for your specific needs and helps you achieve your goals consistently.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Productivity isn't about doing more things—it's about doing the right things efficiently. In this article, we'll explore how to build a personalized productivity system that aligns with your work style, goals, and values.</p>
      
      <h2 id="foundation">The Foundation: Understanding Yourself</h2>
      <p>Before adopting any productivity system, it's crucial to understand your personal work patterns:</p>
      
      <h3 id="energy-mapping">Energy Mapping</h3>
      <p>Track your energy levels throughout the day to identify when you're most alert and focused:</p>
      <ul>
        <li>Are you a morning person or night owl?</li>
        <li>When do you experience energy dips?</li>
        <li>How long can you focus before needing a break?</li>
      </ul>
      
      <p>Once you understand your energy patterns, schedule your most important and challenging tasks during your peak energy periods.</p>
      
      <h3 id="work-styles">Work Styles and Preferences</h3>
      <p>Consider these aspects of your work style:</p>
      <ul>
        <li><strong>Focus duration</strong>: Do you work better in short bursts (like Pomodoro) or extended deep work sessions?</li>
        <li><strong>Environment</strong>: Do you need absolute quiet, background noise, or music?</li>
        <li><strong>Collaboration</strong>: Do you thrive working alone or with others?</li>
        <li><strong>Planning style</strong>: Are you detail-oriented or big-picture focused?</li>
      </ul>
      
      <h2 id="core-components">Core Components of a Productivity System</h2>
      
      <h3 id="task-management">1. Task Management</h3>
      <p>Your task management system should be:</p>
      <ul>
        <li><strong>Easy to maintain</strong> - If it's too complex, you won't stick with it</li>
        <li><strong>Accessible</strong> - Available when and where you need it</li>
        <li><strong>Flexible</strong> - Able to adapt to changing priorities</li>
      </ul>
      
      <p>Popular task management systems include:</p>
      <ul>
        <li><strong>Getting Things Done (GTD)</strong>: Focuses on capturing tasks and organizing them by context</li>
        <li><strong>Bullet Journal</strong>: An analog system combining to-do lists, calendars, and notes</li>
        <li><strong>Kanban</strong>: Visual system organizing tasks in columns (To Do, In Progress, Done)</li>
      </ul>
      
      <h3 id="calendar-system">2. Calendar System</h3>
      <p>Your calendar should:</p>
      <ul>
        <li>Show when you're committed to be somewhere (meetings, appointments)</li>
        <li>Block time for focused work on important tasks (time blocking)</li>
        <li>Include buffer time between activities</li>
        <li>Reflect your energy patterns (schedule demanding tasks during peak energy)</li>
      </ul>
      
      <h3 id="note-system">3. Note-Taking System</h3>
      <p>An effective note system helps you capture and organize information. Consider:</p>
      <ul>
        <li><strong>Digital vs. analog</strong>: Choose based on your preferences and needs</li>
        <li><strong>Organization method</strong>: Tags, folders, or a combination</li>
        <li><strong>Review process</strong>: Schedule regular reviews to process notes</li>
      </ul>
      
      <h3 id="review-system">4. Review System</h3>
      <p>Regular reviews keep your productivity system relevant and effective:</p>
      <ul>
        <li><strong>Daily review</strong>: 5-10 minutes planning tomorrow's priorities</li>
        <li><strong>Weekly review</strong>: 30-60 minutes reviewing progress and planning the week ahead</li>
        <li><strong>Monthly/quarterly review</strong>: Evaluate progress toward goals and adjust as needed</li>
      </ul>
      
      <h2 id="implementation">Implementation: Starting Small</h2>
      <p>Don't try to overhaul your entire productivity system at once. Start with these steps:</p>
      
      <ol>
        <li><strong>Identify one pain point</strong> in your current workflow</li>
        <li><strong>Choose one component</strong> to implement first (task management, calendar, etc.)</li>
        <li><strong>Start simple</strong> and add complexity only as needed</li>
        <li><strong>Expect adjustment</strong> - Be prepared to modify your system as you learn what works</li>
        <li><strong>Build habits gradually</strong> - Focus on consistency over perfection</li>
      </ol>
      
      <h2 id="tools">Digital Tools vs. Analog Methods</h2>
      <p>Both approaches have merits:</p>
      
      <h3 id="digital">Digital Tools</h3>
      <ul>
        <li><strong>Pros</strong>: Searchable, syncs across devices, automation capabilities</li>
        <li><strong>Cons</strong>: Potential distractions, software changes, dependency on technology</li>
        <li><strong>Popular options</strong>: Notion, Todoist, Trello, Evernote, Google Calendar</li>
      </ul>
      
      <h3 id="analog">Analog Methods</h3>
      <ul>
        <li><strong>Pros</strong>: Tactile experience, fewer distractions, better memory retention</li>
        <li><strong>Cons</strong>: Not searchable, not backed up, limited space</li>
        <li><strong>Popular options</strong>: Bullet Journal, planner systems, index cards</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The most effective productivity system is one that you'll actually use. Build your system around your natural tendencies and needs, start small, and refine over time. Remember that productivity is personal—what works for someone else might not work for you.</p>
      
      <p>The ultimate goal isn't to have a perfect system, but to create a reliable framework that helps you focus on what matters most.</p>
    `,
    coverImage: 'https://images.pexels.com/photos/1510659/pexels-photo-1510659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['Productivity', 'Self Improvement', 'Organization'],
    tags: ['productivity', 'time management', 'organization', 'habits'],
    publishedAt: '2023-01-05T08:30:00Z',
    featured: false
  }
];