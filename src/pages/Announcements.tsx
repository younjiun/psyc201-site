import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      date: '8 May 2026',
      title: 'Alternative submission portal available',
      content: 'An alternative submission portal is available for the Proposal Pitch. If you have already submitted through Nuku, please also submit through the temporary portal if instructed, as we may not be able to access Nuku submissions at this time.',
      action: {
        label: 'Submit Proposal Pitch',
        url: '#'
      }
    },
    {
      date: '8 May 2026',
      title: 'Two-day extension reminder',
      content: 'The no-questions-asked two-day extension applies automatically. You do not need to apply separately for this extension.',
    },
    {
      date: '8 May 2026',
      title: 'Temporary course materials page created',
      content: 'This temporary page has been created to provide access to essential PSYC201 materials while Nuku/Canvas is unavailable. Please continue checking your university email for official course communication.',
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Announcements</h2>
        <p className="text-lg text-slate-600">
          This page archives important PSYC201 updates while Nuku/Canvas is unavailable.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 space-y-8 pb-4">
        {announcements.map((announcement, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
                <Calendar size={14} />
                {announcement.date}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{announcement.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {announcement.content}
              </p>
              
              {announcement.action && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a href={announcement.action.url} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
                    {announcement.action.label}
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
