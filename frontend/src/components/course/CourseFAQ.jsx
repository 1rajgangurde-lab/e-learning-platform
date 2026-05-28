import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const CourseFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: 'How long do I have access to this course?', a: 'You have lifetime access! Once you enroll, the content is yours forever, including all future updates and additions.' },
    { q: 'Are there any prerequisites?', a: 'We recommend having a basic understanding of programming concepts, but we cover all the core fundamentals you need in the early modules.' },
    { q: 'Will I get a certificate?', a: 'Yes! Upon passing all quizzes and completing the final project, you will receive a verified certificate that you can add to your LinkedIn profile.' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-blue-400" />
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <GlassCard key={idx} className={`border-slate-800/50 transition-all ${openIdx === idx ? 'bg-slate-800/40 border-blue-500/30' : 'hover:bg-slate-800/30 hover:border-slate-700/50'}`}>
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left p-6 flex justify-between items-center"
            >
              <h4 className={`font-bold ${openIdx === idx ? 'text-blue-300' : 'text-white'}`}>{faq.q}</h4>
              {openIdx === idx ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                {faq.a}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQ;
