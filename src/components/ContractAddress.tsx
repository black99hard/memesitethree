import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "Mse6hcdxMWgQgEW7AcidAYw2G5ucW5fC8XK3NWYpump";

  // Function to shorten address
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyAddress = async () => {
    await navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-2 bg-green-500/10 p-3 rounded-lg border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
      <code className="text-green-500 font-mono" title={tokenAddress}>
        {shortenAddress(tokenAddress)}
      </code>
      <button
        onClick={copyAddress}
        className="p-2 hover:bg-green-500/20 rounded transition-all duration-300"
        aria-label="Copy contract address"
        title="Copy full address"
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