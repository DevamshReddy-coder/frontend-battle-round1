import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white font-sans scroll-smooth">
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <main className="pt-24 space-y-24 px-6 md:px-12 max-w-7xl mx-auto">
            <section id="about" className="text-center flex flex-col items-center gap-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400">Welcome to the Battle</h2>
              <p className="text-lg max-w-2xl">A creative frontend challenge — combine precision, design, and innovation!</p>
              <video src="/videos/homepage.mp4" autoPlay loop muted className="rounded-2xl shadow-lg w-full md:w-2/3" />
            </section>

            <section id="features" className="text-center space-y-8">
              <h2 className="text-3xl font-bold">Features Spotlight</h2>
              <video src="/videos/features-services.mp4" controls className="rounded-lg shadow-md w-full md:w-2/3 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {["Fast", "Responsive", "Dark Mode"].map((f) => (
                  <div key={f} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{f}</h3>
                    <p className="text-sm mt-2"></p>
                  </div>
                ))}
              </div>
            </section>

            <section id="gallery" className="text-center">
              <h2 className="text-3xl font-bold mb-6">Visual Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['cards', 'graph', 'stats'].map((img) => (
                  <img
                    key={img}
                    src={`/images/${img}.png`}
                    alt={img}
                    className="rounded-xl shadow-md hover:scale-105 transition-transform"
                  />
                ))}
              </div>
              <video src="/videos/showcase work.mp4" controls className="mt-6 rounded-xl shadow w-full md:w-2/3 mx-auto" />
            </section>

            <section id="contact" className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Connect With Us</h2>
              <video src="/videos/testimonials.mp4" controls className="rounded-lg shadow w-full md:w-2/3 mx-auto" />
              <p className="max-w-xl mx-auto">Let us know how we can assist you. Submit your ideas, feedback, or inquiries!</p>
              <form className="max-w-xl mx-auto space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
                />
                <textarea
                  placeholder="Your message"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
                  Send Message
                </button>
              </form>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
