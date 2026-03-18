import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Footer from './components/layout/Footer';

const ProductsOverview = lazy(() => import('./sections/ProductsOverview'));
const BudgetDashboard = lazy(() => import('./sections/BudgetDashboard/BudgetDashboard'));
const VsmeDashboard = lazy(() => import('./sections/VsmeDashboard'));
const WhySection = lazy(() => import('./sections/WhySection'));
const CTASection = lazy(() => import('./sections/CTASection'));

const SectionFallback = () => <div className="min-h-[50vh]" />;

export default function App() {
  return (
    <div className="bg-white">
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
    </div>
  );
}
