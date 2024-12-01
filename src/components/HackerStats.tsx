import React from 'react';
import { Coins, Users, DollarSign, TrendingUp } from 'lucide-react';

const HackerStats = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-10 font-mono">
          TOKEN METRICS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Coins className="w-8 h-8" />, 
              label: "TOTAL SUPPLY", 
              value: "1,000,000,000",
              subtext: "1B Total" 
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              label: "HOLDERS", 
              value: "68,791",
              subtext: "+12% this week" 
            },
            { 
              icon: <DollarSign className="w-8 h-8" />, 
              label: "PRICE", 
              value: "$0.003472",
              subtext: "USD" 
            },
            { 
              icon: <TrendingUp className="w-8 h-8" />, 
              label: "MARKET CAP", 
              value: "$3,500,000",
              subtext: "Fully Diluted" 
            },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="terminal-card p-6 border border-green-500 bg-black/60 
                         hover:bg-green-500/10 transition-all duration-300
                         transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="text-green-500 bg-green-500/10 p-3 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-green-400 font-mono text-sm tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-green-500 font-mono text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-green-400/60 font-mono text-xs mt-1">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackerStats;