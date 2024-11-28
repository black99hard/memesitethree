import React from 'react';
import { Terminal, Skull } from 'lucide-react';
import ContractAddress from './ContractAddress';

const HackerHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="terminal-card w-full max-w-3xl p-6 border-2 border-green-500 bg-black/80">
        <div className="flex items-center mb-4 border-b border-green-500 pb-2">
          <Terminal className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-green-500 font-mono">[ROOT@PTOKEN] ~ # </span>
          <span className="animate-pulse">▊</span>
        </div>

        <div className="space-y-4 font-mono">
          <p className="text-green-500 typewriter">
            &gt; INITIALIZING P TOKEN PROTOCOL...
          </p>
          
          <div className="flex items-center space-x-2">
            <Skull className="w-8 h-8 text-green-500 animate-pulse" />
            <h1 className="text-4xl md:text-6xl text-green-500 glitch-text">
              P TOKEN
            </h1>
          </div>

          <p className="text-green-300">
            &gt; THE MOST DANGEROUS TOKEN IN CRYPTO
          </p>

          <ContractAddress />

          <div className="flex space-x-4">
            <button className="hacker-button">
              HACK THE PLANET
            </button>
            <button className="hacker-button">
              JOIN THE RESISTANCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerHero;