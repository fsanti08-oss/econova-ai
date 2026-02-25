import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Activity, CircleDot, MousePointer2, Play, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[3rem] px-8 py-4 flex items-center justify-between gap-12 border ${scrolled ? 'bg-[#0A0A14]/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'} w-[90%] md:w-auto`}>
            <div className="text-xl font-bold font-heading tracking-tight text-white flex items-center gap-2 relative z-20">
                ECONOVA<span className="text-accent">-AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ghost/80">
                <div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors py-2">
                    Servizi <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0A0A14]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all translate-y-4 group-hover:translate-y-0 min-w-[240px] flex flex-col gap-1 shadow-2xl">
                        <a href="#" className="px-4 py-3 hover:bg-white/5 text-white rounded-xl transition-colors flex items-center justify-between">
                            <span>ECAI-BUDGET</span>
                            <Activity className="w-4 h-4 text-accent" />
                        </a>
                        <a href="#" className="px-4 py-3 hover:bg-white/5 text-white rounded-xl transition-colors flex items-center justify-between">
                            <span>ECAI-VSME</span>
                            <CircleDot className="w-4 h-4 text-accent" />
                        </a>
                        <div className="h-px bg-white/10 my-1 mx-2"></div>
                        <a href="#" className="px-4 py-2 hover:bg-white/5 text-white/50 text-xs rounded-xl transition-colors text-center uppercase tracking-widest">
                            Tutti i servizi
                        </a>
                    </div>
                </div>
                <a href="#philosophy" className="hover:text-white transition-colors">Filosofia</a>
                <a href="#protocol" className="hover:text-white transition-colors">Protocollo</a>
            </div>
            <button className="magnetic-btn bg-accent text-white px-6 py-2.5 rounded-[2rem] text-sm font-semibold relative hidden md:block group border border-accent/50 hover:border-accent">
                <span className="relative z-10">Prenota Demo</span>
                <span className="hover-bg bg-white/20"></span>
            </button>
        </nav>
    );
};

const Hero = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".hero-elem", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                    alt="Bioluminescent AI Background"
                    className="w-full h-full object-cover opacity-50 scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/70 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/90 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-5xl text-left w-full">
                <div className="hero-elem font-mono text-accent text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(123,97,255,0.8)]"></span>
                    Sustainable AI Solutions for SMEs
                </div>
                <h1 className="hero-elem text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tighter text-white m-0 flex flex-col">
                    <span className="font-heading font-bold mb-2 md:mb-0">Intelligenza oltre</span>
                    <span className="font-drama italic text-accent pr-4">l'Evoluzione.</span>
                </h1>
                <p className="hero-elem mt-8 text-lg md:text-xl text-ghost/70 max-w-2xl font-light leading-relaxed">
                    Strumenti AI di precisione per il controllo di gestione e il bilancio di sostenibilità.
                    Costruito per le PMI che non seguono le regole, ma le riscrivono.
                </p>
                <div className="hero-elem mt-12">
                    <button className="magnetic-btn bg-white text-darkText px-8 py-4 rounded-[3rem] text-lg font-bold flex items-center gap-3 group">
                        <span className="relative z-10 flex items-center gap-2">Inizia il Protocollo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        <span className="hover-bg bg-accent"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

const ShufflerCard = () => {
    const [order, setOrder] = useState([0, 1, 2]);
    const labels = [
        { title: "Analisi Costi", value: "-14%", color: "text-red-400" },
        { title: "Previsione Ricavi", value: "+22%", color: "text-green-400" },
        { title: "Margini Reali", value: "31.4%", color: "text-white" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center perspective-[1000px]">
            {order.map((realIndex, visualPos) => {
                // visualPos 0 is bottom/back, 2 is top/front
                const isFront = visualPos === 2;
                const scale = 0.85 + (visualPos * 0.075);
                const translateY = (2 - visualPos) * -20;
                const opacity = 0.4 + (visualPos * 0.3);
                const zIndex = visualPos;

                return (
                    <div
                        key={realIndex}
                        className="absolute w-4/5 md:w-full max-w-[280px] bg-[#111118] border border-white/10 rounded-[2rem] p-6 shadow-2xl transition-all duration-[800ms] shadow-black/50"
                        style={{
                            transform: `scale(${scale}) translateY(${translateY}px)`,
                            opacity,
                            zIndex,
                            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }}
                    >
                        <div className="text-xs font-mono text-ghost/50 uppercase tracking-wider mb-4">ECAI-BUDGET</div>
                        <div className="font-heading font-semibold text-lg text-white mb-2">{labels[realIndex].title}</div>
                        <div className={`font-mono text-3xl font-bold ${labels[realIndex].color}`}>{labels[realIndex].value}</div>
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const fullText = "Analisi parametri ESG in corso...\n> Consumi energetici verificati.\n> Generazione report VSME...\n> Allineamento tassonomia EU: COMPLETATO.";
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length + 20) index = 0; // Pause then restart
        }, 60);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="bg-[#111118] border border-white/10 rounded-[2rem] h-64 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-center z-10">
                <div className="text-xs font-mono text-ghost/50 uppercase tracking-wider">ECAI-VSME</div>
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live Feed</span>
                </div>
            </div>
            <div className="font-mono text-sm leading-relaxed text-ghost/80 mt-4 whitespace-pre-wrap z-10 flex-grow pt-4">
                {text}<span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span>
            </div>
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
    );
};

const SchedulerCard = () => {
    const days = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const cellRef = useRef(null);
    const [activeCell, setActiveCell] = useState(-1);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Move to cell
            tl.to(cursorRef.current, { x: 120, y: 70, duration: 1, ease: "power2.inOut" })
                // Click
                .add(() => setIsClicking(true))
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .add(() => setActiveCell(3)) // Activate 'G'
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .add(() => setIsClicking(false))
                .to(cursorRef.current, { x: 180, y: 140, duration: 0.8, ease: "power2.inOut", delay: 0.5 })
                // Click save
                .add(() => setIsClicking(true))
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(".save-btn", { scale: 0.95, duration: 0.1 })
                .to(".save-btn", { scale: 1, backgroundColor: "#7B61FF", color: "#fff", duration: 0.1 })
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .add(() => setIsClicking(false))
                // Reset
                .to(cursorRef.current, { autoAlpha: 0, duration: 0.3, delay: 0.5 })
                .add(() => {
                    setActiveCell(-1);
                    gsap.set(".save-btn", { backgroundColor: "transparent", color: "rgba(240,239,244,0.5)", clearProps: "all" });
                })
                .to(cursorRef.current, { x: 0, y: 0, autoAlpha: 1, duration: 0 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#111118] border border-white/10 rounded-[2rem] h-64 p-6 shadow-2xl relative">
            <div className="text-xs font-mono text-ghost/50 uppercase tracking-wider mb-6">Automazioni Su Misura</div>

            <div className="grid grid-cols-7 gap-2 mb-8">
                {days.map((day, i) => (
                    <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center font-mono text-xs transition-colors duration-300 ${activeCell === i ? 'bg-accent text-white shadow-[0_0_15px_rgba(123,97,255,0.3)]' : 'bg-white/5 text-ghost/30 border border-white/5'}`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-auto absolute bottom-6 right-6">
                <div className="save-btn px-4 py-2 rounded-xl border border-white/10 text-xs font-mono text-ghost/50 transition-colors">
                    Protocol_Run
                </div>
            </div>

            <div
                ref={cursorRef}
                className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-lg"
                style={{ filter: isClicking ? 'drop-shadow(0 0 2px rgba(123,97,255,1))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}
            >
                <MousePointer2 className="w-6 h-6 text-white fill-white/20" />
            </div>
        </div>
    );
};

