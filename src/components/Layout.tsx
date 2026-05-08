
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Calendar, MessageSquare, HelpCircle, Home } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/assessments', label: 'Assessments', icon: <Calendar size={18} /> },
    { path: '/lectures', label: 'Lecture Materials', icon: <BookOpen size={18} /> },
    { path: '/announcements', label: 'Announcements', icon: <MessageSquare size={18} /> },
    { path: '/faq', label: 'FAQ / Support', icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-primary text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">PSYC201: Course Materials</h1>
          <p className="mt-2 text-primary-100 opacity-90">Temporary Backup Site</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-8">

        {/* Sidebar Navigation */}
        <nav className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden sticky top-8">
            <div className="p-4 bg-slate-100 border-b border-slate-200">
              <h2 className="font-semibold text-slate-700">Navigation</h2>
            </div>
            <ul className="divide-y divide-slate-100">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ${location.pathname === item.path
                        ? 'bg-blue-50 text-primary font-medium border-l-4 border-primary'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary border-l-4 border-transparent'
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">Important Note</p>
            <p>This is a temporary mirror. Official communication continues via university email.</p>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 min-h-[500px]">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} PSYC201 Course Team. All rights reserved.</p>
          <p className="mt-2">For urgent matters, please use your university email.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
