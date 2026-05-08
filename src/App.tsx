import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Assessments from './pages/Assessments';
import Lectures from './pages/Lectures';
import Announcements from './pages/Announcements';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="lectures" element={<Lectures />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}

export default App;
