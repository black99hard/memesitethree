import React from 'react';
import { TrendingUp, Users, Wallet } from 'lucide-react';

const Stats = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <TrendingUp className="w-8 h-8" />, label: "Market Cap", value: "$1M+" },
            { icon: <Users className="w-8 h-8" />, label: "Holders", value: "10K+" },
            { icon: <Wallet className="w-8 h-8" />, label: "Total Supply", value: "1B" },
          ].map((stat, index) => (
            <div key={index} className="glass-card backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;