const Features = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".feat-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="py-32 px-6 md:px-16 bg-primary relative z-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-16 tracking-tight">Strumenti Connessi.<br /><span className="text-ghost/40">Esecuzione Perfetta.</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feat-card group">
                        <ShufflerCard />
                        <div className="mt-8 px-2">
                            <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">Controllo di Gestione AI</h3>
                            <p className="text-ghost/60 text-sm leading-relaxed">Analisi predittive, gestione del budget dinamica e previsione dei flussi di cassa alimentata dai dati reali.</p>
                        </div>
                    </div>
                    <div className="feat-card group">
                        <TypewriterCard />
                        <div className="mt-8 px-2">
                            <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">Bilancio VSME Diretto</h3>
                            <p className="text-ghost/60 text-sm leading-relaxed">Generazione del report CSRD e bilancio di sostenibilità in tempo reale. Nessuno sforzo manuale, pura compliance.</p>
                        </div>
                    </div>
                    <div className="feat-card group">
                        <SchedulerCard />
                        <div className="mt-8 px-2">
                            <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">Ecosistemi Su Misura</h3>
                            <p className="text-ghost/60 text-sm leading-relaxed">Integrazioni neurali che collegano ogni tool SaaS del tuo spettro aziendale. Esecuzione autonoma e in cloud.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Philosophy = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".phil-text-1", {
                scrollTrigger: { trigger: container.current, start: "top 60%" },
                opacity: 0, x: -20, duration: 1, ease: "power2.out"
            });
            gsap.from(".phil-text-2", {
                scrollTrigger: { trigger: container.current, start: "top 40%" },
                opacity: 0, y: 30, duration: 1.5, ease: "power3.out", delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="philosophy" className="py-40 px-6 md:px-16 bg-[#06060A] relative overflow-hidden flex items-center min-h-[80vh]">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Texture" className="w-full h-full object-cover opacity-10 mix-blend-screen scale-110" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto w-full text-center md:text-left flex flex-col gap-12">
                <p className="phil-text-1 text-xl md:text-2xl text-ghost/40 font-heading tracking-wide">
                    La maggior parte dei software aziendali si concentra su: <span className="text-ghost opacity-80 decoration-white/20 underline-offset-4">dati statici e retrospettivi.</span>
                </p>
                <h2 className="phil-text-2 text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] text-white">
                    <span className="font-heading font-bold block mb-4 tracking-tighter">Noi ci concentriamo su</span>
                    <span className="font-drama italic text-accent tracking-normal pr-4">Orizzonti predittivi.</span>
                </h2>
            </div>
        </section>
    );
};

