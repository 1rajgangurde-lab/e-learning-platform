import React from 'react';
import { useQuizLeaderboard } from '../../hooks/useQuiz';
import { Trophy, Medal, Clock, Award } from 'lucide-react';

const LeaderboardCard = ({ quizId }) => {
  const { data: leaderboard, isLoading } = useQuizLeaderboard(quizId);

  if (isLoading) return <div className="animate-pulse bg-slate-100 dark:bg-slate-800 h-64 rounded-2xl"></div>;
  if (!leaderboard || leaderboard.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Quiz Leaderboard</h2>
      </div>

      <div className="space-y-4">
        {leaderboard.map((entry, index) => {
          let RankIcon = null;
          let rankColor = '';
          let bgClass = 'bg-slate-50 dark:bg-slate-800/50 border-transparent';

          if (index === 0) {
            RankIcon = Trophy;
            rankColor = 'text-yellow-500';
            bgClass = 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
          } else if (index === 1) {
            RankIcon = Medal;
            rankColor = 'text-slate-400';
            bgClass = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
          } else if (index === 2) {
            RankIcon = Medal;
            rankColor = 'text-amber-600';
            bgClass = 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800';
          }

          return (
            <div key={entry._id} className={`flex items-center justify-between p-4 rounded-2xl border ${bgClass} transition-colors hover:border-blue-300 dark:hover:border-blue-700`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  index < 3 ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                }`}>
                  {RankIcon ? <RankIcon className={`w-5 h-5 ${rankColor}`} /> : `#${index + 1}`}
                </div>
                
                <div className="flex items-center gap-3">
                  {entry.user.avatar ? (
                    <img src={entry.user.avatar} alt={entry.user.name} className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border-2 border-white dark:border-slate-800 shadow-sm">
                      {entry.user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{entry.user.name}</h4>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {Math.floor(entry.timeTaken / 60)}m {entry.timeTaken % 60}s</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-black text-slate-900 dark:text-white">{entry.percentage}%</div>
                <div className="text-xs font-bold text-slate-500 uppercase">{entry.score} pts</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardCard;
