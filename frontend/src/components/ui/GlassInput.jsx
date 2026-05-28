import React from 'react';

const GlassInput = ({ icon: Icon, type = "text", placeholder, value, onChange, required, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#0F172A]/50 backdrop-blur-md border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner ${Icon ? 'pl-11' : ''}`}
      />
    </div>
  );
};

export default GlassInput;
