import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const HackingSimulator = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const hackingLines = [
    'Initializing hack sequence...',
    'Bypassing mainframe security...',
    'Accessing blockchain nodes...',
    'Mining P Tokens...',
    'Deploying smart contracts...',
    'Hack complete! System compromised.'
  ];

  useEffect(() => {
    if (currentLine >= hackingLines.length) return;

    const line = hackingLines[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= line.length) {
        setText(prev => prev + line[charIndex - 1]);
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText(prev => prev + '\n');
          setCurrentLine(prev => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="terminal-card p-4 border-2 border-green-500 bg-black/80">
          <div className="flex items-center mb-2">
            <Terminal className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-500 font-mono text-sm">hack.exe</span>
          </div>
          <pre className="font-mono text-green-500 whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">▊</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HackingSimulator;