const Protocollo = () => {
    const container = useRef();
    const c1 = useRef();
    const c2 = useRef();
    const c3 = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Pinning the whole section for the stacking effect
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "+=200%",
                pin: true,
            });

            // Card 1 to Card 2 transition
            gsap.to(c1.current, {
                scale: 0.9, opacity: 0.4, filter: "blur(10px)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                }
            });
            gsap.from(c2.current, {
                y: "100%",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                }
            });

            // Card 2 to Card 3 transition
            gsap.to(c2.current, {
                scale: 0.9, opacity: 0.4, filter: "blur(10px)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top -100%",
                    end: "+=100%",
                    scrub: true,
                }
            });
            gsap.from(c3.current, {
                y: "100%",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top -100%",
                    end: "+=100%",
                    scrub: true,
                }
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="protocol" className="h-[100vh] w-full bg-primary relative overflow-hidden">

            {/* Card 1 */}
            <div ref={c1} className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-primary z-10 p-12 top-0 origin-top">
                <div className="flex-1 w-full max-w-xl pr-0 md:pr-16 mb-12 md:mb-0">
                    <div className="font-mono text-accent text-sm mb-4 tracking-[0.2em] border border-accent/20 bg-accent/5 px-3 py-1 inline-block rounded-full">PHASE_01</div>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Analisi Radicale</h2>
                    <p className="text-xl text-ghost/60 font-light leading-relaxed">Connettiamo i tuoi database aziendali in tempo reale, abbattendo i silos di informazioni ed estraendo i veri parametri vitali dell'azienda.</p>
                </div>
                <div className="flex-1 w-full h-[400px] bg-[#111118] rounded-[3rem] border border-white/5 relative overflow-hidden flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] opacity-40 animate-[spin_40s_linear_infinite]" fill="none">
                        <circle cx="100" cy="100" r="80" stroke="#7B61FF" strokeWidth="1" strokeDasharray="4 8" />
                        <circle cx="100" cy="100" r="60" stroke="#F0EFF4" strokeWidth="2" strokeDasharray="10 20" />
                        <path d="M 100 0 L 100 200 M 0 100 L 200 100" stroke="#7B61FF" strokeWidth="0.5" strokeOpacity="0.5" />
                        <rect x="70" y="70" width="60" height="60" stroke="#F0EFF4" strokeWidth="1" transform="rotate(45 100 100)" />
                    </svg>
                </div>
            </div>

            {/* Card 2 */}
            <div ref={c2} className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-[#08080C] z-20 p-12 top-0 origin-top shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex-1 w-full max-w-xl pr-0 md:pr-16 mb-12 md:mb-0">
                    <div className="font-mono text-accent text-sm mb-4 tracking-[0.2em] border border-accent/20 bg-accent/5 px-3 py-1 inline-block rounded-full">PHASE_02</div>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Sintesi Algoritmica</h2>
                    <p className="text-xl text-ghost/60 font-light leading-relaxed">ECAI genera scenari di budget, calcola i KPI predittivi e automatizza le direttive ESG per il bilancio di sostenibilità. A norma di legge EU.</p>
                </div>
                <div className="flex-1 w-full h-[400px] bg-primary rounded-[3rem] border border-white/5 relative overflow-hidden flex items-center justify-center shadow-2xl group">
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0.5 opacity-20 px-8 py-8 w-full h-full">
                        {Array.from({ length: 100 }).map((_, i) => <div key={i} className="bg-ghost/30 rounded-sm"></div>)}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(123,97,255,1)] animate-[pulse_2s_infinite] opacity-80" style={{ animation: 'scan 3s linear infinite' }}>
                        <style>{`@keyframes scan { 0% { top: 10%; } 100% { top: 90%; } }`}</style>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div ref={c3} className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-[#040406] z-30 p-12 top-0 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex-1 w-full max-w-xl pr-0 md:pr-16 mb-12 md:mb-0">
                    <div className="font-mono text-accent text-sm mb-4 tracking-[0.2em] border border-accent/20 bg-accent/5 px-3 py-1 inline-block rounded-full">PHASE_03</div>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Evoluzione Perpetua</h2>
                    <p className="text-xl text-ghost/60 font-light leading-relaxed">Le workstation e le soluzioni edge apprendono dai trend macroeconomici del tuo settore, affinando il controllo di gestione giorno dopo giorno.</p>
                </div>
                <div className="flex-1 w-full h-[400px] bg-primary rounded-[3rem] border border-white/5 relative overflow-hidden flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 400 200" className="w-[90%] h-full opacity-60">
                        <path
                            d="M 0 100 Q 25 50 50 100 T 100 100 T 150 100 T 200 100 T 250 100 T 300 100 T 350 100 T 400 100"
                            stroke="#7B61FF"
                            strokeWidth="3"
                            fill="none"
                            style={{ strokeDasharray: 800, strokeDashoffset: 800, animation: 'dash 4s linear infinite alternate' }}
                        />
                        <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
                    </svg>
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="py-40 px-6 bg-primary relative overflow-hidden flex items-center justify-center border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
                <Lock className="w-12 h-12 text-accent mb-8 opacity-80" />
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">Pronto a trasformare il tuo ecosistema?</h2>
                <p className="text-xl text-ghost/50 mb-12 max-w-2xl font-light">L'intelligenza artificiale non è il futuro, è l'infrastruttura del presente. Prenota una demo interattiva per ECAI-BUDGET o ECAI-VSME.</p>

                <button className="magnetic-btn bg-white text-darkText px-12 py-5 rounded-[4rem] text-xl font-bold flex items-center gap-4 group hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow">
                    <span className="relative z-10 flex items-center gap-2">Contattaci per una Demo <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
                    <span className="hover-bg bg-accent"></span>
                </button>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#040406] pt-24 pb-12 px-8 md:px-16 rounded-t-[4rem] border-t border-white/5 relative z-40 mt-[-2rem]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 border-b border-white/10 pb-16">

                <div className="flex flex-col gap-6 max-w-xs">
                    <div className="text-3xl font-bold font-heading tracking-tight text-white flex items-center gap-2">
                        ECONOVA<span className="text-accent">-AI</span>
                    </div>
                    <p className="text-ghost/40 text-sm leading-relaxed">Sustainable AI solutions for SMEs. Intelligenza artificiale applicata al mondo reale, con standard di livello enterprise.</p>
                    <div className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit mt-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                        System Operational
                    </div>
                </div>

                <div className="flex gap-16 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <div className="text-xs uppercase tracking-widest font-mono text-ghost/30 mb-2">Piattaforma</div>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">ECAI-BUDGET</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">ECAI-VSME</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">AI Workstations</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">Edge Solutions</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-xs uppercase tracking-widest font-mono text-ghost/30 mb-2">Azienda</div>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">Chi Siamo</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">Ricerca</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">Eventi & Blog</a>
                        <a href="#" className="text-sm text-ghost/70 hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-ghost/30">
                <div>© 2026 ECONOVA-AI. All rights reserved. PI: IT 02814630410</div>
                <div>Engineered via Protocol D</div>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <div className="bg-primary text-ghost selection:bg-accent selection:text-white relative min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocollo />
            <CTASection />
            <Footer />
        </div>
    );
}
