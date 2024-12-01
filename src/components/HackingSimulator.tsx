import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface HackingTask {
  name: string;
  lines: string[];
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: number;
  requiresPassword?: string;
  memeArt?: string;
}

const ASCII_ART = {
  morty: `
    ⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
    ⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀⡏⠀⠀⠀⠀⠀⢷
    ⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇
    ⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀Aw⠀ ⡇
    ⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀Geez⠀ ⡇
    ⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼
    ⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀
    ⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
  `,
  rick: `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⠿⠿⠟⠛⠛⠛⠛⠛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
    ⠀⠀⠀⣰⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣆⠀⠀⠀
    ⠀⠀⣼⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⡄⠀⠀
    ⠀⢰⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⠀⠀
  `,
  portal: `
    ⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀
    ⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀
    ⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
    ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
    ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
    ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁
    ⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀
    ⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠿⠟⠛⠉⠀⠀⠀⠀⠀
  `
};

const adventureTasks: HackingTask[] = [
  {
    name: 'Portal Gun Calibration',
    lines: [
      'Initializing portal fluid...',
      'Calculating interdimensional coordinates...',
      'Stabilizing quantum tunnels...',
      'Synchronizing parallel universes...',
      'Portal successfully calibrated! Ready for adventure!'
    ],
    duration: 50,
    difficulty: 'Easy',
    reward: 100,
    memeArt: ASCII_ART.portal
  },
  {
    name: 'Plumbus Repair',
    lines: [
      'Analyzing Plumbus configuration...',
      'Adjusting fleeb juice levels...',
      'Recalibrating dingle bop...',
      'Smoothing grumbo...',
      'Plumbus functionality restored!'
    ],
    duration: 45,
    difficulty: 'Easy',
    reward: 100
  },
  {
    name: 'Meeseeks Box Debug',
    lines: [
      "I'm Mr Meeseeks, look at me!",
      'Analyzing task complexity...',
      'Calculating existence duration...',
      'Optimizing help protocols...',
      'Existence is pain, but debug complete!'
    ],
    duration: 60,
    difficulty: 'Medium',
    reward: 200,
    memeArt: ASCII_ART.morty
  },
  {
    name: 'Microverse Battery Boost',
    lines: [
      'Accessing miniature universe...',
      'Motivating tiny civilizations...',
      'Increasing power output...',
      'Optimizing energy conversion...',
      'Battery efficiency improved!'
    ],
    duration: 70,
    difficulty: 'Hard',
    reward: 300
  },
  {
    name: 'Interdimensional Cable Hack',
    lines: [
      'Scanning infinite channels...',
      'Bypassing reality firewalls...',
      'Accessing alternate dimensions...',
      'Unlocking premium content...',
      'Infinite channels unlocked!'
    ],
    duration: 55,
    difficulty: 'Medium',
    reward: 200,
    memeArt: ASCII_ART.rick
  }
];

