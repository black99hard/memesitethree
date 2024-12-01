import React from 'react';
import { Twitter, Send, BarChart } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { 
      icon: <Twitter className="w-6 h-6" />, 
      link: "https://x.com/Mortysolanacto", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Send className="w-6 h-6" />, 
      link: "https://t.me/Mortysolanacto", 
      label: "Telegram",
      color: "hover:text-sky-400"
    },
    { 
      icon: <BarChart className="w-6 h-6" />, 
      link: "https://dexscreener.com/solana/YOUR_MORTY_CONTRACT", 
      label: "DexScreener",
      color: "hover:text-green-400"
    }
  ];

  return (
    <div className="fixed top-4 right-4 flex space-x-4 z-50">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center justify-center p-2 
            border border-green-500 bg-black/60 
            hover:bg-green-500/20 transition-all duration-300 
            cursor-pointer rounded-md
            transform hover:scale-110 active:scale-95
          `}
          aria-label={social.label}
          title={social.label}
        >
          <span className={`text-green-500 ${social.color} transition-colors duration-300`}>
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;