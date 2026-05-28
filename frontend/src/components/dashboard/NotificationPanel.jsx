import React from 'react';
import { Bell, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const NotificationPanel = ({ notifications = [] }) => {
  return (
    <div className="space-y-4">
      {notifications.length === 0 ? (
        <p className="text-slate-500 text-sm text-center py-4">No new notifications</p>
      ) : (
        notifications.map((notif, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={notif.id} 
            className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-100 dark:border-slate-800"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{notif.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{notif.message}</p>
              <span className="text-xs font-medium text-slate-400 mt-2 block">{notif.date}</span>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default NotificationPanel;
