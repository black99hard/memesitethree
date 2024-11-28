import React from 'react';
import { Coins, Users, Zap } from 'lucide-react';

const RetroStats = () => {
  return (
    <div className="py-16 bg-[#000033]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Coins className="w-12 h-12" />, label: "MARKET CAP", value: "$1M+" },
            { icon: <Users className="w-12 h-12" />, label: "HOLDERS", value: "10K+" },
            { icon: <Zap className="w-12 h-12" />, label: "POWER LEVEL", value: "9001+" },
          ].map((stat, index) => (
            <div key={index} className="retro-card p-6 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-[#00ff00]">{stat.icon}</div>
                <div>
                  <p className="text-[#ff00ff] text-xl">{stat.label}</p>
                  <p className="text-[#00ff00] text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetroStats;