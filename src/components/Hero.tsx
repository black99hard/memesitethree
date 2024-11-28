import React from 'react';
import { Rocket, Copy, ExternalLink } from 'lucide-react';

const Hero = () => {
  const tokenAddress = "0x1234...5678"; // Replace with actual token address

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="glass-card backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <Rocket className="w-16 h-16 text-purple-400 animate-bounce" />
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              P Token
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              "To the moon and beyond! 🚀 Where memes meet DeFi in the most epic way possible!"
            </p>
            
            <div className="flex items-center space-x-4 mt-8">
              <button onClick={copyAddress} className="flex items-center px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 rounded-full border border-purple-500/50 transition-all">
                <Copy className="w-5 h-5 mr-2" />
                {tokenAddress}
              </button>
              <a href="#" className="flex items-center px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full border border-blue-500/50 transition-all">
                <ExternalLink className="w-5 h-5 mr-2" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;