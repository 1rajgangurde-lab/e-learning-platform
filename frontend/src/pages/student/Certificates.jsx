import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import CertificateCard from '../../components/gamification/CertificateCard';

const Certificates = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Certificates</h1>
          <p className="text-slate-400">Download and verify your earned credentials.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CertificateCard title="Advanced React Patterns" date="May 20, 2026" id="CERT-98A731" />
          <CertificateCard title="Node.js Microservices" date="April 15, 2026" id="CERT-11X902" />
          <CertificateCard title="UI/UX Design Masterclass" date="March 01, 2026" id="CERT-88Z445" />
          <CertificateCard title="Frontend Architecture" date="January 12, 2026" id="CERT-42M198" />
        </div>
      </div>
    </ThemeLayout>
  );
};

export default Certificates;
