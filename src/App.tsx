import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PayPage from './pages/PayPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import { useEffect, useState } from 'react';

function AnimatedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                <PayPage />
              </AnimatedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <AnimatedRoute>
                <TestPage />
              </AnimatedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <AnimatedRoute>
                <ResultPage />
              </AnimatedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
