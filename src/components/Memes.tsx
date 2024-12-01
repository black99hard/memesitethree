import React from 'react';
import { Sparkles } from 'lucide-react';

const Memes = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Morty Memes</h2>
          <p className="text-gray-400">The most schwifty collection of $MORTY memes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-yellow-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-card backdrop-blur-sm bg-black/50 p-4 rounded-lg">
                <div className="flex flex-col">
                  <img 
                    src={`/morty-meme-${index + 1}.png`}
                    alt="Morty Meme"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">Portal #{index + 1}</span>
                      <a href="https://x.com/Mortysolanacto" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">@Mortysolanacto</a>
                    </div>
                    <Sparkles className="w-5 h-5 text-green-400" />
                  </div>
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