import React, { useState, useEffect } from 'react';
import { Terminal, Skull, Rocket, Star, Zap } from 'lucide-react';
import ContractAddress from './ContractAddress';

const MORTY_PHRASES = [
  "THE MOST SCHWIFTY TOKEN IN CRYPTO 🌀",
  "WUBBA LUBBA DUB DUB 🚀",
  "WHERE RICK & MORTY MEET DEFI 💫",
  "CERTIFIED DIMENSION C-137 APPROVED ✨",
  "PICKLE RICK'S FAVORITE TOKEN 🥒",
  "BUILT DIFFERENT, PORTAL JUMPING HIGHER 🌀",
];

const HackerHero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [signalStability, setSignalStability] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % MORTY_PHRASES.length);
    }, 3000);

    // Simulate signal stabilization
    const stabilizeSignal = setInterval(() => {
      setSignalStability(prev => {
        if (prev >= 100) {
          clearInterval(stabilizeSignal);
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(stabilizeSignal);
    };
  }, []);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* TV Static Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/90 tv-static animate-tv-static">
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-green-500 text-2xl font-mono mb-4 animate-glitch">
                Stabilizing Portal Connection...
              </div>
              <div className="w-64 h-2 bg-black/50 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-200"
                  style={{ width: `${signalStability}%` }}
                />
              </div>
              <div className="text-green-400 mt-2 font-mono">
                Signal Strength: {signalStability}%
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Animation */}
      <div className={`w-full transition-all duration-1000 
        ${isLoading ? 'opacity-0' : 'opacity-100'}
        ${isLoading ? 'scale-95' : 'scale-100'}
        ${isLoading ? 'blur-xl' : 'blur-0'}`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-scroll"></div>
        
        {/* Matrix-style falling characters */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="matrix-rain">🐸 $ ◈ × ○ ● ◐ ◑ ◒ ◓ ◔ ◕</div>
        </div>

        <div className="terminal-card w-full max-w-4xl p-6 border-2 border-green-500 bg-black/90 
                        backdrop-blur-md relative z-10 hover:shadow-lg hover:shadow-green-500/20 
                        transition-all duration-300 animate-tv-on">
          
          {/* Terminal Header */}
          <div className="flex items-center mb-4 border-b border-green-500 pb-2">
            <Terminal className="w-6 h-6 text-green-500 mr-2 animate-pulse" />
            <span className="text-green-500 font-mono">[MORTY@DIMENSION-C137] ~ # </span>
            <span className="animate-blink ml-2">▊</span>
            
            {/* Terminal Controls */}
            <div className="ml-auto flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="space-y-6 font-mono relative">
            {/* Initialization Text */}
            <p className="text-green-500 typewriter">
              &gt; INITIALIZING $MORTY PROTOCOL_V2.0...
            </p>
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4 my-8">
              🌀
              <div 
                className={`text-6xl md:text-7xl text-green-500 font-bold tracking-wider
                           ${isGlitching ? 'animate-glitch' : 'animate-pulse'}`}
              >
                $MORTY
              </div>
            </div>

            {/* Animated Tagline */}
            <div className="h-8"> {/* Fixed height to prevent layout shift */}
              <p className="text-green-300 text-xl fade-in-out">
                &gt; {MORTY_PHRASES[currentPhrase]}
              </p>
            </div>

            {/* Contract Address with Enhanced Styling */}
            <div className="my-8">
              <ContractAddress />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                className="px-6 py-3 bg-black border-2 border-green-500 text-green-500 
                          hover:bg-green-500 hover:text-black transition-all duration-300 
                          rounded-md flex items-center space-x-2 group"
                onClick={() => window.open('https://raydium.io/swap', '_blank')}
                title="Buy on Raydium"
              >
                <Rocket className="w-5 h-5 animate-bounce" />
                <span>BUY $MORTY</span>
              </button>
              
              <button 
                className="px-6 py-3 bg-black border-2 border-green-500 text-green-500 
                          hover:bg-green-500 hover:text-black transition-all duration-300 
                          rounded-md flex items-center space-x-2 group"
                onClick={() => window.open('https://t.me/Mortysolanacto', '_blank')}
                title="Join our Telegram Community"
              >
                <Zap className="w-5 h-5 animate-pulse" />
                <span>JOIN THE COUNCIL</span>
              </button>
              
              <button 
                className="px-6 py-3 bg-black border-2 border-green-500 text-green-500 
                          hover:bg-green-500 hover:text-black transition-all duration-300 
                          rounded-md flex items-center space-x-2 group"
                onClick={() => window.open('https://x.com/Mortysolanacto', '_blank')}
                title="Follow us on X (Twitter)"
              >
                <Star className="w-5 h-5 animate-spin-slow" />
                <span>FOLLOW THE ADVENTURE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerHero;