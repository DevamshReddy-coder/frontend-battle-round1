import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-black dark:to-gray-800 z-50">
      <video
        src="/videos/loader.mp4"
        autoPlay
        muted
        loop
        className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-xl"
      />
    </div>
  );
};

export default Loader;