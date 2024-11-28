import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "0xDEADBEEF...42069";

  const copyAddress = async () => {
    await navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-2 bg-green-500/10 p-3 rounded-lg border border-green-500/30">
      <code className="text-green-500 font-mono">{tokenAddress}</code>
      <button
        onClick={copyAddress}
        className="p-2 hover:bg-green-500/20 rounded transition-all duration-300"
        aria-label="Copy contract address"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-green-500" />
        )}
      </button>
    </div>
  );
};

export default ContractAddress;