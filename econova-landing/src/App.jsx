import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, BarChart3, FileText, Shield, Zap, TrendingUp, PieChart, Leaf, Target, ChevronRight, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                <a href="#" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                        <span className="text-white text-sm font-bold">E</span>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-dark">
                        ECONOVA<span className="text-accent">AI</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted">
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

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
                <div className="max-w-4xl">
                    <div className="hero-el inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-accentLight text-accent text-sm font-medium mb-8">
                        <Zap className="w-4 h-4" />
                        AI-Powered Financial & ESG Tools
                    </div>

                    <h1 className="hero-el text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight text-dark mb-6">
                        Controllo di gestione{' '}
                        <span className="text-accent">intelligente</span>,{' '}
                        <br className="hidden lg:block" />
                        sostenibilità{' '}
                        <span className="italic font-medium text-muted">automatica.</span>
                    </h1>

                    <p className="hero-el text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
                        ECAI-Budget e Report VSME ESG: due piattaforme AI progettate per le PMI
                        che vogliono gestire budget e compliance ESG senza complessità.
                    </p>

                    <div className="hero-el flex flex-wrap gap-4">
                        <a href="#contact" className="btn-primary text-base">
                            Prenota una Demo <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#dashboard" className="btn-secondary text-base">
                            Esplora le Dashboard
                        </a>
                    </div>
                </div>

                {/* Floating stats cards */}
                <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[340px]">
                    <div className="float-animation glass-card-strong p-6 shadow-glass-lg mb-4">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Mensile</span>
                            <TrendingUp className="w-4 h-4 text-green-500" />
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

                    <div className="float-animation-delayed glass-card-strong p-6 shadow-glass-lg">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-muted uppercase tracking-wider">ESG Score</span>
                            <Leaf className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16">
                                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f0f0f0" strokeWidth="3" />
                                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0071e3" strokeWidth="3" strokeDasharray="78, 100" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-dark">78</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-dark">Rating: B+</div>
                                <div className="text-xs text-muted">VSME Compliant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── PRODUCTS OVERVIEW ─── */
const ProductsOverview = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".product-card", {
                scrollTrigger: { trigger: container.current, start: "top 75%" },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="section-padding bg-subtle">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">I nostri prodotti</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark">
                        Due strumenti. Un ecosistema.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ECAI-Budget Card */}
                    <div className="product-card glass-card-strong p-8 md:p-10 shadow-glass-lg group hover:shadow-glass-xl transition-shadow duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                            <BarChart3 className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">ECAI-Budget</h3>
                        <p className="text-muted leading-relaxed mb-6">
                            Controllo di gestione AI-driven. Analisi predittive dei costi,
                            gestione dinamica del budget e previsione dei flussi di cassa
                            alimentata dai tuoi dati reali.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Budget predittivo con machine learning",
                                "Analisi scostamenti in tempo reale",
                                "Cash flow forecasting automatico",
                                "KPI dashboard personalizzabile"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-dark/80">
                                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <ChevronRight className="w-3 h-3 text-accent" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#budget" className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                            Scopri ECAI-Budget <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* VSME ESG Card */}
                    <div className="product-card glass-card-strong p-8 md:p-10 shadow-glass-lg group hover:shadow-glass-xl transition-shadow duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                            <FileText className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">Report VSME ESG</h3>
                        <p className="text-muted leading-relaxed mb-6">
                            Generazione automatica del bilancio di sostenibilità VSME.
                            Compliance europea, raccolta dati guidata e report pronti
                            per gli stakeholder.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Compliance CSRD/VSME automatica",
                                "Raccolta dati ESG guidata da AI",
                                "Calcolo carbon footprint integrato",
                                "Report PDF/XBRL export ready"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-dark/80">
                                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <ChevronRight className="w-3 h-3 text-green-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#vsme" className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                            Scopri Report VSME <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── BUDGET DASHBOARD SECTION ─── */
