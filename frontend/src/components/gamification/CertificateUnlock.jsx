import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, Share2, X } from 'lucide-react';

const CertificateUnlock = ({ isVisible, onClose, certificateUrl }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-1 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 opacity-20"></div>
            
            <div className="relative bg-white dark:bg-slate-900 rounded-[22px] p-8 md:p-12 text-center border border-amber-200 dark:border-amber-900/30">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6"
              >
                <Award className="w-12 h-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Course Completed!</h2>
              <p className="text-slate-500 mb-8 text-lg">You have successfully mastered this course.</p>
              
              <div className="aspect-[1.414] w-full max-w-md mx-auto bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 mb-8 flex items-center justify-center overflow-hidden">
                <img src={certificateUrl || 'https://via.placeholder.com/800x565.png?text=Certificate+Preview'} alt="Certificate" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download PDF
                </button>
                <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" /> Share on LinkedIn
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateUnlock;
