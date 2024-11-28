import React, { useState, useEffect } from 'react';

const RetroGame = () => {
  const [position, setPosition] = useState(0);
  const [coins, setCoins] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (!isJumping) {
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 500);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping]);

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="retro-card p-8 text-center">
          <h2 className="text-4xl text-[#00ff00] mb-8 retro-text">TOKEN RUNNER</h2>
          <div className="game-container h-48 bg-[#000033] relative border-4 border-[#00ff00]">
            <div 
              className={`player absolute bottom-0 left-${position} w-8 h-8 bg-[#00ff00] transition-all ${
                isJumping ? 'animate-jump' : ''
              }`}
            />
            <div className="score absolute top-4 right-4 text-[#00ff00]">
              COINS: {coins}
            </div>
          </div>
          <p className="mt-4 text-[#00ff00]">PRESS SPACE TO JUMP!</p>
        </div>
      </div>
    </div>
  );
};

export default RetroGame;