import React, { useState, useEffect } from 'react';
import { Terminal, Maximize2, X, Minus } from 'lucide-react';

const MemeConsole = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const memes = [
    { text: "DOWNLOADING MORE RAM...", progress: "███████░░░ 70%" },
    { text: "HACKING THE MAINFRAME...", progress: "██████████ 100%" },
    { text: "ENHANCING BLOCKCHAIN...", progress: "████░░░░░░ 40%" },
    { text: "MINING COMEDY GOLD...", progress: "████████░░ 80%" },
    { text: "HODL.EXE INITIATED...", progress: "███████░░░ 70%" },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentMeme((prev) => (prev + 1) % memes.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  if (isMinimized) {
    return (
      <div 
        className="fixed bottom-4 right-4 bg-black/90 p-2 rounded-md border border-green-500 cursor-pointer"
        onClick={() => setIsMinimized(false)}
      >
        <Terminal className="w-4 h-4 text-green-500" />
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="terminal-card border border-green-500 bg-black/90 rounded-lg overflow-hidden
                        shadow-lg shadow-green-500/20 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-green-950/50 p-2 flex items-center justify-between border-b border-green-500/30">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-mono text-sm">terminal@memeverse</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:bg-green-500/20 rounded"
              >
                <Minus className="w-4 h-4 text-green-500" />
              </button>
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-green-500/20 rounded"
              >
                <Maximize2 className="w-4 h-4 text-green-500" />
              </button>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:bg-green-500/20 rounded"
              >
                <X className="w-4 h-4 text-green-500" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm space-y-2">
            <div className="text-green-500/70">
              Last login: {new Date().toLocaleString()}
            </div>
            
            <div className="text-green-500 typewriter">
              $ {memes[currentMeme].text}
            </div>
            
            <div className="text-green-400/90 animate-pulse">
              [{memes[currentMeme].progress}]
            </div>

            {isPaused && (
              <div className="text-yellow-500 mt-2">
                System paused. Click to resume...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeConsole;