import React from 'react';
import { Twitter, Github, MessageSquare } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com/ptoken", label: "Twitter" },
    { icon: <Github className="w-6 h-6" />, link: "https://github.com/ptoken", label: "Github" },
    { icon: <MessageSquare className="w-6 h-6" />, link: "https://discord.gg/ptoken", label: "Discord" }
  ];

  return (
    <div className="fixed top-4 right-4 flex space-x-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-green-500 bg-black/60 hover:bg-green-500/20 transition-all duration-300 group"
          aria-label={social.label}
        >
          <div className="text-green-500 group-hover:text-green-400">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;