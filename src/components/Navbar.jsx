import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-40 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide">Frontend Battle</h1>
        <div className="space-x-5 flex items-center">
          {['about', 'features', 'gallery', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

