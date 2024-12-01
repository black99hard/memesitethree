import React, { useState, useEffect } from 'react';
import { Terminal, Maximize2, X, Minus } from 'lucide-react';

const MemeConsole = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const memes = [
    { 
      text: "DOWNLOADING MORE $MORTY...", 
      progress: "███████░░░ 70%",
      art: "🌀"
    },
    { 
      text: "HACKING THE MULTIVERSE...", 
      progress: "██████████ 100%",
      art: "🌌"
    },
    { 
      text: "ENHANCING PORTAL TECHNOLOGY...", 
      progress: "████░░░░░░ 40%",
      art: "⛓️"
    },
    { 
      text: "MINING RARE MORTYS...", 
      progress: "████████░░ 80%",
      art: "💎"
    },
    { 
      text: "PORTAL.EXE INITIATED...", 
      progress: "███████░░░ 70%",
      art: "🚀"
    },
    { 
      text: "SPREADING SCHWIFTY VIBES...", 
      progress: "████████░░ 80%",
      art: "✨"
    },
    { 
      text: "CALCULATING DIMENSION JUMPS...", 
      progress: "███████░░░ 70%",
      art: "🌀"
    },
    { 
      text: "DEPLOYING RICK PROTOCOLS...", 
      progress: "█████████░ 90%",
      art: "🧪"
    },
    { 
      text: "GENERATING MORTY MEMES...", 
      progress: "████████░░ 80%",
      art: "🎨"
    },
    { 
      text: "SCANNING FOR JERRY HANDS...", 
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

  const mortyFacts = [
    "Did you know? MORTYs are naturally schwifty creatures 🌀",
    "Fun fact: 1 $MORTY = 1 $MORTY forever 🧪",
    "MORTY holders have 100% more interdimensional swag 💫",
    "This console runs on sustainable portal energy ♻️",
    "Mortys together strong! 💪"
  ];

  const getRandomFact = () => {
    return mortyFacts[Math.floor(Math.random() * mortyFacts.length)];
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
              <span className="text-green-500 font-mono text-sm">morty@memeverse</span>
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