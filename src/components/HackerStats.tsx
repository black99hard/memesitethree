import React from 'react';
import { Shield, Cpu, Wifi } from 'lucide-react';

const HackerStats = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-8 h-8" />, label: "SECURITY LEVEL", value: "MAXIMUM" },
            { icon: <Cpu className="w-8 h-8" />, label: "PROCESSING POWER", value: "9999 TH/s" },
            { icon: <Wifi className="w-8 h-8" />, label: "NETWORK NODES", value: "∞" },
          ].map((stat, index) => (
            <div key={index} className="terminal-card p-4 border border-green-500 bg-black/60">
              <div className="flex items-center space-x-4">
                <div className="text-green-500">{stat.icon}</div>
                <div>
                  <p className="text-green-400 font-mono text-sm">{stat.label}</p>
                  <p className="text-green-500 font-mono text-xl font-bold">{stat.value}</p>
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