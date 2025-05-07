import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import profileImg from '../../public/chandan.jpg';


const AboutPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About - Your Blog';
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
            Software Engineer. Designer. Storyteller of Code & Ideas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="sticky top-24">
                <div className="aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-xl mb-6">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <a 
                    href="https://github.com/NBSPRG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/kumarchandan20041" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:chandanues@gmail.com" 
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I'm Chandan Kumar
              </h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                I'm a passionate writer and software developer, recently graduated and stepping into the tech industry. This blog is my space to share thoughts, experiences, and insights on technology, design, and productivity.
                </p>
                
                <p>
                My blogging journey began during college, where I discovered a love for expressing ideas and documenting my learning. Now, I continue to write as I grow professionally and explore the world of software development.

                </p>
                
                <h3>My Expertise</h3>
                
                <div>
                I have a strong foundation in core computer science fundamentals, including data structures, algorithms, OOP, OS, DBMS, and networking. With a solid understanding of software engineering principles and scalable application design, I'm also diving into system programming, exploring OS internals and low-level performance. My interest extends to DevOps, where I’m learning about CI/CD, containerization, and cloud infrastructure. I enjoy technical writing, especially simplifying complex systems for broader understanding.
              </div>
                
                <h3>Why I Started This Blog</h3>
                
                <p>
                  I started this blog as a way to share my knowledge and experiences with the broader community. I believe in the power of open knowledge sharing and hope that my articles can help others in their own journeys.
                </p>
                
                <p>
                  My goal is to create content that is not only informative but also enjoyable to read. I strive to explain complex concepts in simple terms, making them accessible to readers of all backgrounds.
                </p>
                
                <h3>Get in Touch</h3>
                
                <p>
                  I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me through any of the social media channels listed on this page, or send me an email at <a href="mailto:chandanues@gmail.com">chandanues@gmail.com</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;