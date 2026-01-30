import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const DashboardDark = React.lazy(() => import('./pages/DashboardDark'));
const DashboardLight = React.lazy(() => import('./pages/DashboardLight'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#191C27] text-white flex items-center justify-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardDark />} />
        <Route path="/light" element={<DashboardLight />} />
      </Routes>
    </Suspense>
  );
}

export default App;