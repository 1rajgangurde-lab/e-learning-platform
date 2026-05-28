import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const LeaderboardCard = ({ data = [] }) => {
  return (
    <div className="space-y-3">
      {data.map((user, idx) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={user.id} 
          className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 transition-colors shadow-inner"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border shadow-inner ${
            user.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
            user.rank === 2 ? 'bg-slate-500/20 text-slate-300 border-slate-500/50' :
            user.rank === 3 ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' :
            'bg-slate-800 text-slate-500 border-slate-700'
          }`}>
            {user.rank}
          </div>
          <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`} alt={user.name} className="w-10 h-10 rounded-full border border-slate-700 shadow-md" />
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white">{user.name}</h4>
            <p className="text-xs text-blue-400 font-medium">{user.xp} XP</p>
          </div>
          {user.rank <= 3 && <Trophy className={`w-5 h-5 drop-shadow-[0_0_8px_currentColor] ${
            user.rank === 1 ? 'text-yellow-400' :
            user.rank === 2 ? 'text-slate-300' :
            'text-orange-400'
          }`} />}
        </motion.div>
      ))}
    </div>
  );
};

export default LeaderboardCard;
