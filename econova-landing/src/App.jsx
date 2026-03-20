import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Footer from './components/layout/Footer';

const ProductsOverview = lazy(() => import('./sections/ProductsOverview'));
const BudgetDashboard = lazy(() => import('./sections/BudgetDashboard/BudgetDashboard'));
const VsmeDashboard = lazy(() => import('./sections/VsmeDashboard'));
const WhySection = lazy(() => import('./sections/WhySection'));
const CTASection = lazy(() => import('./sections/CTASection'));

const AIWorkstationsPage = lazy(() => import('./pages/AIWorkstationsPage'));
const EdgeSolutionsPage = lazy(() => import('./pages/EdgeSolutionsPage'));
const FormazioneAIPage = lazy(() => import('./pages/FormazioneAIPage'));

const SectionFallback = () => <div className="min-h-[50vh]" />;

/* ─── Landing Page (Home) ─── */
const LandingPage = () => (
  <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <ProductsOverview />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BudgetDashboard />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <VsmeDashboard />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <WhySection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </main>

    <Footer />
  </>
);

export default function App() {
  return (
    <div className="bg-white">
      <Suspense fallback={<SectionFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-workstations" element={<AIWorkstationsPage />} />
          <Route path="/edge-solutions" element={<EdgeSolutionsPage />} />
          <Route path="/formazione-ai" element={<FormazioneAIPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
