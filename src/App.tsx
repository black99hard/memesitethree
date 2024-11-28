import React from 'react';
import Matrix from './components/Matrix';
import HackerHero from './components/HackerHero';
import HackerStats from './components/HackerStats';
import MemeConsole from './components/MemeConsole';
import SocialLinks from './components/SocialLinks';
import HackingSimulator from './components/HackingSimulator';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Matrix />
      <SocialLinks />
      <HackerHero />
      <HackingSimulator />
      <HackerStats />
      <MemeConsole />
    </div>
  );
}

export default App;