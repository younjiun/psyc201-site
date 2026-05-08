
import { Download, ExternalLink, Video } from 'lucide-react';

const Lectures = () => {
  const weeks = [
    {
      weekNumber: 10,
      notes: "Add any short note students need for this week.",
      resources: [
        { label: "Lecture slides", type: "pdf", url: "#" },
        { label: "Supporting resources", type: "link", url: "#" },
        { label: "Practice material", type: "link", url: "#" }
      ]
    },
    {
      weekNumber: 11,
      notes: "Add any short note students need for this week.",
      resources: [
        { label: "Lecture slides", type: "pdf", url: "#" },
        { label: "Supporting resources", type: "link", url: "#" },
        { label: "Practice material", type: "link", url: "#" }
      ]
    },
    {
      weekNumber: 12,
      notes: "Add any short note students need for this week.",
      resources: [
        { label: "Lecture slides", type: "pdf", url: "#" },
        { label: "Supporting resources", type: "link", url: "#" },
        { label: "Practice material", type: "link", url: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Lecture Materials</h2>
        <p className="text-lg text-slate-600 mb-4">
          This page provides temporary access to PSYC201 lecture materials while Nuku/Canvas is unavailable.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg max-w-3xl">
          <h3 className="font-semibold text-blue-800 mb-2">Please note:</h3>
          <ul className="list-disc list-inside text-blue-900 space-y-1 ml-1 text-sm">
            <li>This page is a backup access point only.</li>
            <li>We will return to Nuku once access is restored.</li>
            <li>Materials will be added here as needed during the outage.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        {weeks.map((week) => (
          <div key={week.weekNumber} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Week {week.weekNumber}</h3>
            </div>
            
            <div className="p-6">
              {week.notes && (
                <div className="mb-6 p-4 bg-slate-50 rounded-md text-slate-700 text-sm border border-slate-100">
                  <strong>Notes:</strong> {week.notes}
                </div>
              )}
              
              <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wider text-slate-500">Resources</h4>
              <ul className="space-y-3">
                {week.resources.map((resource, idx) => (
                  <li key={idx} className="flex items-center">
                    <a href={resource.url} className="flex items-center gap-3 text-primary hover:text-primary-dark hover:underline group w-full py-2 px-3 rounded-md hover:bg-blue-50 transition-colors">
                      {resource.type === 'pdf' ? (
                        <Download size={18} className="text-slate-400 group-hover:text-primary" />
                      ) : resource.type === 'video' ? (
                        <Video size={18} className="text-slate-400 group-hover:text-primary" />
                      ) : (
                        <ExternalLink size={18} className="text-slate-400 group-hover:text-primary" />
                      )}
                      <span className="font-medium">{resource.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-8 mt-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Optional Study Support</h3>
        <p className="text-slate-600">
          Where available, optional study resources may also be linked here. These materials are intended to support learning and do not replace lecture attendance, course announcements, or assessment instructions.
        </p>
      </div>
    </div>
  );
};

export default Lectures;
