import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const MemeConsole = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const memes = [
    "DOWNLOADING MORE RAM...",
    "HACKING THE MAINFRAME...",
    "ENHANCING BLOCKCHAIN...",
    "MINING COMEDY GOLD...",
    "HODL.EXE INITIATED..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="terminal-card p-4 border border-green-500 bg-black/60">
          <div className="flex items-center mb-2">
            <Terminal className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-500 font-mono text-sm">console.log</span>
          </div>
          <div className="font-mono text-green-500 typewriter">
            &gt; {memes[currentMeme]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeConsole;