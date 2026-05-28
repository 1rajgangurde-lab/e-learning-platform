import React from 'react';
import { Award, Lock, CheckCircle2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const CertificatePreview = ({ progress = 65, courseName = "Course Name" }) => {
  const isUnlocked = progress === 100;

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Award className="w-6 h-6 text-purple-400" />
        Certificate of Completion
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            Upon completing all lessons and passing required quizzes, you will receive a verified certificate to showcase your new skills.
          </p>

          <GlassCard className="p-6 border-slate-700/50">
            <h4 className="font-bold text-white mb-4">Requirements</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /></div>}
                <span className="text-slate-300">Complete all video lessons</span>
              </div>
              <div className="flex items-center gap-3">
                {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <div className="w-5 h-5 rounded-full border border-slate-600" />}
                <span className="text-slate-300">Pass all module quizzes</span>
              </div>
              <div className="flex items-center gap-3">
                {progress >= 100 ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <div className="w-5 h-5 rounded-full border border-slate-600" />}
                <span className="text-slate-300">Submit final project</span>
              </div>
            </div>

            <div className="mt-6">
              {isUnlocked ? (
                <GradientButton className="w-full py-3 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                  Download Certificate
                </GradientButton>
              ) : (
                <button disabled className="w-full py-3 bg-slate-800 text-slate-500 font-medium rounded-xl border border-slate-700 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" /> Locked ({progress}% Complete)
                </button>
              )}
            </div>
          </GlassCard>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
          <div className="relative aspect-[1.4/1] bg-slate-900 border-2 border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80">
            {/* Certificate Template Mockup */}
            <Award className="w-16 h-16 text-purple-400 mb-4 opacity-80" />
            <h2 className="text-2xl font-serif text-white uppercase tracking-widest mb-2 opacity-90">Certificate</h2>
            <p className="text-slate-400 font-serif italic mb-6 opacity-80">of Completion</p>
            <p className="text-sm text-slate-500 mb-1">This is to certify that</p>
            <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-2 px-8 mb-4">Student Name</h3>
            <p className="text-xs text-slate-400 mb-2">has successfully completed the course</p>
            <p className="text-sm font-bold text-blue-400 mb-8">{courseName}</p>
            
            <div className="flex justify-between w-full px-8 text-xs text-slate-500 border-t border-slate-700/50 pt-4">
              <span>Date: [Completion Date]</span>
              <span>ID: 100203040</span>
            </div>

            {!isUnlocked && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center flex-col">
                <Lock className="w-12 h-12 text-slate-400 mb-4" />
                <p className="text-white font-bold tracking-wider">LOCKED</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
