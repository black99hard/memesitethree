import React from 'react';
import { Joystick } from 'lucide-react';

const RetroHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#ff00ff] via-[#000066] to-[#000000] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-20" />
      
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="animate-float">
          <Joystick className="w-24 h-24 mx-auto text-[#00ff00] animate-pulse" />
        </div>
        
        <h1 className="text-8xl font-bold text-[#00ff00] mb-8 retro-text animate-glow">
          P TOKEN
        </h1>
        
        <div className="marquee-container">
          <div className="marquee">
            <span className="text-[#ff00ff] text-2xl px-4">★ TO THE MOON ★</span>
            <span className="text-[#00ff00] text-2xl px-4">★ HODL ★</span>
            <span className="text-[#ff00ff] text-2xl px-4">★ WEN LAMBO ★</span>
          </div>
        </div>

        <div className="mt-12">
          <button className="retro-button px-8 py-4 text-xl">
            ENTER THE TOKENVERSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetroHero;