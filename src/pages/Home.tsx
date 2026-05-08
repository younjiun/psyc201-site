
import { Link } from 'react-router-dom';
import { AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Welcome</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          This page has been created as a temporary backup location for essential PSYC201 course materials while Nuku/Canvas is unavailable.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h3 className="font-semibold text-blue-800 flex items-center gap-2 mb-2">
          <AlertCircle size={18} />
          Please note:
        </h3>
        <ul className="list-disc list-inside text-blue-900 space-y-1 ml-1">
          <li>This is an emergency mirror of important course resources.</li>
          <li>Official course communication will still be sent through to your registered preferred email where possible.</li>
          <li>We will return to Nuku once access is restored.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">Latest update</h3>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <div className="text-sm font-medium text-slate-500 mb-1">8 May 2026</div>
          <h4 className="text-lg font-semibold text-slate-800 mb-2">Alternative submission portal available</h4>
          <p className="text-slate-600 mb-4">
            An alternative submission portal is now available for the Proposal Pitch while Nuku remains unavailable. If you have already submitted through Nuku, please also submit through the temporary portal if instructed, as we may not be able to access Nuku submissions at this time.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
            Submit Proposal Pitch
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">Quick links</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/assessments" className="group p-5 border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-slate-800 group-hover:text-primary mb-2 flex items-center justify-between">
              Assessments
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
            </h4>
            <p className="text-sm text-slate-600">Proposal Pitch information, rubrics, and submission links.</p>
          </Link>
          <Link to="/lectures" className="group p-5 border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-slate-800 group-hover:text-primary mb-2 flex items-center justify-between">
              Lecture Materials
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
            </h4>
            <p className="text-sm text-slate-600">Access lecture slides and supporting resources.</p>
          </Link>
          <Link to="/announcements" className="group p-5 border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-slate-800 group-hover:text-primary mb-2 flex items-center justify-between">
              Announcements
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
            </h4>
            <p className="text-sm text-slate-600">Latest course updates during the Nuku outage.</p>
          </Link>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Thank you for your patience</h3>
        <p className="text-slate-600 mb-2">
          We understand that this disruption is stressful. The course team is doing its best to provide clear alternative access to the most important course information.
        </p>
        <p className="text-slate-600 mb-0 font-medium">
          For urgent course-related matters, please email psyc201@vuw.ac.nz.
        </p>
      </div>
    </div>
  );
};

export default Home;
