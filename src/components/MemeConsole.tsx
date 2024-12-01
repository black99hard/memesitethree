import React, { useState, useEffect } from 'react';
import { Terminal, Maximize2, X, Minus } from 'lucide-react';

const MemeConsole = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const memes = [
    { 
      text: "DOWNLOADING MORE $CTOAD...", 
      progress: "███████░░░ 70%",
      art: "🐸"
    },
    { 
      text: "HACKING THE TOADVERSE...", 
      progress: "██████████ 100%",
      art: "🌌"
    },
    { 
      text: "ENHANCING TOAD BLOCKCHAIN...", 
      progress: "████░░░░░░ 40%",
      art: "⛓️"
    },
    { 
      text: "MINING RARE PEPES...", 
      progress: "████████░░ 80%",
      art: "💎"
    },
    { 
      text: "RIBBIT.EXE INITIATED...", 
      progress: "███████░░░ 70%",
      art: "🚀"
    },
    { 
      text: "SPREADING TOAD VIBES...", 
      progress: "████████░░ 80%",
      art: "✨"
    },
    { 
      text: "CALCULATING MOON TRAJECTORY...", 
      progress: "███████░░░ 70%",
      art: "🌕"
    },
    { 
      text: "DEPLOYING CHILL PROTOCOLS...", 
      progress: "█████████░ 90%",
      art: "❄️"
    },
    { 
      text: "GENERATING TOAD MEMES...", 
      progress: "████████░░ 80%",
      art: "🎨"
    },
    { 
      text: "SCANNING FOR PAPER HANDS...", 
      progress: "██░░░░░░░░ 20%",
      art: "📄"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentMeme((prev) => (prev + 1) % memes.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const toadFacts = [
    "Did you know? CTOADs are naturally chill creatures 😎",
    "Fun fact: 1 $CTOAD = 1 $CTOAD forever 🐸",
    "CTOAD holders have 100% more swag than average 💫",
    "This console runs on sustainable toad energy ♻️",
    "Toads together strong! 💪"
  ];

  const getRandomFact = () => {
    return toadFacts[Math.floor(Math.random() * toadFacts.length)];
  };

  if (isMinimized) {
    return (
      <div 
        className="fixed bottom-4 right-4 bg-black/90 p-2 rounded-md border border-green-500 
                   cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => setIsMinimized(false)}
      >
        <Terminal className="w-4 h-4 text-green-500 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="terminal-card border-2 border-green-500 bg-black/90 rounded-lg overflow-hidden
                        shadow-lg shadow-green-500/20 backdrop-blur-sm hover:shadow-green-500/40 
                        transition-all duration-300">
          {/* Terminal Header */}
          <div className="bg-green-950/50 p-2 flex items-center justify-between border-b border-green-500/30">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-mono text-sm">ctoad@memeverse</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:bg-green-500/20 rounded transition-colors duration-300"
                title="Pause/Resume"
              >
                <Minus className="w-4 h-4 text-green-500" />
              </button>
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-green-500/20 rounded transition-colors duration-300"
                title="Minimize"
              >
                <Maximize2 className="w-4 h-4 text-green-500" />
              </button>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:bg-green-500/20 rounded transition-colors duration-300"
                title="Close"
              >
                <X className="w-4 h-4 text-green-500" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm space-y-2">
            <div className="text-green-500/70">
              Last login: {new Date().toLocaleString()} from TOAD-NETWORK
            </div>
            
            <div className="text-green-500 typewriter flex items-center gap-2">
              <span className="animate-bounce">{memes[currentMeme].art}</span>
              <span>$ {memes[currentMeme].text}</span>
            </div>
            
            <div className="text-green-400/90 animate-pulse">
              [{memes[currentMeme].progress}]
            </div>

            {/* Random Toad Facts */}
            <div className="text-yellow-500/70 text-xs mt-4 italic">
              {getRandomFact()}
            </div>

            {isPaused && (
              <div className="text-yellow-500 mt-2 animate-bounce">
                System paused. Click to resume... 🐸
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeConsole;