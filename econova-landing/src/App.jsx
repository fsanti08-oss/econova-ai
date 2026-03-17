import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, BarChart3, FileText, Shield, Zap, TrendingUp, PieChart, Leaf, Target, ChevronRight, Menu, X, Droplets, Flame, Factory, Truck, Users, Database, Lightbulb, Recycle, Trees, Thermometer, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── ECONOVA LOGO (text-based) ─── */
const EconovaLogo = ({ className = "", white = false }) => (
    <a href="#" className={`flex items-center gap-0.5 font-extrabold text-xl sm:text-2xl tracking-tight ${className}`}>
        <span className={white ? 'text-white' : 'text-accent'}>ECONOVA</span>
        <span className={white ? 'text-white/70' : 'text-accentLime'}>-AI</span>
    </a>
);

/* ─── NAVBAR ─── */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-soft' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                <EconovaLogo />

                <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-muted">
                    <a href="#budget" className="hover:text-dark transition-colors">ECAI-Budget</a>
                    <a href="#vsme" className="hover:text-dark transition-colors">Report VSME</a>
                    <a href="#dashboard" className="hover:text-dark transition-colors">Dashboard</a>
                    <a href="#contact" className="btn-primary !px-6 !py-2.5 !text-sm">
                        Prenota Demo
                    </a>
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-6 py-6 flex flex-col gap-4">
                    <a href="#budget" onClick={() => setMobileOpen(false)} className="text-dark font-medium py-2">ECAI-Budget</a>
                    <a href="#vsme" onClick={() => setMobileOpen(false)} className="text-dark font-medium py-2">Report VSME</a>
                    <a href="#dashboard" onClick={() => setMobileOpen(false)} className="text-dark font-medium py-2">Dashboard</a>
                    <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center mt-2">Prenota Demo</a>
                </div>
            )}
        </nav>
    );
};