const BudgetDashboard = () => {
    const container = useRef();
    const [activeTab, setActiveTab] = useState('overview');

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".budget-title", {
                scrollTrigger: { trigger: container.current, start: "top 70%" },
                y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
            });
            gsap.from(".budget-dash", {
                scrollTrigger: { trigger: container.current, start: "top 60%" },
                y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'analysis', label: 'Analisi Costi' },
        { id: 'forecast', label: 'Forecast' },
    ];

    return (
        <section ref={container} id="budget" className="section-padding bg-white relative overflow-hidden">
            {/* Subtle background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="budget-title max-w-2xl mb-12">
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">ECAI-Budget</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
                        Il tuo budget,
                        <br />in tempo reale.
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        Dashboard interattiva con analisi predittive, scostamenti automatici
                        e forecast AI. Tutto in un'unica vista.
                    </p>
                </div>

                {/* Dashboard Preview */}
                <div className="budget-dash dashboard-frame p-2 md:p-3">
                    {/* Title bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.04]">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <span className="text-xs font-mono text-muted ml-3">ecai-budget.econova.ai</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${activeTab === tab.id ? 'bg-accent text-white' : 'text-muted hover:text-dark hover:bg-black/[0.04]'}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="p-5 md:p-8">
                        {activeTab === 'overview' && <BudgetOverviewTab />}
                        {activeTab === 'analysis' && <BudgetAnalysisTab />}
                        {activeTab === 'forecast' && <BudgetForecastTab />}
                    </div>
                </div>
            </div>
        </section>
    );
};

const BudgetOverviewTab = () => (
    <div className="space-y-6">
        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Ricavi Totali", value: "€ 1.24M", change: "+8.2%", positive: true },
                { label: "Costi Operativi", value: "€ 842K", change: "-3.1%", positive: true },
                { label: "Margine Netto", value: "32.1%", change: "+2.4pp", positive: true },
                { label: "Cash Flow", value: "€ 398K", change: "+15.7%", positive: true },
            ].map((kpi, i) => (
                <div key={i} className="bg-subtle rounded-2xl p-5">
                    <div className="text-xs text-muted font-medium mb-2">{kpi.label}</div>
                    <div className="text-xl md:text-2xl font-bold text-dark">{kpi.value}</div>
                    <div className={`text-xs font-semibold mt-1 ${kpi.positive ? 'text-green-600' : 'text-red-500'}`}>
                        {kpi.change}
                    </div>
                </div>
            ))}
        </div>

        {/* Chart area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-subtle rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-dark">Andamento Budget vs Actual</span>
                    <span className="text-xs text-muted font-mono">Q1 2026</span>
                </div>
                {/* Simplified chart bars */}
                <div className="flex items-end gap-3 h-40">
                    {[
                        { budget: 65, actual: 58, label: "Gen" },
                        { budget: 70, actual: 72, label: "Feb" },
                        { budget: 60, actual: 55, label: "Mar" },
                        { budget: 75, actual: 68, label: "Apr" },
                        { budget: 80, actual: 78, label: "Mag" },
                        { budget: 72, actual: 70, label: "Giu" },
                        { budget: 85, actual: 82, label: "Lug" },
                        { budget: 78, actual: 80, label: "Ago" },
                        { budget: 90, actual: 88, label: "Set" },
                        { budget: 82, actual: 85, label: "Ott" },
                        { budget: 88, actual: 90, label: "Nov" },
                        { budget: 95, actual: 92, label: "Dic" },
                    ].map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full flex gap-0.5 items-end" style={{ height: '120px' }}>
                                <div className="flex-1 bg-accent/20 rounded-t-sm" style={{ height: `${d.budget}%` }} />
                                <div className="flex-1 bg-accent rounded-t-sm" style={{ height: `${d.actual}%` }} />
                            </div>
                            <span className="text-[10px] text-muted">{d.label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-accent/20" />
                        <span className="text-xs text-muted">Budget</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-accent" />
                        <span className="text-xs text-muted">Actual</span>
                    </div>
                </div>
            </div>

            {/* Side panel */}
            <div className="bg-subtle rounded-2xl p-6 flex flex-col justify-between">
                <div>
                    <span className="text-sm font-semibold text-dark">Distribuzione Costi</span>
                    <div className="mt-6 space-y-4">
                        {[
                            { label: "Personale", pct: 42, color: "bg-accent" },
                            { label: "Materiali", pct: 28, color: "bg-purple-500" },
                            { label: "Servizi", pct: 18, color: "bg-green-500" },
                            { label: "Altro", pct: 12, color: "bg-gray-400" },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-dark/70">{item.label}</span>
                                    <span className="font-mono text-muted">{item.pct}%</span>
                                </div>
                                <div className="h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.04]">
                    <div className="text-xs text-muted">Budget residuo Q1</div>
                    <div className="text-2xl font-bold text-dark">€ 156.200</div>
                </div>
            </div>
        </div>
    </div>
);

const BudgetAnalysisTab = () => (
    <div className="space-y-6">
        <div className="bg-subtle rounded-2xl p-6">
            <span className="text-sm font-semibold text-dark">Analisi Scostamenti per Centro di Costo</span>
            <div className="mt-6 space-y-4">
                {[
                    { label: "Produzione", budget: "€ 320K", actual: "€ 298K", delta: "-6.9%", positive: true },
                    { label: "Marketing", budget: "€ 85K", actual: "€ 92K", delta: "+8.2%", positive: false },
                    { label: "R&D", budget: "€ 150K", actual: "€ 145K", delta: "-3.3%", positive: true },
                    { label: "Amministrazione", budget: "€ 120K", actual: "€ 118K", delta: "-1.7%", positive: true },
                    { label: "Logistica", budget: "€ 95K", actual: "€ 102K", delta: "+7.4%", positive: false },
                ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-black/[0.03] last:border-0">
                        <span className="text-sm text-dark font-medium w-36">{row.label}</span>
                        <span className="text-sm text-muted font-mono">{row.budget}</span>
                        <span className="text-sm text-dark font-mono font-medium">{row.actual}</span>
                        <span className={`text-sm font-mono font-bold px-3 py-1 rounded-lg ${row.positive ? 'text-green-700 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                            {row.delta}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-subtle rounded-2xl p-6">
                <div className="text-sm font-semibold text-dark mb-4">Alert AI</div>
                <div className="space-y-3">
                    {[
                        { text: "Marketing ha superato il budget del 8.2%", type: "warning" },
                        { text: "Rischio overrun su Logistica: tendenza Q2", type: "alert" },
                        { text: "R&D sotto budget: possibilità riallocazione", type: "info" },
                    ].map((alert, i) => (
                        <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${
                            alert.type === 'warning' ? 'bg-yellow-50' : alert.type === 'alert' ? 'bg-red-50' : 'bg-blue-50'
                        }`}>
                            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                                alert.type === 'warning' ? 'bg-yellow-500' : alert.type === 'alert' ? 'bg-red-500' : 'bg-accent'
                            }`} />
                            <span className="text-xs text-dark/80">{alert.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-subtle rounded-2xl p-6">
                <div className="text-sm font-semibold text-dark mb-2">Efficienza Budget</div>
                <div className="text-5xl font-bold text-dark mt-4">94.2<span className="text-2xl text-muted">%</span></div>
                <div className="text-xs text-green-600 font-medium mt-2">+3.1% rispetto al trimestre precedente</div>
                <div className="mt-6 h-2 bg-black/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-green-500 rounded-full" style={{ width: '94.2%' }} />
                </div>
            </div>
        </div>
    </div>
);

const BudgetForecastTab = () => (
    <div className="space-y-6">
        <div className="bg-subtle rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-dark">Previsione Cash Flow — Prossimi 6 Mesi</span>
                <div className="flex items-center gap-2 text-xs">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Previsto</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent/30" /> Range</span>
                </div>
            </div>
            {/* Forecast wave */}
            <svg viewBox="0 0 600 150" className="w-full" preserveAspectRatio="none">
                {/* Confidence interval */}
                <path d="M0,90 C100,70 150,60 200,55 C250,50 300,45 350,50 C400,55 450,40 500,35 L500,80 C450,85 400,90 350,95 C300,100 250,95 200,90 C150,85 100,95 0,110 Z" fill="rgba(0,113,227,0.08)" />
                {/* Main line */}
                <path d="M0,100 C100,80 150,70 200,72 C250,74 300,68 350,70 C400,72 450,60 500,55" fill="none" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" />
                {/* Historical line */}
                <path d="M0,100 C30,95 60,92 100,80" fill="none" stroke="#0071e3" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.4" />
                {/* Data points */}
                {[[200, 72], [300, 68], [400, 72], [500, 55]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#0071e3" strokeWidth="2" />
                ))}
            </svg>
            <div className="flex justify-between mt-2 text-[10px] text-muted font-mono">
                {["Apr", "Mag", "Giu", "Lug", "Ago", "Set"].map(m => <span key={m}>{m}</span>)}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { label: "Ricavi Previsti Q2", value: "€ 1.38M", icon: TrendingUp, change: "+11.3%" },
                { label: "Rischio Liquidità", value: "Basso", icon: Shield, change: "Stabile" },
                { label: "ROI Previsto", value: "18.4%", icon: Target, change: "+2.1pp" },
            ].map((card, i) => (
                <div key={i} className="bg-subtle rounded-2xl p-5">
                    <card.icon className="w-5 h-5 text-accent mb-3" />
                    <div className="text-xs text-muted mb-1">{card.label}</div>
                    <div className="text-xl font-bold text-dark">{card.value}</div>
                    <div className="text-xs text-green-600 font-medium mt-1">{card.change}</div>
                </div>
            ))}
        </div>
    </div>
);

/* ─── VSME ESG DASHBOARD SECTION ─── */
const VsmeDashboard = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".vsme-title", {
                scrollTrigger: { trigger: container.current, start: "top 70%" },
                y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
            });
            gsap.from(".vsme-dash", {
                scrollTrigger: { trigger: container.current, start: "top 60%" },
                y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="vsme" className="section-padding bg-subtle relative overflow-hidden">
            <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-green-500/[0.03] rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="vsme-title max-w-2xl mb-12">
                    <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">Report VSME ESG</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
                        Sostenibilità,
                        <br />senza burocrazia.
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        Compila il tuo bilancio VSME in modo guidato. L'AI raccoglie, valida e
                        genera il report finale conforme alla normativa EU.
                    </p>
                </div>

                {/* VSME Dashboard Preview */}
                <div className="vsme-dash dashboard-frame p-2 md:p-3">
                    {/* Title bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.04]">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <span className="text-xs font-mono text-muted ml-3">ecai-vsme.econova.ai</span>
                        </div>
                    </div>

                    <div className="p-5 md:p-8 space-y-6">
                        {/* Progress header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-dark">Report VSME 2025</h3>
                                <p className="text-sm text-muted">Ultimo aggiornamento: 15 Mar 2026</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-dark">78%</div>
                                    <div className="text-xs text-muted">Completamento</div>
                                </div>
                                <div className="relative w-14 h-14">
                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f0f0f0" strokeWidth="3" />
                                        <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="78, 100" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* ESG Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { pillar: "Environmental", score: 82, items: ["Emissioni GHG Scope 1-2", "Consumi energetici", "Gestione rifiuti", "Risorse idriche"], color: "green", completedItems: 3 },
                                { pillar: "Social", score: 71, items: ["Diversità e inclusione", "Salute e sicurezza", "Formazione dipendenti", "Diritti umani"], color: "blue", completedItems: 2 },
                                { pillar: "Governance", score: 88, items: ["Etica aziendale", "Anti-corruzione", "Gestione rischi", "Data privacy"], color: "purple", completedItems: 4 },
                            ].map((p, i) => (
                                <div key={i} className="bg-subtle rounded-2xl p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-bold text-dark">{p.pillar}</span>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                                            p.color === 'green' ? 'bg-green-50 text-green-700' :
                                            p.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                                            'bg-purple-50 text-purple-700'
                                        }`}>{p.score}/100</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        {p.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-2.5">
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                                    j < p.completedItems
                                                        ? p.color === 'green' ? 'bg-green-500 border-green-500' :
                                                          p.color === 'blue' ? 'bg-blue-500 border-blue-500' :
                                                          'bg-purple-500 border-purple-500'
                                                        : 'border-gray-300 bg-white'
                                                }`}>
                                                    {j < p.completedItems && (
                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className={`text-xs ${j < p.completedItems ? 'text-dark' : 'text-muted'}`}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carbon footprint mini */}
                        <div className="bg-subtle rounded-2xl p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="text-sm font-semibold text-dark mb-1">Carbon Footprint Stimato</div>
                                    <div className="text-3xl font-bold text-dark">124.5 <span className="text-lg text-muted font-normal">tCO₂e</span></div>
                                    <div className="text-xs text-green-600 font-medium mt-1">-18.3% vs anno precedente</div>
                                </div>
                                {/* Mini breakdown */}
                                <div className="flex items-center gap-6">
                                    {[
                                        { label: "Scope 1", value: "32.1", pct: 26 },
                                        { label: "Scope 2", value: "58.4", pct: 47 },
                                        { label: "Scope 3", value: "34.0", pct: 27 },
                                    ].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-lg font-bold text-dark">{s.value}</div>
                                            <div className="text-[10px] text-muted">{s.label}</div>
                                            <div className="w-12 h-1 bg-black/[0.04] rounded-full mt-1.5 mx-auto overflow-hidden">
                                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${s.pct * 2}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── WHY SECTION ─── */
const WhySection = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".why-item", {
                scrollTrigger: { trigger: container.current, start: "top 70%" },
                y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const reasons = [
        { icon: Zap, title: "Setup in 48h", desc: "Nessuna infrastruttura complessa. Colleghi i tuoi dati e sei operativo in due giorni." },
        { icon: Shield, title: "GDPR & EU Compliant", desc: "Dati in cloud europeo. Privacy by design. Nessuna condivisione con terze parti." },
        { icon: PieChart, title: "AI Predittiva", desc: "Modelli di machine learning allenati su pattern finanziari e normative ESG italiane ed europee." },
        { icon: Target, title: "Per le PMI", desc: "Non un enterprise tool adattato. Costruito nativamente per la realtà delle piccole e medie imprese." },
    ];

    return (
        <section ref={container} id="dashboard" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Perché ECONOVA AI</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark">
                        Progettato per chi fa impresa.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, i) => (
                        <div key={i} className="why-item glass-card-strong p-8 shadow-card hover:shadow-elevated transition-shadow duration-500 group">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                                <r.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">{r.title}</h3>
                            <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
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
            gsap.from(".cta-content", {
                scrollTrigger: { trigger: container.current, start: "top 70%" },
                y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="contact" className="section-padding bg-subtle">
            <div className="max-w-4xl mx-auto">
                <div className="cta-content shimmer-border rounded-[32px] p-[1px]">
                    <div className="bg-white rounded-[31px] p-10 md:p-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-accent/10 text-accent text-sm font-medium mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Disponibile ora
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
                            Pronto a vedere i tuoi dati
                            <br />in modo nuovo?
                        </h2>
                        <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Prenota una demo gratuita di 30 minuti. Ti mostriamo come ECAI-Budget
                            e Report VSME possono trasformare la gestione della tua PMI.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:info@econova.ai" className="btn-primary text-base">
                                Prenota una Demo <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="mailto:info@econova.ai" className="btn-secondary text-base">
                                Contattaci
                            </a>
                        </div>
                        <p className="text-xs text-muted mt-6">Nessun impegno. Nessuna carta di credito.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── FOOTER ─── */
const Footer = () => {
    return (
        <footer className="bg-dark text-white/80 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-white text-sm font-bold">E</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">
                                ECONOVA<span className="text-accent">AI</span>
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            AI per il controllo di gestione e la sostenibilità delle PMI italiane.
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">Prodotti</div>
                            <div className="flex flex-col gap-3">
                                <a href="#budget" className="text-sm text-white/60 hover:text-white transition-colors">ECAI-Budget</a>
                                <a href="#vsme" className="text-sm text-white/60 hover:text-white transition-colors">Report VSME ESG</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-4">Azienda</div>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:info@econova.ai" className="text-sm text-white/60 hover:text-white transition-colors">Contatti</a>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <div>© 2026 ECONOVA AI S.r.l. — P.IVA IT 02814630410</div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                        <span className="font-mono">Tutti i sistemi operativi</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

/* ─── APP ─── */
export default function App() {
    return (
        <div className="bg-white text-dark selection:bg-accent/20 selection:text-dark relative min-h-screen">
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
