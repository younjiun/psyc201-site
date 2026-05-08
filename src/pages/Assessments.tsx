
import { ExternalLink, FileText, CheckCircle } from 'lucide-react';

const Assessments = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Assessments</h2>
        <p className="text-lg text-slate-600">
          This page contains key PSYC201 assessment information while Nuku/Canvas is unavailable. Please check this page and your university email for updates.
        </p>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800">Proposal Pitch</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 uppercase tracking-wider">
            <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded">10% of Final Grade</span>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Key Information:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Due date:</strong> Sunday, 10 May 2026, 11:59 PM NZST, following the no-questions-asked two-day extension.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Length:</strong> 800 words, plus or minus 10%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Limit:</strong> Tutors will stop marking at approximately 880 words.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Submission:</strong> Use the temporary submission portal while Nuku is unavailable.</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
            <p className="text-amber-800 font-medium mb-1">Important note about extensions:</p>
            <p className="text-amber-900 text-sm">There is no separate application required for the two-day extension. The extended due date applies automatically.</p>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
              Submit Proposal Pitch
              <ExternalLink size={16} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2 rounded-md font-medium transition-colors">
              <FileText size={16} />
              Instructions
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2 rounded-md font-medium transition-colors">
              <FileText size={16} />
              Marking Rubric
            </a>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">If you already submitted on Nuku</h3>
        <p className="text-slate-600">
          If you already submitted on Nuku before the outage, please also submit through the temporary portal if instructed. This allows tutors to begin marking while Nuku access is unavailable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Oral Assessment</h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            The Oral Assessment will assess your ability to explain, discuss, and defend your research direction. The Proposal Pitch is intended to help you prepare for this interactive oral assessment.
          </p>
          <div className="flex flex-col gap-2">
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
              <FileText size={16} /> View Oral Assessment guide
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
              <FileText size={16} /> View preparation resources
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Tests</h3>
            <p className="text-slate-600 text-sm">
              Please continue checking your university email and this page for any updates about test arrangements while Nuku is unavailable.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Lab Tasks</h3>
            <p className="text-slate-600 text-sm">
              Lab tasks remain part of the course assessment structure. Please check the weekly materials and announcements for any updates about lab-related information.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-8 mt-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Assessment Support</h3>
        <p className="text-slate-600 mb-4">If you are unsure about a general assessment instruction, please first check:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-6 pl-2">
          <li>This page.</li>
          <li>The FAQ / Support page.</li>
          <li>Your university email.</li>
        </ol>
        <p className="text-slate-600 bg-slate-100 p-4 rounded-md">
          For individual circumstances, please contact the course team using your university email.
        </p>
      </div>
    </div>
  );
};

export default Assessments;
