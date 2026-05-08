import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is this website?",
      answer: "This is a temporary backup site for essential PSYC201 materials while Nuku/Canvas is unavailable. It is not intended to permanently replace Nuku."
    },
    {
      question: "Where should I submit the Proposal Pitch?",
      answer: "Please use the temporary submission portal linked on the Assessments page while Nuku is unavailable."
    },
    {
      question: "What if I already submitted on Nuku?",
      answer: "If instructed, please also submit through the temporary portal. At the moment, the course team may not be able to access Nuku submissions, and the temporary portal allows marking to begin."
    },
    {
      question: "Do I need to apply separately for the two-day extension?",
      answer: "No. The two-day extension applies automatically. You do not need to submit a separate application for it."
    },
    {
      question: "Where can I find lecture slides?",
      answer: "Lecture slides and supporting resources will be linked on the Lecture Materials page as needed during the outage."
    },
    {
      question: "What should I do if a link does not work?",
      answer: "Please check the Announcements page first in case an updated link has been posted. If the link still does not work, contact the course team using your university email."
    },
    {
      question: "Where will official updates be sent?",
      answer: "Please continue checking your university email. We will return to Nuku once access is restored."
    },
    {
      question: "Who should I contact?",
      answer: "For urgent course-related matters, please contact the course team using your university email."
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
        <div className="bg-primary/10 p-3 rounded-full">
          <HelpCircle className="text-primary w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800">FAQ & Support</h2>
          <p className="text-slate-600 mt-1">
            Common questions about the temporary course arrangements.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-start gap-2">
              <span className="text-primary mt-1">Q:</span>
              {faq.question}
            </h3>
            <div className="text-slate-600 pl-6 flex items-start gap-2">
              <span className="text-slate-400 font-semibold mt-0.5">A:</span>
              <p className="leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-slate-800 mb-2">Still need help?</h3>
        <p className="text-slate-600 mb-4">If you cannot find the answer to your question here, please reach out to the course team.</p>
        <a href="mailto:psyc201@university.edu" className="inline-block bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 py-2 rounded-md transition-colors">
          Email Course Team
        </a>
      </div>
    </div>
  );
};

export default FAQ;
