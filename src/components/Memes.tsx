import React from 'react';
import { Sparkles } from 'lucide-react';

const Memes = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meme Gallery</h2>
          <p className="text-gray-400">The dankest collection of P Token memes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-card backdrop-blur-sm bg-black/50 p-4 rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-${1550745165 + index}?auto=format&fit=crop&q=80`}
                  alt="Meme"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-300">Meme #{index + 1}</span>
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memes;