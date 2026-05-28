import React from 'react';
import { motion } from 'framer-motion';

const GlowTable = ({ headers, data, renderRow }) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl bg-[#0F172A]/40 backdrop-blur-md border border-slate-700/50">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-700/50 bg-slate-800/30">
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-4 text-sm font-semibold text-slate-300 tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/30">
          {data.map((item, index) => (
            <motion.tr 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.05)" }}
              className="group transition-colors duration-200"
            >
              {renderRow(item)}
            </motion.tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="p-8 text-center text-slate-500">
          No data available
        </div>
      )}
    </div>
  );
};

export default GlowTable;