/* ─── HERO ─── */
const Hero = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-el", {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",
                delay: 0.3
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="hero-gradient min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
                <div className="max-w-4xl">
                    <h1 className="hero-el text-center lg:text-left text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight text-dark mb-4 sm:mb-6">
                        Controllo di gestione{' '}
                        <span className="text-accent">intelligente</span>,{' '}
                        <br className="hidden lg:block" />
                        sostenibilità{' '}
                        <span className="italic font-medium text-muted">automatica.</span>
                    </h1>

                    <p className="hero-el text-center lg:text-left text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10">
                        ECAI-Budget e Report VSME ESG: due piattaforme AI progettate per le PMI
                        che vogliono gestire budget e compliance ESG senza complessità.
                    </p>

                    <div className="hero-el flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
                        <a href="#contact" className="btn-primary text-base text-center">
                            Prenota una Demo <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#dashboard" className="btn-secondary text-base text-center">
                            Esplora le Dashboard
                        </a>
                    </div>
                </div>

                {/* Floating stats cards — desktop only */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[340px]">
                    {/* Budget card */}
                    <div className="float-animation glass-card-strong p-6 shadow-glass-lg mb-4">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Mensile</span>
                            <TrendingUp className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-3xl font-bold text-dark mb-1">€ 142.850</div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12.4%</span>
                            <span className="text-xs text-muted">vs mese precedente</span>
                        </div>
                        {/* Mini chart */}
                        <div className="mt-4 flex items-end gap-1 h-12">
                            {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 75, 90].map((h, i) => (
                                <div key={i} className="flex-1 rounded-sm bg-accent/20" style={{ height: `${h}%` }}>
                                    <div className="w-full rounded-sm bg-accent" style={{ height: `${Math.min(100, h + 10)}%`, opacity: i > 9 ? 1 : 0.4 + (i * 0.05) }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scope 1 & Scope 2 banners — replacing ESG Score card */}
                    <div className="float-animation-delayed glass-card-strong p-5 shadow-glass-lg">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono text-muted uppercase tracking-wider">Carbon Footprint</span>
                            <Leaf className="w-4 h-4 text-accent" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-accent/5 rounded-xl p-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Factory className="w-5 h-5 text-accent" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-muted">Scope 1 — Emissioni dirette</div>
                                    <div className="text-lg font-bold text-dark">32.1 <span className="text-xs font-normal text-muted">tCO₂e</span></div>
                                </div>
                                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-12%</span>
                            </div>
                            <div className="flex items-center gap-3 bg-accentLime/5 rounded-xl p-3">
                                <div className="w-10 h-10 rounded-lg bg-accentLime/15 flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="w-5 h-5 text-accentLime" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-muted">Scope 2 — Energia acquistata</div>
                                    <div className="text-lg font-bold text-dark">58.4 <span className="text-xs font-normal text-muted">tCO₂e</span></div>
                                </div>
                                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-22%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile floating cards */}
                <div className="lg:hidden mt-10 grid grid-cols-2 gap-3">
                    <div className="glass-card-strong p-4 shadow-glass">
                        <div className="flex items-center gap-2 mb-2">
                            <Factory className="w-4 h-4 text-accent" />
                            <span className="text-[10px] font-mono text-muted uppercase">Scope 1</span>
                        </div>
                        <div className="text-xl font-bold text-dark">32.1</div>
                        <div className="text-[10px] text-muted">tCO₂e • Emissioni dirette</div>
                    </div>
                    <div className="glass-card-strong p-4 shadow-glass">
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-accentLime" />
                            <span className="text-[10px] font-mono text-muted uppercase">Scope 2</span>
                        </div>
                        <div className="text-xl font-bold text-dark">58.4</div>
                        <div className="text-[10px] text-muted">tCO₂e • Energia acquistata</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── PRODUCTS OVERVIEW ─── */
const ProductsOverview = () => {
    return (
        <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Due piattaforme, infinite possibilità</h2>
                    <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">Gestisci budget e sostenibilità con l'intelligenza artificiale</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* ECAI-Budget Product Card */}
                    <div className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all duration-300 hover:shadow-glass-xl overflow-hidden relative group">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                                <BarChart3 className="w-4 h-4 text-accent" />
                                <span className="text-xs font-semibold text-accent">Controllo di Gestione</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">ECAI-Budget</h3>
                            <p className="text-muted mb-6 leading-relaxed">Automatizza il controllo di gestione con AI che analizza budget, costi e flussi di cassa in tempo reale.</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Budget vs Actual in tempo reale</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Forecast intelligenti per previsioni accurate</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Brain className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Anomalie e inefficienze identificate automaticamente</span>
                                </div>
                            </div>

                            <a href="#budget" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                                Scopri di più <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Report VSME ESG Product Card */}
                    <div className="fade-in-up delay-200 glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all duration-300 hover:shadow-glass-xl overflow-hidden relative group">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                                <Leaf className="w-4 h-4 text-accent" />
                                <span className="text-xs font-semibold text-accent">Sostenibilità</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">Report VSME ESG</h3>
                            <p className="text-muted mb-6 leading-relaxed">Genera report ESG standardizzati secondo le direttive CSRD per comunicare la sostenibilità dell'azienda.</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <Trees className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Calcolo automatico impronta ecologica e carbon footprint</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Report compliant con standard CSRD</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-dark">Audit trail completo per compliance</span>
                                </div>
                            </div>

                            <a href="#vsme" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                                Scopri di più <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── BUDGET DASHBOARD ─── */
const BudgetDashboard = () => {
    const container = useRef();
    const [activeTab, setActiveTab] = useState('overview');

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".dashboard-el", {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".dashboard-container",
                    start: "top 65%",
                    toggleActions: "play none none none"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const tabs = [
        { id: 'overview', label: 'Panoramica Budget' },
        { id: 'analysis', label: 'Analisi Costi' },
        { id: 'forecast', label: 'Forecast' }
    ];

    return (
        <section ref={container} id="budget" className="py-16 sm:py-24 md:py-28 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="dashboard-el mb-8 sm:mb-12 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">ECAI-Budget</h2>
                    <p className="text-muted text-base sm:text-lg">Controllo di gestione intelligente in tempo reale</p>
                </div>

                <div className="dashboard-container dashboard-el glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden">
                    {/* Mac Window Chrome */}
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — ECAI-Budget</span>
                    </div>

                    <div className="p-6 sm:p-8 md:p-10">
                    {/* Dashboard Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-dark">www.econova.ai</h3>
                            <p className="text-sm text-muted mt-1">Gestione budget mensile — Marzo 2024</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                            <div className="w-2 h-2 bg-[#0071e3] rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-[#0071e3]">Connesso</span>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap sm:flex-nowrap border-b border-black/5 pb-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'bg-[#0071e3] text-white'
                                        : 'text-muted hover:text-dark bg-transparent'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[500px]">
                        {activeTab === 'overview' && <BudgetOverviewTab />}
                        {activeTab === 'analysis' && <BudgetAnalysisTab />}
                        {activeTab === 'forecast' && <BudgetForecastTab />}
                    </div>
                    </div>{/* end padding wrapper */}
                </div>
            </div>
        </section>
    );
};

/* ─── BUDGET OVERVIEW TAB ─── */
const BudgetOverviewTab = () => (
    <div className="space-y-8">
        {/* KPI Cards — horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-hide">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Totale</span>
                    <BarChart3 className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">€ 842K</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +8.2%
                </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">Speso</span>
                    <TrendingUp className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">€ 756K</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                    89.8%
                </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">Disponibile</span>
                    <PieChart className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">€ 86K</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    10.2%
                </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">EBIT</span>
                    <Zap className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">€ 186K</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +5.8%
                </div>
            </div>
        </div>

        {/* Budget Distribution Chart */}
        <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
            <h4 className="font-semibold text-dark mb-6">Distribuzione Budget per Centro di Costo</h4>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-dark">Costi Industriali</span>
                        <span className="text-sm font-semibold text-[#0071e3]">€ 520K</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0071e3] h-full rounded-full" style={{ width: '61.7%' }} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-dark">Costi Commerciali</span>
                        <span className="text-sm font-semibold text-purple-500">€ 195K</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '23.2%' }} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-dark">Costi Amministrativi</span>
                        <span className="text-sm font-semibold text-pink-500">€ 127K</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-pink-500 h-full rounded-full" style={{ width: '15.1%' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ─── BUDGET ANALYSIS TAB ─── */
const BudgetAnalysisTab = () => {
    const [expandedCategory, setExpandedCategory] = useState('industrial');

    const categories = {
        industrial: {
            name: 'Costi Industriali',
            total: '€520K',
            items: [
                { label: 'Materie prime', value: '€185K', budget: '€190K', delta: '-2.6%', positive: true },
                { label: 'Manodopera diretta', value: '€142K', budget: '€138K', delta: '+2.9%', positive: false },
                { label: 'Energia e utilities', value: '€98K', budget: '€105K', delta: '-6.7%', positive: true },
                { label: 'Manutenzione impianti', value: '€95K', budget: '€87K', delta: '+9.2%', positive: false }
            ]
        },
        commercial: {
            name: 'Costi Commerciali',
            total: '€195K',
            items: [
                { label: 'Marketing e pubblicità', value: '€72K', budget: '€65K', delta: '+10.8%', positive: false },
                { label: 'Rete vendita', value: '€68K', budget: '€70K', delta: '-2.9%', positive: true },
                { label: 'Logistica e trasporti', value: '€55K', budget: '€60K', delta: '-8.3%', positive: true }
            ]
        },
        admin: {
            name: 'Costi Amministrativi',
            total: '€127K',
            items: [
                { label: 'Personale amministrativo', value: '€78K', budget: '€80K', delta: '-2.5%', positive: true },
                { label: 'Consulenze professionali', value: '€32K', budget: '€28K', delta: '+14.3%', positive: false },
                { label: 'IT e infrastruttura', value: '€17K', budget: '€19K', delta: '-10.5%', positive: true }
            ]
        }
    };

    const alerts = [
        { type: 'warning', text: 'Marketing ha superato il budget del 10.8% — valutare riallocazione' },
        { type: 'alert', text: 'Manutenzione impianti: +9.2% oltre budget, verificare ordini Q2' },
        { type: 'info', text: 'Energia sotto budget: -6.7%, risparmi da efficientamento' }
    ];

    return (
        <div className="space-y-8">
            {/* Cost Categories */}
            <div className="space-y-4">
                {Object.entries(categories).map(([key, category]) => (
                    <div key={key} className="border border-black/5 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                            className="w-full px-6 py-4 bg-gradient-to-r from-white to-blue-50 hover:to-blue-100 transition-all flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <ChevronRight className={`w-5 h-5 text-[#0071e3] transition-transform ${expandedCategory === key ? 'rotate-90' : ''}`} />
                                <div className="text-left">
                                    <h4 className="font-semibold text-dark">{category.name}</h4>
                                    <p className="text-sm text-muted">Totale: {category.total}</p>
                                </div>
                            </div>
                        </button>

                        {expandedCategory === key && (
                            <div className="px-6 py-4 bg-white space-y-3 border-t border-black/5">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-dark text-sm">{item.label}</p>
                                            <p className="text-xs text-muted">Budget: {item.budget}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-dark text-sm">{item.value}</p>
                                            <p className={`text-xs font-medium ${item.positive ? 'text-green-600' : 'text-orange-600'}`}>
                                                {item.delta}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Alert AI Section */}
            <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                    <Brain className="w-5 h-5 text-[#0071e3]" />
                    <h4 className="font-semibold text-dark">Alert AI</h4>
                </div>

                <div className="space-y-3">
                    {alerts.map((alert, i) => {
                        let bgColor = 'bg-blue-50';
                        let textColor = 'text-[#0071e3]';
                        let dotColor = 'bg-[#0071e3]';

                        if (alert.type === 'warning') {
                            bgColor = 'bg-orange-50';
                            textColor = 'text-orange-700';
                            dotColor = 'bg-orange-500';
                        } else if (alert.type === 'alert') {
                            bgColor = 'bg-red-50';
                            textColor = 'text-red-700';
                            dotColor = 'bg-red-500';
                        }

                        return (
                            <div key={i} className={`${bgColor} rounded-lg p-4 flex items-start gap-3`}>
                                <div className={`w-2.5 h-2.5 ${dotColor} rounded-full flex-shrink-0 mt-1.5`} />
                                <p className={`${textColor} text-sm font-medium`}>{alert.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Efficienza Budget */}
            <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
                <h4 className="font-semibold text-dark mb-6">Efficienza Budget</h4>
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-dark">Utilizzo Totale</span>
                            <span className="text-lg font-bold text-[#0071e3]">89.8%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#0071e3]/60"
                                style={{ width: '89.8%' }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                            <p className="text-xs text-muted mb-1">Margine Disponibile</p>
                            <p className="font-bold text-[#0071e3]">10.2%</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg text-center">
                            <p className="text-xs text-muted mb-1">Risparmi Realizzati</p>
                            <p className="font-bold text-green-600">€ 45K</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg text-center">
                            <p className="text-xs text-muted mb-1">Sforamento</p>
                            <p className="font-bold text-orange-600">€ 12K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── BUDGET FORECAST TAB ─── */
const BudgetForecastTab = () => (
    <div className="space-y-8">
        {/* Forecast Chart */}
        <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
            <h4 className="font-semibold text-dark mb-6">Budget Forecast — Q2 2024</h4>

            <svg viewBox="0 0 800 300" className="w-full h-auto mb-6">
                {/* Grid */}
                {[0, 1, 2, 3, 4].map(i => (
                    <line key={`hline-${i}`} x1="60" y1={30 + i * 60} x2="750" y2={30 + i * 60} stroke="#e5e7eb" strokeWidth="1" />
                ))}
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <line key={`vline-${i}`} x1={60 + i * 140} y1="20" x2={60 + i * 140} y2="280" stroke="#e5e7eb" strokeWidth="1" />
                ))}

                {/* X-axis labels */}
                <text x="60" y="300" textAnchor="middle" className="text-xs fill-muted">Apr</text>
                <text x="200" y="300" textAnchor="middle" className="text-xs fill-muted">Mag</text>
                <text x="340" y="300" textAnchor="middle" className="text-xs fill-muted">Giu</text>
                <text x="480" y="300" textAnchor="middle" className="text-xs fill-muted">Lug</text>
                <text x="620" y="300" textAnchor="middle" className="text-xs fill-muted">Ago</text>
                <text x="750" y="300" textAnchor="middle" className="text-xs fill-muted">Set</text>

                {/* Y-axis label */}
                <text x="20" y="160" textAnchor="middle" className="text-xs fill-muted">€800K</text>

                {/* Expected (solid line) */}
                <polyline
                    points="60,200 200,160 340,180 480,140 620,120 750,100"
                    fill="none"
                    stroke="#0071e3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Data points for Expected */}
                {[{x: 60, y: 200}, {x: 200, y: 160}, {x: 340, y: 180}, {x: 480, y: 140}, {x: 620, y: 120}, {x: 750, y: 100}].map((p, i) => (
                    <circle key={`dot-expected-${i}`} cx={p.x} cy={p.y} r="4" fill="white" stroke="#0071e3" strokeWidth="2" />
                ))}

                {/* Actual (dashed line) */}
                <polyline
                    points="60,220 200,190 340,210 480,175 620,155 750,130"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Data points for Actual */}
                {[{x: 60, y: 220}, {x: 200, y: 190}, {x: 340, y: 210}, {x: 480, y: 175}, {x: 620, y: 155}, {x: 750, y: 130}].map((p, i) => (
                    <circle key={`dot-actual-${i}`} cx={p.x} cy={p.y} r="3.5" fill="#60a5fa" />
                ))}
            </svg>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-[#0071e3]" />
                    <span className="text-sm text-muted">Previsto</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-[#60a5fa]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #60a5fa 0, #60a5fa 2px, transparent 2px, transparent 5px)' }} />
                    <span className="text-sm text-muted">Actual</span>
                </div>
            </div>
        </div>

        {/* Forecast Metrics Cards — horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible scrollbar-hide">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">Ricavi Previsti Q2</span>
                    <TrendingUp className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">€ 1.38M</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +11.3%
                </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">Margini Previsti</span>
                    <BarChart3 className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">34.2%</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +2.8pp
                </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">ROI Previsto</span>
                    <Zap className="w-4 h-4 text-[#0071e3]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-dark">18.4%</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +2.1pp
                </div>
            </div>
        </div>
    </div>
);

/* ─── VSME DASHBOARD ─── */
const VsmeDashboard = () => {
    const container = useRef();
    const [activeModule, setActiveModule] = useState('forza-lavoro');

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".vsme-el", {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".vsme-container",
                    start: "top 65%",
                    toggleActions: "play none none none"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const modules = [
        { id: 'forza-lavoro', name: 'Forza Lavoro', icon: Users, pct: 42 },
        { id: 'efficienza-energetica', name: 'Efficienza Energetica', icon: Flame, pct: 35 },
        { id: 'acqua', name: 'Acqua', icon: Droplets, pct: 28 },
        { id: 'rifiuti', name: 'Rifiuti', icon: Recycle, pct: 18 },
        { id: 'biodiversita', name: 'Biodiversità', icon: Trees, pct: 12 },
        { id: 'refrigeranti', name: 'Refrigeranti', icon: Thermometer, pct: 8 }
    ];

    const moduleData = {
        'forza-lavoro': {
            title: 'Forza Lavoro',
            subtitle: 'Gestione dipendenti, formazione e welfare aziendale',
            icon: Users,
            metrics: [
                { label: 'Dipendenti', value: '245', unit: 'in organico', status: 'normal' },
                { label: 'Ore Formazione', value: '32h', unit: 'per dipendente/anno', status: 'good' },
                { label: 'Gender Diversity', value: '42%', unit: 'donne in azienda', status: 'good' }
            ]
        },
        'efficienza-energetica': {
            title: 'Efficienza Energetica',
            subtitle: 'Ottimizzazione consumi ed energie rinnovabili',
            icon: Flame,
            metrics: [
                { label: 'Consumo Totale', value: '450 MWh', unit: 'al mese', status: 'normal' },
                { label: 'Rinnovabili', value: '28%', unit: 'della produzione', status: 'good' },
                { label: 'Riduzione', value: '-12%', unit: 'vs anno precedente', status: 'good' }
            ]
        },
        acqua: {
            title: 'Acqua',
            subtitle: 'Monitoraggio consumi idrici e compliance',
            icon: Droplets,
            metrics: [
                { label: 'Consumo Totale', value: '2,450 m³', unit: 'al mese', status: 'normal' },
                { label: 'Riciclo', value: '34%', unit: "dell'acqua utilizzata", status: 'good' },
                { label: 'Conformità', value: 'ISO 14001', unit: 'certificazione attiva', status: 'good' }
            ]
        },
        rifiuti: {
            title: 'Rifiuti',
            subtitle: 'Tracciamento e smaltimento responsabile',
            icon: Recycle,
            metrics: [
                { label: 'Rifiuti Totali', value: '156 ton', unit: 'al trimestre', status: 'normal' },
                { label: 'Recupero', value: '68%', unit: 'dei rifiuti', status: 'good' },
                { label: 'Conformità', value: 'EMAS', unit: 'registrazione valida', status: 'good' }
            ]
        },
        biodiversita: {
            title: 'Biodiversità',
            subtitle: 'Impatto ambientale e tutela ecosistemi',
            icon: Trees,
            metrics: [
                { label: 'Area Protetta', value: '12 ha', unit: 'terreni aziendali', status: 'normal' },
                { label: 'Specie Monitorate', value: '24', unit: 'nella zona', status: 'good' },
                { label: 'Piano Tutela', value: 'Attivo', unit: 'in corso', status: 'good' }
            ]
        },
        refrigeranti: {
            title: 'Refrigeranti',
            subtitle: 'Monitoraggio gas refrigeranti e F-gas',
            icon: Thermometer,
            metrics: [
                { label: 'Gas Totali', value: '8.2 kg', unit: 'in uso', status: 'normal' },
                { label: 'GWP Medio', value: '1,430', unit: 'CO₂ equivalente', status: 'good' },
                { label: 'Perdite', value: '0.3%', unit: 'tasso annuo', status: 'good' }
            ]
        }
    };

    const currentData = moduleData[activeModule] || moduleData['forza-lavoro'];
    const completionTotal = Math.round(modules.reduce((sum, m) => sum + m.pct, 0) / modules.length);

    return (
        <section ref={container} id="vsme" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="vsme-el mb-8 sm:mb-12 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">Report VSME ESG</h2>
                    <p className="text-muted text-base sm:text-lg">Sostenibilità e compliance ESG semplificate</p>
                </div>

                <div className="vsme-container glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden">
                    {/* Mac Window Chrome */}
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — VSME Report</span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch p-6 sm:p-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-3">
                        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                            <h4 className="font-semibold text-dark mb-4 text-sm">Moduli ESG</h4>
                            <div className="space-y-2">
                                {modules.map(module => {
                                    const ModuleIcon = module.icon;
                                    return (
                                        <button
                                            key={module.id}
                                            onClick={() => setActiveModule(module.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                                                activeModule === module.id
                                                    ? 'bg-accent text-white shadow-lg'
                                                    : 'bg-gray-50 text-dark hover:bg-gray-100'
                                            }`}
                                        >
                                            <ModuleIcon className="w-4 h-4 flex-shrink-0" />
                                            <span className="flex-1 text-left">{module.name}</span>
                                            <span className={`text-xs font-bold ${activeModule === module.id ? 'text-white' : 'text-accent'}`}>
                                                {module.pct}%
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Overall Progress */}
                        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                            <h4 className="font-semibold text-dark mb-4 text-sm">Completamento Totale</h4>
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-2xl font-bold text-accent">{completionTotal}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-accent to-accentLime h-full rounded-full transition-all duration-300"
                                        style={{ width: `${completionTotal}%` }}
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-muted">Implementazione compliance CSRD</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Header Card */}
                        <div className="bg-gradient-to-r from-accent to-accentLime rounded-2xl p-8 sm:p-10 text-white shadow-glass-lg overflow-hidden relative">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-white/20 rounded-xl">
                                        {React.createElement(currentData.icon, { className: 'w-8 h-8' })}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{currentData.title}</h3>
                                        <p className="text-white/90">{currentData.subtitle}</p>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                                    <Target className="w-4 h-4" />
                                    Modulo attivo
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {currentData.metrics.map((metric, i) => (
                                <div key={i} className="bg-white rounded-xl border border-black/5 p-6 shadow-glass hover:shadow-glass-lg transition-shadow">
                                    <p className="text-xs text-muted uppercase tracking-wider font-mono mb-2">{metric.label}</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-dark mb-1">{metric.value}</p>
                                    <p className="text-xs text-muted">{metric.unit}</p>
                                </div>
                            ))}
                        </div>

                        {/* Compliance Status */}
                        <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8 shadow-glass">
                            <h4 className="font-semibold text-dark mb-6">Status Compliance</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-green-600" />
                                        <span className="text-sm font-medium text-dark">CSRD — Compliance verificata</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-[#0071e3]" />
                                        <span className="text-sm font-medium text-dark">Report Audit — Pronto per esportazione</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-[#0071e3]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>{/* end grid padding wrapper */}
                </div>
            </div>
        </section>
    );
};

/* ─── WHY SECTION ─── */
const WhySection = () => {
    const reasons = [
        {
            icon: Brain,
            title: 'AI Intelligente',
            desc: 'Machine Learning che impara dai tuoi dati e migliora continuamente le previsioni e le analisi.'
        },
        {
            icon: Zap,
            title: 'Tempo Reale',
            desc: 'Dashboard aggiornate in diretta con tutti i dati finanziari e ESG della tua azienda.'
        },
        {
            icon: Target,
            title: 'User-Friendly',
            desc: 'Interfaccia intuitiva pensata per PMI che non hanno un data team interno.'
        },
        {
            icon: Shield,
            title: 'Secure & Compliant',
            desc: 'Hosted in EU con crittografia end-to-end e compliance a tutti gli standard internazionali.'
        },
        {
            icon: TrendingUp,
            title: 'Scalabile',
            desc: 'Cresce con la tua azienda senza complessità di implementazione o training.'
        },
        {
            icon: Lightbulb,
            title: 'Supporto Dedicato',
            desc: 'Team di esperti a supporto per implementazione, training e ottimizzazione continua.'
        }
    ];

    return (
        <section id="dashboard" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-white to-accentLight/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Perchè ECONOVA-AI?</h2>
                    <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">6 motivi per scegliere la nostra piattaforma</p>
                </div>

                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
                    {reasons.map((reason, i) => {
                        const ReasonIcon = reason.icon;
                        return (
                            <div key={i} className="fade-in-up glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-all hover:shadow-glass-lg min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                    <ReasonIcon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{reason.title}</h3>
                                <p className="text-muted text-sm sm:text-base leading-relaxed">{reason.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ─── CTA SECTION ─── */
const CTASection = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".cta-el", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".cta-container",
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="contact" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
                <h2 className="cta-el text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight">
                    Trasforma il tuo Controllo di Gestione
                </h2>
                <p className="cta-el text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                    Scopri come ECAI-Budget e Report VSME ESG possono automatizzare il tuo budget e assicurare la compliance ESG.
                </p>

                <div className="cta-container flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <a href="#contact" className="cta-el btn-primary text-base px-8 py-3">
                        Prenota una Demo <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#" className="cta-el border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-2.5 rounded-xl font-semibold transition-all text-base">
                        Scarica Documentazione
                    </a>
                </div>
            </div>
        </section>
    );
};

/* ─── FOOTER ─── */
const Footer = () => (
    <footer className="bg-white border-t border-black/5 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <div className="mb-6">
                        <EconovaLogo />
                    </div>
                    <p className="text-muted text-sm mb-6">Piattaforme AI per il controllo di gestione e la sostenibilità delle PMI.</p>

                    {/* NVIDIA Badge */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/nvidia-badge.svg"
                            alt="NVIDIA Inception Program"
                            className="h-12 object-contain"
                        />
                        <span className="text-xs text-muted">Member of NVIDIA<br />Inception Program</span>
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-semibold text-dark mb-4 text-sm uppercase tracking-wider">Prodotti</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#budget" className="text-muted hover:text-dark transition-colors">ECAI-Budget</a></li>
                        <li><a href="#vsme" className="text-muted hover:text-dark transition-colors">Report VSME ESG</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">FAQ</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-dark mb-4 text-sm uppercase tracking-wider">Azienda</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Chi Siamo</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Blog</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Carriere</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Contatti</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-semibold text-dark mb-4 text-sm uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">Cookie Policy</a></li>
                        <li><a href="#" className="text-muted hover:text-dark transition-colors">GDPR</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-black/5 pt-8 sm:pt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-xs sm:text-sm">© 2024 ECONOVA. Tutti i diritti riservati.</p>
                    <div className="flex items-center gap-6 text-muted">
                        <a href="#" className="hover:text-dark transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1 13h2.5V8h-2.5v14z"/></svg>
                        </a>
                        <a href="#" className="hover:text-dark transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.87.39-1.8.65-2.77.77 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.63-2.14-10.03-5.08-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.4 3.3 4.5 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.7 0-.21 0-.42-.01-.62.94-.68 1.76-1.53 2.41-2.5z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

/* ─── MAIN APP ─── */
export default function App() {
    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <ProductsOverview />
            <BudgetDashboard />
            <VsmeDashboard />
            <WhySection />
            <CTASection />
            <Footer />
        </div>
    );
}