const HackingSimulator = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentTask, setCurrentTask] = useState<number>(0);
  const [isHacking, setIsHacking] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [theme, setTheme] = useState<'default' | 'ctoad'>('default');
  const [currentArt, setCurrentArt] = useState<string>('');
  const [isArtAnimating, setIsArtAnimating] = useState(false);
  const [dimension, setDimension] = useState('C-137');
  const [alienLanguage, setAlienLanguage] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [currentTaskProgress, setCurrentTaskProgress] = useState<number>(0);

  const hackingTasks: HackingTask[] = adventureTasks;

  useEffect(() => {
    if (!isHacking || currentLine >= hackingTasks[currentTask].lines.length) return;

    const line = hackingTasks[currentTask].lines[currentLine];
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
          setCurrentTaskProgress(prev => prev + (100 / hackingTasks[currentTask].lines.length));
          
          // Check if task is complete
          if (currentLine === hackingTasks[currentTask].lines.length - 1) {
            setTimeout(() => {
              completeTask(currentTask);
            }, 1000);
          }
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLine, currentTask, isHacking]);

  const completeTask = (taskIndex: number) => {
    setCompletedTasks(prev => [...prev, taskIndex]);
    setScore(prev => prev + hackingTasks[taskIndex].reward);
    setIsHacking(false);
    checkAchievements(hackingTasks[taskIndex].name);
    playSound('success');
  };

  const handleTaskSelect = (taskIndex: number) => {
    setText('');
    setCurrentLine(0);
    setCurrentTask(taskIndex);
    setIsHacking(true);
    setCurrentTaskProgress(0);
    
    const task = hackingTasks[taskIndex];
    if (task.memeArt) {
      displayArtAnimation(task.memeArt, 4000);
    }
  };

  const handleInputSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = userInput.toLowerCase().trim();
      switch (command) {
        case 'help':
          setText(`Available commands:
help - Show this message
clear - Clear terminal
hack - Start hacking
stats - Show your hacker stats
sound - Toggle sound effects
achievements - Show your achievements
upgrade - Access the upgrade shop
scan - Scan for vulnerable systems
ctoad - Activate CTOAD mode
dimension - Change dimension
alien - Toggle alien translator
inventory - Check inventory
`);
          break;
        case 'stats':
          setText(`Hacker Status:
Level: ${level}
Score: ${score}
Achievements: ${achievements.length}
Active Upgrades: ${activeUpgrades ? activeUpgrades.join(', ') : 'None'}
`);
          break;
        case 'clear':
          setText('');
          break;
        case 'hack':
          setShowPrompt(true);
          break;
        case 'sound':
          setSoundEnabled(!soundEnabled);
          break;
        case 'achievements':
          setText(prev => `${prev}\nAchievements: ${achievements.join(', ')}`);
          break;
        case 'upgrade':
          setText(prev => `${prev}\nUpgrade shop accessed!`);
          break;
        case 'scan':
          displayArtAnimation(getRandomArt(), 3000);
          setText(prev => `${prev}\nScan initiated...`);
          break;
        case 'ctoad':
          setTheme('ctoad');
          displayArtAnimation(ASCII_ART.portal, 5000);
          setText(prev => `${prev}\n🌀 Portal Mode Activated 🌀`);
          break;
        case 'dimension':
          changeDimension();
          break;
        case 'alien':
          setAlienLanguage(!alienLanguage);
          setText(prev => `${prev}\n${alienLanguage ? 'Translator disabled' : 'Alien translator activated'}`);
          break;
        case 'inventory':
          setText(`Current Inventory:
- Portal Gun (${Math.floor(Math.random() * 100)}% charged)
- Plumbus
- Flask of Mystery Liquid
- Interdimensional Goggles
Current Dimension: ${dimension}
`);
          break;
        default:
          setText(prev => prev + '\nUnknown command: ' + userInput);
      }
      setUserInput('');
      playSound('command');
    }
  };

  const sounds = {
    typing: new Audio('/sounds/typing.mp3'),
    success: new Audio('/sounds/success.mp3'),
    error: new Audio('/sounds/error.mp3'),
    command: new Audio('/sounds/command.mp3')
  };

  const playSound = (soundName: keyof typeof sounds) => {
    if (soundEnabled && sounds[soundName]) {
      sounds[soundName].play();
    }
  };

  const checkAchievements = (taskName: string) => {
    const newAchievements: string[] = [];
    
    if (!achievements.includes('First Hack') && score === 0) {
      newAchievements.push('First Hack');
      displayArtAnimation(ASCII_ART.rick, 3000);
    }
    
    if (!achievements.includes('Master Hacker') && score >= 1000) {
      newAchievements.push('Master Hacker');
      displayArtAnimation(ASCII_ART.morty, 4000);
    }
    
    if (newAchievements.length > 0) {
      setAchievements(prev => [...prev, ...newAchievements]);
      setText(prev => `${prev}\n🏆 Achievement Unlocked: ${newAchievements.join(', ')}!`);
      playSound('success');
    }
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full bg-green-900 h-2 rounded-full mt-2">
      <div 
        className="bg-green-500 h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  function startMiniGame(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  const displayArtAnimation = (art: string, duration: number = 3000) => {
    setIsArtAnimating(true);
    setCurrentArt(art);
    
    setTimeout(() => {
      setIsArtAnimating(false);
      setCurrentArt('');
    }, duration);
  };

  const changeDimension = () => {
    const dimensions = ['C-137', 'D-99', 'J19ζ7', 'K-83'];
    const newDimension = dimensions[Math.floor(Math.random() * dimensions.length)];
    setDimension(newDimension);
    setText(prev => `${prev}\n🌀 Transported to Dimension ${newDimension}`);
    displayArtAnimation(ASCII_ART.portal, 3000);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className={`terminal-card p-4 border-2 
          border-green-500 bg-black/80
          min-h-[400px]`}>
          {isArtAnimating && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-black/90 p-4 rounded-lg border border-green-500 z-50">
              <pre className="text-green-500 font-mono text-sm whitespace-pre">
                {currentArt}
              </pre>
            </div>
          )}
          <div className="flex items-center mb-2">
            <Terminal className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-500 font-mono text-sm">cyberhack.exe</span>
          </div>
          
          <div className="flex justify-between text-green-500 text-sm mb-2">
            <span>Level: {level}</span>
            <span>Score: {score}</span>
            <span>Achievements: {achievements.length}</span>
            <button 
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="hover:text-green-400"
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </div>
          
          <pre className="font-mono whitespace-pre-wrap min-h-[300px] text-green-500">
            {text}
            {!isHacking && (
              <div className="mt-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleInputSubmit}
                  className="bg-transparent border-none outline-none text-green-500 w-full"
                  placeholder="Type 'help' for commands..."
                />
              </div>
            )}
            <span className="animate-pulse">▊</span>
          </pre>

          {/* Task Grid - Always visible */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {hackingTasks.map((task, index) => (
              <button
                key={index}
                onClick={() => handleTaskSelect(index)}
                disabled={isHacking && currentTask === index}
                className={`px-4 py-2 border 
                  ${isHacking && currentTask === index 
                    ? 'border-yellow-500 bg-yellow-500/10' 
                    : completedTasks.includes(index)
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-green-500 hover:bg-green-500/30'
                  }
                  transition-colors rounded font-mono text-sm
                  ${task.difficulty === 'Easy' ? 'text-green-500' :
                    task.difficulty === 'Medium' ? 'text-yellow-500' :
                    'text-red-500'}`}
              >
                <div className="flex justify-between items-center">
                  <span>{task.name}</span>
                  {completedTasks.includes(index) && (
                    <span className="text-green-500">✓</span>
                  )}
                </div>
                <div className="text-xs mt-1">
                  Difficulty: {task.difficulty}
                  <br/>
                  Reward: {task.reward} pts
                </div>
                {isHacking && currentTask === index && (
                  <div className="mt-2 bg-black/50 rounded-full h-1">
                    <div 
                      className="bg-yellow-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${currentTaskProgress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Status Display */}
          <div className="mt-4 text-green-500 text-sm">
            <div className="flex justify-between items-center">
              <span>Completed Tasks: {completedTasks.length}/{hackingTasks.length}</span>
              <span>Total Score: {score}</span>
            </div>
          </div>

          {showMiniGames && (
            <div className="mt-4 border-t border-green-500 pt-4">
              <h3 className="text-green-500 mb-2">Mini-Games</h3>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => startMiniGame('codebreaker')} className="...">
                  Code Breaker
                </button>
                <button onClick={() => startMiniGame('password')} className="...">
                  Password Cracker
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackingSimulator;