import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface HackingTask {
  name: string;
  lines: string[];
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  reward: number;
  requiresPassword?: string;
}

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

  const hackingTasks: HackingTask[] = [
    {
      name: 'Mainframe Breach',
      lines: [
        'Initializing breach sequence...',
        'Bypassing firewall protocols...',
        'Cracking encryption keys...',
        'Accessing mainframe core...',
        'Mainframe successfully breached!'
      ],
      duration: 50,
      difficulty: 'Easy',
      reward: 100
    },
    {
      name: 'Crypto Heist',
      lines: [
        'Scanning blockchain network...',
        'Identifying vulnerable nodes...',
        'Deploying smart contract exploits...',
        'Mining cryptocurrency tokens...',
        'Funds successfully extracted!'
      ],
      duration: 60,
      difficulty: 'Medium',
      reward: 200
    },
    {
      name: 'Database Infiltration',
      lines: [
        'Mapping database structure...',
        'Injecting SQL payloads...',
        'Bypassing authentication...',
        'Downloading sensitive data...',
        'Database compromised!'
      ],
      duration: 45,
      difficulty: 'Easy',
      reward: 100
    },
    {
      name: 'Satellite Override',
      lines: [
        'Establishing uplink to satellite...',
        'Bypassing orbital security...',
        'Redirecting communication arrays...',
        'Downloading classified transmissions...',
        'Satellite control achieved!'
      ],
      duration: 70,
      difficulty: 'Hard',
      reward: 300,
      requiresPassword: 'ORBITAL99'
    },
    {
      name: 'Neural Network Hack',
      lines: [
        'Connecting to AI mainframe...',
        'Analyzing neural pathways...',
        'Injecting cognitive override...',
        'Rewriting core directives...',
        'AI system compromised!'
      ],
      duration: 65,
      difficulty: 'Medium',
      reward: 200
    }
  ];

  useEffect(() => {
    if (currentLine >= hackingTasks[currentTask].lines.length) return;

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
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLine, currentTask]);

  const handleTaskSelect = (taskIndex: number) => {
    setText('');
    setCurrentLine(0);
    setCurrentTask(taskIndex);
    setIsHacking(true);
    setShowPrompt(false);
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
`);
          break;
        case 'stats':
          setText(`Hacker Status:
Level: ${level}
Score: ${score}
Achievements: ${achievements.length}
Active Upgrades: ${activeUpgrades.join(', ')}
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
          setText(prev => `${prev}\nScan initiated...`);
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
    }
    
    if (!achievements.includes('Master Hacker') && score >= 1000) {
      newAchievements.push('Master Hacker');
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

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="terminal-card p-4 border-2 border-green-500 bg-black/80 min-h-[400px]">
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
          
          <pre className="font-mono text-green-500 whitespace-pre-wrap min-h-[300px]">
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

          {showPrompt && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {hackingTasks.map((task, index) => (
                <button
                  key={index}
                  onClick={() => handleTaskSelect(index)}
                  className={`px-4 py-2 border border-green-500 
                           text-green-500 hover:bg-green-500/30 transition-colors
                           rounded font-mono text-sm
                           ${task.difficulty === 'Easy' ? 'bg-green-500/20' :
                             task.difficulty === 'Medium' ? 'bg-yellow-500/20' :
                             'bg-red-500/20'}`}
                >
                  <div>{task.name}</div>
                  <div className="text-xs mt-1">
                    Difficulty: {task.difficulty}
                    <br/>
                    Reward: {task.reward} pts
                  </div>
                </button>
              ))}
            </div>
          )}

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