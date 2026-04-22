"use client";

import { useEffect, useState, useRef, type FormEvent } from "react";
import { Layout, Cpu, Fingerprint } from "lucide-react";

const HyperCore = ({ active }: { active: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className={`absolute inset-0 border border-orange-500/10 rounded-full transition-all duration-1000 ${active ? 'scale-110 opacity-100' : 'scale-75 opacity-20'}`}
         style={{ transitionDuration: '10s', transitionTimingFunction: 'linear' }} />
    <div className={`absolute inset-0 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
      {[0, 120, 240].map((angle, i) => (
        <div key={i} className="absolute inset-0 animate-[spin_4s_linear_infinite]" style={{ transform: `rotate(${angle}deg)` }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-orange-500" />
        </div>
      ))}
    </div>
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
      <g className={active ? 'animate-[spin_8s_linear_infinite]' : ''} style={{ transformOrigin: '50% 50%' }}>
        <circle cx="50" cy="50" r="25" stroke="#f97316" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
        <path d="M50 20 L80 70 L20 70 Z" stroke="#f97316" strokeWidth="0.5" opacity={active ? '1' : '0.2'} fill="none" />
        <path d="M50 80 L20 30 L80 30 Z" stroke="#f97316" strokeWidth="0.5" opacity={active ? '1' : '0.2'} fill="none" />
      </g>
      <g className={active ? 'opacity-100' : 'opacity-20'}>
        <path d="M10 50 L20 50 M80 50 L90 50 M50 10 V20 M50 80 V90" stroke="#f97316" strokeWidth="1" fill="none" />
      </g>
    </svg>
  </div>
);

const NeuralCore = ({ active }: { active: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full">
    <div className={`absolute inset-0 transition-opacity duration-1000 ${active ? 'opacity-50' : 'opacity-0'}`}>
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute bottom-0 bg-gradient-to-t from-transparent via-orange-500/60 to-transparent animate-[data-stream_2.5s_ease-in_infinite]"
          style={{ left: `${10 + i * 8}%`, width: i % 3 === 0 ? '3px' : '1px', animationDelay: `${i * 0.3}s`, height: '60%' }} />
      ))}
    </div>
    <div className={`absolute w-3/4 h-3/4 bg-orange-500/15 rounded-full blur-3xl transition-all duration-1000 ${active ? 'scale-150 opacity-60 animate-pulse' : 'scale-50 opacity-0'}`} />
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
      <defs>
        <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="42" stroke="#f97316" strokeWidth="0.15" fill="none" opacity={active ? '0.5' : '0.1'} />
      <path d="M50 8 A42 42 0 0 1 92 50" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" className={active ? 'animate-[spin_3.5s_linear_infinite]' : 'opacity-0'} style={{ transformOrigin: '50px 50px', filter: 'url(#glow)' }} />
      <path d="M50 92 A42 42 0 0 1 8 50" fill="none" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" className={active ? 'animate-[spin_5s_linear_infinite_reverse]' : 'opacity-0'} style={{ transformOrigin: '50px 50px' }} />
      <g className={active ? 'animate-[singular-breath_4s_ease-in-out_infinite]' : 'opacity-40'}>
        <circle cx="50" cy="50" r="5.5" fill="url(#aiGradient)" filter="url(#glow)" />
        {[...Array(8)].map((_, i) => (
          <g key={i} style={{ transform: `rotate(${i * 45}deg)`, transformOrigin: '50px 50px' }}>
            <line x1="50" y1="45" x2="50" y2="25" stroke="#f97316" strokeWidth="0.4" className={active ? 'animate-[synapse-fire_2s_infinite]' : ''} style={{ animationDelay: `${i * 0.25}s` }} />
            <circle cx="50" cy="25" r="1.3" fill="#f97316" className={active ? 'animate-ping' : ''} style={{ animationDuration: '3s', animationDelay: `${i * 0.2}s` }} />
          </g>
        ))}
      </g>
    </svg>
  </div>
);

const GenesisCore = ({ active }: { active: boolean }) => {
  const points = [...Array(8)].map((_, i) => i);
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`absolute w-48 h-48 border-t border-b border-orange-500/20 rounded-full transition-all duration-1000 ${active ? 'opacity-100 animate-[spin_4s_linear_infinite]' : 'opacity-0 scale-50'}`} />
        <div className={`absolute w-40 h-40 border-l border-r border-orange-500/30 rounded-full transition-all duration-700 ${active ? 'opacity-100 animate-[spin_6s_linear_infinite_reverse]' : 'opacity-0 scale-50'}`} />
        <div className={`absolute w-36 h-4 border border-orange-500/60 bg-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-500 rounded-[100%] ${active ? 'animate-[scan-up_4s_ease-in-out_infinite]' : 'opacity-0'}`} />
        <div className={`absolute w-36 h-4 border border-orange-500/60 bg-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-500 rounded-[100%] ${active ? 'animate-[scan-down_4s_ease-in-out_infinite]' : 'opacity-0'}`} />
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <filter id="dnaGlow">
            <feGaussianBlur stdDeviation="0.6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <g transform="translate(15, 22) scale(0.7)" style={{ filter: 'url(#dnaGlow)' }}>
          {points.map((p) => {
            const y = p * 11;
            const delay = p * 0.2;
            return (
              <g key={p}>
                <line x1="25" y1={y} x2="75" y2={y} stroke="#f97316" strokeWidth="0.5" className={active ? 'animate-[dna-horiz_2s_ease-in-out_infinite]' : 'opacity-20'} style={{ animationDelay: `-${delay}s` }} />
                <circle cy={y} r="3" fill="#f97316" className={active ? 'animate-[dna-node-left_2s_ease-in-out_infinite]' : 'opacity-40'} style={{ animationDelay: `-${delay}s` }} />
                <circle cy={y} r="3" fill="#f97316" className={active ? 'animate-[dna-node-right_2s_ease-in-out_infinite]' : 'opacity-40'} style={{ animationDelay: `-${delay}s` }} />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

const MATRIX_COLS = [
  { chars: '0 1 X / # > & % 0 1'.split(' '), left: '20%', dur: '2.4s', delay: '0s' },
  { chars: 'X / # > & % 0 1 X /'.split(' '), left: '50%', dur: '3.1s', delay: '-1.1s' },
  { chars: '# > & % 0 1 X / # >'.split(' '), left: '78%', dur: '2.7s', delay: '-0.6s' },
];

const MatrixRain = ({ active }: { active: boolean }) => (
  <div
    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
    style={{ overflow: 'hidden' }}
  >
    {MATRIX_COLS.map((col, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: col.left,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          fontSize: '8px',
          fontWeight: 900,
          color: 'rgba(249,115,22,0.85)',
          animation: `matrixFall ${col.dur} linear infinite`,
          animationDelay: col.delay,
          lineHeight: 1,
        }}
      >
        {col.chars.map((ch, j) => <span key={j}>{ch}</span>)}
      </div>
    ))}
  </div>
);

type GlitchState = { active: boolean; shakeX: number; shakeY: number; slices: { top: number; height: number; shiftX: number }[]; cShift: [number, number]; rShift: [number, number]; };
const GLITCH_OFF: GlitchState = { active: false, shakeX: 0, shakeY: 0, slices: [], cShift: [0, 0], rShift: [0, 0] };

function rnd(min: number, max: number) { return Math.random() * (max - min) + min; }

function useGlitch(enabled: boolean) {
  const [g, setG] = useState<GlitchState>(GLITCH_OFF);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const alive = { current: true };

    function clearAll() {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    }

    if (!enabled) { clearAll(); setG(GLITCH_OFF); return; }

    function scheduleNext() {
      const t = setTimeout(() => {
        const frames = Math.floor(rnd(2, 4));
        let delay = 0;
        for (let i = 0; i < frames; i++) {
          const d = delay;
          const ft = setTimeout(() => {
            if (!alive.current) return;
            setG({
              active: true,
              shakeX: rnd(-2.5, 2.5),
              shakeY: rnd(-1, 1),
              slices: Array.from({ length: Math.floor(rnd(1, 3)) }, () => ({
                top: rnd(0, 85),
                height: rnd(5, 16),
                shiftX: rnd(-5, 5),
              })),
              cShift: [rnd(-4, 4), rnd(-1, 1)],
              rShift: [rnd(-4, 4), rnd(-1, 1)],
            });
          }, d);
          timersRef.current.push(ft);
          delay += Math.floor(rnd(50, 110));
        }
        const rt = setTimeout(() => {
          if (!alive.current) return;
          setG(GLITCH_OFF);
          scheduleNext();
        }, delay + 60);
        timersRef.current.push(rt);
      }, rnd(2500, 5500));
      timersRef.current.push(t);
    }

    scheduleNext();
    return () => { alive.current = false; clearAll(); setG(GLITCH_OFF); };
  }, [enabled]);

  return g;
}

type ServiceModuleProps = { title: string; description: string; icon: React.ElementType; stats: { label: string; value: string }[]; type?: string; onOpen?: () => void; };

const ServiceModule = ({ title, description, icon: Icon, stats, type = 'default', onOpen }: ServiceModuleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const g = useGlitch(isHovered && !flipping);

  // Scroll-based activation for touch devices (no mouse)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { setIsHovered(entry.isIntersecting); },
      { threshold: 0.55 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => { onOpen?.(); }, 260);
    setTimeout(() => { setFlipping(false); }, 560);
  };

  const renderCore = () => {
    if (type === 'ai') return <NeuralCore active={isHovered} />;
    if (type === 'branding') return <GenesisCore active={isHovered} />;
    return <HyperCore active={isHovered} />;
  };

  const parts = title.split('_');
  const displayText = title.replace('_', ' ');

  return (
    <div
      ref={cardRef}
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative group w-full mb-4 cursor-pointer"
    >
      <div style={{
        transform: flipping ? 'rotateX(180deg)' : 'rotateX(0deg)',
        transition: flipping ? 'transform 0.4s cubic-bezier(0.4,0,0.6,1)' : 'none',
        transformStyle: 'preserve-3d',
      }}>
        {/* Líc karty */}
        <div style={{ backfaceVisibility: 'hidden' }}>
          <div className={`absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 transition-all duration-500 z-30 ${isHovered ? 'border-orange-500 scale-110 shadow-[0_0_10px_#f97316]' : 'border-orange-900/30'}`} />
          <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 transition-all duration-500 z-30 ${isHovered ? 'border-orange-500 scale-110 shadow-[0_0_10px_#f97316]' : 'border-orange-900/30'}`} />
          <div className="relative bg-black transition-all duration-500 flex flex-col md:flex-row items-stretch border-[1px] overflow-hidden"
            style={{ borderColor: isHovered ? 'rgba(249,115,22,0.4)' : 'rgba(124,45,18,0.1)', boxShadow: isHovered ? '0 0 60px rgba(249,115,22,0.06)' : 'none' }}>
            <div className={`w-full md:w-56 p-6 flex items-center justify-center border-b-[1px] md:border-b-0 md:border-r-[1px] transition-colors duration-500 ${isHovered ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-900/10'}`}>
              <div className="w-36 h-56 relative flex items-center justify-center overflow-visible">{renderCore()}</div>
            </div>
            <div className="flex-grow p-8 flex flex-col justify-center relative">
              <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-[0.04]' : 'opacity-0'} bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:20px_20px]`} />
              <div className="flex items-center gap-6 mb-2 relative z-10 pl-3">
                <div className={`relative p-3 border-[1px] transition-all duration-500 bg-black ${isHovered ? 'border-orange-500 text-orange-500 scale-105 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'border-orange-900/10 text-orange-900'}`}>
                  <Icon size={24} className="relative z-10" />
                </div>
                <div className="relative select-none" style={{ transform: g.active ? `translate(${g.shakeX}px,${g.shakeY}px)` : 'none', transition: g.active ? 'none' : 'transform 0.15s ease' }}>
                  <h2 className={`text-3xl md:text-5xl font-black italic tracking-tighter uppercase whitespace-nowrap transition-colors duration-300 ${isHovered ? 'text-orange-500' : 'text-orange-900'}`}>
                    <span>{parts[0]}</span>
                    {parts[1] && <><span className={`mx-1 md:mx-2 text-2xl md:text-3xl font-light relative -top-1.5 inline-block ${isHovered ? 'text-orange-500 animate-pulse' : 'text-orange-900 opacity-20'}`}>&gt;</span><span>{parts[1]}</span></>}
                  </h2>
                  {g.active && <h2 className="absolute inset-0 text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-cyan-400 mix-blend-screen pointer-events-none" style={{ transform: `translate(${g.cShift[0]}px,${g.cShift[1]}px)`, opacity: 0.3 }} aria-hidden>{displayText}</h2>}
                  {g.active && <h2 className="absolute inset-0 text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-red-500 mix-blend-screen pointer-events-none" style={{ transform: `translate(${g.rShift[0]}px,${g.rShift[1]}px)`, opacity: 0.25 }} aria-hidden>{displayText}</h2>}
                  {g.active && g.slices.map((sl, i) => (
                    <h2 key={i} className="absolute inset-0 text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-orange-300 pointer-events-none" style={{ clipPath: `inset(${sl.top}% 0 ${Math.max(0, 100 - sl.top - sl.height)}% 0)`, transform: `translateX(${sl.shiftX}px)`, opacity: 0.7 }} aria-hidden>{displayText}</h2>
                  ))}
                </div>
              </div>
              <div className={`w-full h-[1px] mb-6 transition-all duration-700 origin-left ${isHovered ? 'bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-100' : 'bg-orange-900/10 scale-x-50'}`} />
              <p className={`text-[10px] md:text-xs font-mono leading-relaxed mb-8 max-w-xl relative z-10 transition-colors duration-500 ${isHovered ? 'text-orange-100/60' : 'text-orange-900/20'}`}>
                <span className="text-orange-500 mr-2 font-bold opacity-50">{' >> '}</span>{description}
              </p>
              <div className="flex flex-wrap gap-8 relative z-10">
                {stats.map((stat, i) => (
                  <div key={i} className="border-l-[1px] border-orange-900/20 pl-4">
                    <div className="text-[8px] text-orange-900 uppercase tracking-widest mb-1 font-bold">{stat.label}</div>
                    <div className={`text-[10px] font-bold font-mono transition-all ${isHovered ? 'text-orange-400' : 'text-orange-900/30'}`}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`w-full md:w-16 flex items-stretch border-t-[1px] md:border-t-0 md:border-l-[1px] transition-all duration-500 ${isHovered ? 'border-orange-500/40' : 'border-orange-900/10'}`}>
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 bg-black overflow-hidden">
                <MatrixRain active={isHovered} />
                <div className={`relative z-10 transition-all duration-500 flex flex-col items-center ${isHovered ? 'text-orange-500' : 'text-orange-900/40'}`}>
                  <span className="text-[10px] font-bold mb-1 opacity-50 tracking-tighter">VSTUP</span>
                  <div className="flex flex-col -space-y-2"><span className="block opacity-50">──┐</span><span className="block ml-2">▲</span></div>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] transition-all duration-500 ${isHovered ? 'w-full opacity-100 shadow-[0_0_15px_rgba(249,115,22,0.6)]' : 'w-24 opacity-20'}`}
              style={{ background: 'linear-gradient(90deg, transparent 0%, #f97316 20%, #f97316 80%, transparent 100%)' }} />
          </div>
        </div>
        {/* Záda karty — černá plocha viditelná při otáčení */}
        <div style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)', position: 'absolute', inset: 0, background: '#000', border: '1px solid rgba(124,45,18,0.15)' }} />
      </div>
    </div>
  );
};

type ServiceDetailProps = { title: string; description: string; icon: React.ElementType; stats: { label: string; value: string }[]; type?: string; onClose: () => void; };

const ServiceDetail = ({ title, description, icon: Icon, stats, onClose }: ServiceDetailProps) => {
  const [show, setShow] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const r = requestAnimationFrame(() => setShow(true));
    const t1 = setTimeout(() => setTopOpen(true), 80);
    const t2 = setTimeout(() => setBottomOpen(true), 240);
    return () => { cancelAnimationFrame(r); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleClose = () => {
    setBottomOpen(false);
    setTimeout(() => setTopOpen(false), 120);
    // wait for both folds to finish (top starts at 120ms + 0.52s ≈ 660ms), then slide
    setTimeout(() => setSlideOut(true), 680);
    // fade backdrop while sliding
    setTimeout(() => setShow(false), 860);
    setTimeout(onClose, 1100);
  };

  const parts = title.split('_');
  const grid = <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />;
  const blackBack = (rotate: string) => (
    <div style={{ backfaceVisibility: 'hidden', transform: rotate, position: 'absolute', inset: 0, background: '#000', border: '1px solid rgba(124,45,18,0.1)' }} />
  );
  const openEase = 'cubic-bezier(0.34,1.1,0.64,1)';
  const closeEase = 'cubic-bezier(0.4,0,0.8,0.45)';

  return (
    <div className={`fixed inset-0 z-[60] ${show ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={handleClose}
        style={{ opacity: show ? 1 : 0, transition: show ? 'opacity 0.38s ease' : 'opacity 0.38s ease 0.18s' }} />

      {/* Letter container */}
      <div className="absolute inset-3 md:inset-10" style={{
        transform: slideOut ? 'translateY(110%)' : 'translateY(0)',
        transition: 'transform 0.42s cubic-bezier(0.4,0,1,0.8)',
      }}>

        {/* ── PRUH STŘED (vždy plochý, viditelný jako první) ── */}
        <div className="absolute left-0 right-0 border-x border-orange-500/35 bg-[#040404]/98 overflow-hidden"
          style={{ top: '33.33%', height: '33.34%', opacity: show ? 1 : 0, transition: 'opacity 0.28s ease', zIndex: 2 }}>
          {grid}
          <div className="relative z-10 h-full flex items-center px-8 md:px-10">
            <p className="text-sm font-mono text-orange-100/50 max-w-3xl leading-relaxed">
              <span className="text-orange-500 mr-2 font-bold">{'>> '}</span>{description}
            </p>
          </div>
        </div>

        {/* ── PRUH HORNÍ — otvírá se nahoru od středové hrany ── */}
        {/* Čep otáčení: dolní hrana pruhu = horní linka středu */}
        <div className="absolute top-0 left-0 right-0" style={{ height: '33.33%', zIndex: 3, perspective: '1600px' }}>
          <div style={{
            width: '100%', height: '100%',
            transformOrigin: 'center bottom',
            transform: topOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)',
            transition: `transform 0.52s ${topOpen ? openEase : closeEase}`,
            transformStyle: 'preserve-3d',
          }}>
            {/* Líc — záhlaví */}
            <div className="absolute inset-0 bg-[#040404]/98 border border-orange-500/35 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
              {grid}
              <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-10 gap-4">
                <div className="flex items-center gap-5">
                  <div className="p-3 border border-orange-500/50 text-orange-500 bg-black shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                    <Icon size={28} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-orange-900/60 mb-1">SERVICE_MODULE</p>
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-orange-500 leading-none">
                      {parts[0]}{parts[1] && <><span className="mx-2 text-3xl font-light relative -top-1 inline-block">&gt;</span>{parts[1]}</>}
                    </h2>
                  </div>
                </div>
                <button onClick={handleClose} className="border border-orange-500/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-200 hover:border-orange-400/60 hover:bg-orange-500/10 transition-colors shrink-0">
                  ✕ ZAVŘÍT
                </button>
              </div>
            </div>
            {/* Záda — černý papír */}
            {blackBack('rotateX(180deg)')}
          </div>
        </div>

        {/* ── PRUH DOLNÍ — otvírá se dolů od středové hrany ── */}
        {/* Čep otáčení: horní hrana pruhu = dolní linka středu */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '33.34%', zIndex: 3, perspective: '1600px' }}>
          <div style={{
            width: '100%', height: '100%',
            transformOrigin: 'center top',
            transform: bottomOpen ? 'rotateX(0deg)' : 'rotateX(180deg)',
            transition: `transform 0.52s ${bottomOpen ? openEase : closeEase} ${bottomOpen ? '0ms' : '0ms'}`,
            transformStyle: 'preserve-3d',
          }}>
            {/* Líc — stats + sbalit */}
            <div className="absolute inset-0 bg-[#040404]/98 border-x border-b border-orange-500/35 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
              {grid}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
              <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-10 gap-6 flex-wrap">
                <div className="flex flex-wrap gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="border border-orange-500/20 bg-black/40 px-4 py-2">
                      <div className="text-[8px] font-mono uppercase tracking-widest text-orange-900/60 mb-1">{stat.label}</div>
                      <div className="text-sm font-bold font-mono text-orange-400">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Záda — černý papír */}
            {blackBack('rotateX(180deg)')}
          </div>
        </div>

        {/* Vnitřní rámeček */}
        <div className="absolute inset-[8px] border border-orange-500/15 pointer-events-none z-20"
          style={{ opacity: topOpen && bottomOpen ? 1 : 0, transition: 'opacity 0.4s ease 0.2s' }} />
      </div>
    </div>
  );
};

const navItems = ["SLUŽBY", "PROJEKTY", "O_PROTOKOLU", "KONTAKT"];

const serviceCards = [
  {
    title: "WEB_VÝVOJ",
    description:
      "Weby, aplikace a technická realizace od první architektury po spuštění.",
    symbols: ["</>", "▤", "◌"],
  },
  {
    title: "AI_AGENTI",
    description:
      "Automatizace, AI workflow, interní asistenti a chytré firemní procesy.",
    symbols: ["◈", "◎", "◍"],
  },
  {
    title: "BRANDING",
    description:
      "Identita, messaging a vizuální systém, který drží celou značku pohromadě.",
    symbols: ["✦", "✕", "⬡"],
  },
];

function WebDevTotem() {
  return (
    <div className="relative h-56 w-28 shrink-0">
      <svg
        viewBox="0 0 150 340"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeLinejoin="round" strokeLinecap="round">
          <g stroke="rgba(251,146,60,0.68)" strokeWidth="2">
            <path d="M42 34 L95 16 L124 34 L70 52 Z" />
            <path d="M35 44 L70 24 L124 44 L90 61 Z" opacity="0.9" />
            <path d="M42 34 V286" />
            <path d="M70 52 V307" />
            <path d="M95 16 V286" />
            <path d="M124 34 V307" />
            <path d="M42 286 H95" />
            <path d="M70 307 H124" />
            <path d="M35 44 V296" opacity="0.55" />
            <path d="M28 52 V303" opacity="0.35" />
            <path d="M95 16 L95 286" opacity="0.55" />
            <path d="M103 24 V296" opacity="0.45" />
          </g>

          <g stroke="rgba(251,146,60,0.34)" strokeWidth="1.2">
            <path d="M52 28 L92 28 L112 40 L72 40 Z" />
            <path d="M48 64 H91" />
            <path d="M48 108 H91" />
            <path d="M48 162 H91" />
            <path d="M76 77 H116" />
            <path d="M76 128 H116" />
            <path d="M76 196 H116" />
            <path d="M76 238 H116" />
          </g>

          <g stroke="rgba(251,146,60,0.48)" strokeWidth="1.35">
            <rect x="49" y="68" width="37" height="18" />
            <rect x="49" y="89" width="37" height="18" />
            <rect x="49" y="110" width="37" height="18" />
            <rect x="49" y="131" width="37" height="18" />
            <rect x="49" y="205" width="37" height="34" />
            <rect x="76" y="66" width="34" height="78" />
            <rect x="76" y="240" width="34" height="42" />
            <rect x="46" y="244" width="40" height="32" />
            <rect x="48" y="294" width="38" height="12" />
            <rect x="76" y="292" width="34" height="14" />
          </g>

          <g stroke="rgba(251,146,60,0.28)" strokeWidth="1">
            <path d="M54 74 H82" />
            <path d="M54 79 H82" />
            <path d="M54 95 H82" />
            <path d="M54 100 H82" />
            <path d="M54 116 H82" />
            <path d="M54 121 H82" />
            <path d="M54 137 H82" />
            <path d="M54 142 H82" />
            <path d="M52 214 H82" />
            <path d="M52 221 H82" />
            <path d="M52 228 H82" />
            <path d="M80 248 H104" />
            <path d="M80 255 H104" />
          </g>

          <g stroke="rgba(251,146,60,0.56)" strokeWidth="1.8">
            <path d="M89 141 C81 160, 78 182, 78 215" />
            <path d="M95 142 C87 166, 87 196, 88 235" />
            <path d="M102 142 C105 162, 108 185, 106 220" />
            <path d="M108 141 C117 160, 120 183, 119 214" />
          </g>

          <circle cx="104" cy="196" r="18" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" />
          <circle cx="104" cy="196" r="9" stroke="rgba(251,146,60,0.28)" strokeWidth="1" />
          <circle cx="97" cy="295" r="8" stroke="rgba(251,146,60,0.42)" strokeWidth="1.2" />
          <path d="M90 295 H104" stroke="rgba(251,146,60,0.28)" strokeWidth="1" />
          <path d="M97 288 V302" stroke="rgba(251,146,60,0.28)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function TechTotem() {
  return (
    <div className="relative h-40 w-16 shrink-0">
      <div className="absolute inset-0 border border-orange-400/55 bg-black/40" />
      <div className="absolute inset-[6px] border border-orange-400/25" />
      <div className="absolute left-2 right-2 top-3 h-3 border border-orange-400/35" />
      <div className="absolute left-2 right-2 top-10 h-6 border border-orange-400/25" />
      <div className="absolute left-2 right-2 top-20 h-5 border border-orange-400/25" />
      <div className="absolute left-2 right-2 top-[7.25rem] h-4 border border-orange-400/25" />
      <div className="absolute bottom-2 left-3 h-12 w-[2px] bg-orange-400/30" />
      <div className="absolute bottom-2 left-6 h-16 w-[2px] bg-orange-400/20" />
      <div className="absolute bottom-2 left-9 h-10 w-[2px] bg-orange-400/25" />
      <div className="absolute bottom-2 left-12 h-14 w-[2px] bg-orange-400/20" />
    </div>
  );
}

const LightningIntro = ({ loop = false }: { loop?: boolean }) => {
  const [cycleKey, setCycleKey] = useState(0);
  const [phase2, setPhase2] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
    setPhase2(false);
    const t1 = setTimeout(() => setPhase2(true), 2500);
    const t2 = setTimeout(() => setVisible(false), 4500);
    const t3 = loop ? setTimeout(() => setCycleKey(k => k + 1), 5800) : undefined;
    return () => { clearTimeout(t1); clearTimeout(t2); if (t3) clearTimeout(t3); };
  }, [cycleKey, loop]);
  if (!visible) return null;

  const glowSoft   = "drop-shadow(0 0 1.5px #f97316) drop-shadow(0 0 4px rgba(249,115,22,0.55))";
  const glowStrong = "drop-shadow(0 0 3px #f97316) drop-shadow(0 0 10px rgba(249,115,22,0.8))";

  const sideBolts = [
    { d: "M 95 0 L 72 28 L 81 38 L 52 62 L 61 68 L 30 88 L 5 100", delay: "0ms",   dur: "420ms" },
    { d: "M 100 2 L 78 22 L 85 35 L 58 58 L 65 70 L 38 90 L 10 100", delay: "80ms",  dur: "380ms" },
    { d: "M 88 0 L 68 32 L 77 42 L 45 68 L 55 75 L 22 92 L 0 98",  delay: "160ms", dur: "400ms" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {sideBolts.map((bolt, i) => (
        <svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{ animation: `lightning-bolt ${bolt.dur} ease-out ${bolt.delay} 1 forwards` }}>
          <defs>
            <linearGradient id={`bg${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="rgba(249,115,22,0.9)" />
              <stop offset="66%"  stopColor="rgba(249,115,22,0.9)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0.2)" />
            </linearGradient>
          </defs>
          <path d={bolt.d} stroke={`url(#bg${i})`} strokeWidth="0.35" strokeLinecap="round" fill="none"
            style={{ filter: glowSoft }} />
        </svg>
      ))}
      {phase2 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="rgba(249,115,22,0)" />
              <stop offset="5%"   stopColor="rgba(249,115,22,1)" />
              <stop offset="85%"  stopColor="rgba(249,115,22,1)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0.7)" />
            </linearGradient>
          </defs>
          {/* Vnější corona — tlustá + rozmazaná = velká nepravidelná záře */}
          <path
            d="M 50 0 L 45 17 L 53 26 L 47 44 L 55 57 L 49 70 L 52 81 L 50 83"
            stroke="rgba(249,115,22,0.18)" strokeWidth="8" strokeLinecap="round" fill="none"
            style={{ filter: "blur(3px)", animation: "lightning-bolt 1500ms ease-out 0ms 1 forwards" }}
          />
          {/* Vnitřní záře */}
          <path
            d="M 50 0 L 45 17 L 53 26 L 47 44 L 55 57 L 49 70 L 52 81 L 50 83"
            stroke="rgba(249,115,22,0.45)" strokeWidth="2.5" strokeLinecap="round" fill="none"
            style={{ filter: "blur(1.2px)", animation: "lightning-bolt 1500ms ease-out 0ms 1 forwards" }}
          />
          {/* Tenký ostrý kmen */}
          <path
            d="M 50 0 L 45 17 L 53 26 L 47 44 L 55 57 L 49 70 L 52 81 L 50 83"
            stroke="url(#cg)" strokeWidth="0.28" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 3px #f97316)", animation: "lightning-bolt 1500ms ease-out 0ms 1 forwards" }}
          />
          {/* Vnější větev levá */}
          <path
            d="M 50 83 L 41 82.2 L 30 83.8 L 19 82.5 L 8 83.2 L 3 82.8"
            stroke="rgba(249,115,22,0.5)" strokeWidth="2.2" strokeLinecap="round" fill="none"
            style={{ filter: "blur(1.8px)", animation: "lightning-bolt 1300ms ease-out 160ms 1 forwards" }}
          />
          <path
            d="M 50 83 L 41 82.2 L 30 83.8 L 19 82.5 L 8 83.2 L 3 82.8"
            stroke="rgba(255,180,60,1)" strokeWidth="0.2" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 2px #f97316) drop-shadow(0 0 8px rgba(249,115,22,0.9))", animation: "lightning-bolt 1300ms ease-out 160ms 1 forwards" }}
          />
          {/* Vnitřní větev levá */}
          <path
            d="M 49 78 L 41 79.6 L 31 78.4 L 21 80.1 L 14 79.3"
            stroke="rgba(249,115,22,0.35)" strokeWidth="1.4" strokeLinecap="round" fill="none"
            style={{ filter: "blur(1.2px)", animation: "lightning-bolt 1050ms ease-out 240ms 1 forwards" }}
          />
          <path
            d="M 49 78 L 41 79.6 L 31 78.4 L 21 80.1 L 14 79.3"
            stroke="rgba(255,180,60,0.9)" strokeWidth="0.16" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 2px #f97316) drop-shadow(0 0 6px rgba(249,115,22,0.8))", animation: "lightning-bolt 1050ms ease-out 240ms 1 forwards" }}
          />
          {/* Vnitřní větev pravá */}
          <path
            d="M 51 78 L 59 79.6 L 69 78.4 L 79 80.1 L 86 79.3"
            stroke="rgba(249,115,22,0.35)" strokeWidth="1.4" strokeLinecap="round" fill="none"
            style={{ filter: "blur(1.2px)", animation: "lightning-bolt 1050ms ease-out 270ms 1 forwards" }}
          />
          <path
            d="M 51 78 L 59 79.6 L 69 78.4 L 79 80.1 L 86 79.3"
            stroke="rgba(255,180,60,0.9)" strokeWidth="0.16" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 2px #f97316) drop-shadow(0 0 6px rgba(249,115,22,0.8))", animation: "lightning-bolt 1050ms ease-out 270ms 1 forwards" }}
          />
          {/* Vnější větev pravá */}
          <path
            d="M 50 83 L 59 82.2 L 70 83.8 L 81 82.5 L 92 83.2 L 97 82.8"
            stroke="rgba(249,115,22,0.5)" strokeWidth="2.2" strokeLinecap="round" fill="none"
            style={{ filter: "blur(1.8px)", animation: "lightning-bolt 1300ms ease-out 190ms 1 forwards" }}
          />
          <path
            d="M 50 83 L 59 82.2 L 70 83.8 L 81 82.5 L 92 83.2 L 97 82.8"
            stroke="rgba(255,180,60,1)" strokeWidth="0.2" strokeLinecap="round" fill="none"
            style={{ filter: "drop-shadow(0 0 2px #f97316) drop-shadow(0 0 8px rgba(249,115,22,0.9))", animation: "lightning-bolt 1300ms ease-out 190ms 1 forwards" }}
          />
          {/* Uzel — maximální oranžová záře bez bílého bodu */}
          <circle cx="50" cy="83" r="6" fill="rgba(249,115,22,0.35)"
            style={{ filter: "blur(4px)", animation: "lightning-bolt 1300ms ease-out 155ms 1 forwards" }}
          />
          <circle cx="50" cy="83" r="2.5" fill="rgba(255,200,80,0.6)"
            style={{ filter: "blur(1.5px)", animation: "lightning-bolt 1300ms ease-out 155ms 1 forwards" }}
          />
        </svg>
      )}
    </div>
  );
};

export default function Home() {
  const [phase, setPhase] = useState<"idle" | "booting" | "active">("idle");
  const [statusText, setStatusText] = useState(
    "SYSTEM ONLINE • READY TO BUILD"
  );
  const [briefOpen, setBriefOpen] = useState(false);
  const [briefSubmitted, setBriefSubmitted] = useState(false);
  type OpenService = { title: string; description: string; icon: React.ElementType; stats: { label: string; value: string }[]; type?: string } | null;
  const [openService, setOpenService] = useState<OpenService>(null);
  const [activeField, setActiveField] = useState<
    "name" | "email" | "mission" | null
  >(null);
  const [briefForm, setBriefForm] = useState({
    name: "",
    email: "",
    budget: "50 000 – 150 000 Kč",
    mission: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  // Lock scroll only in idle; allow scrolling in HUD
  useEffect(() => {
    if (phase === "idle") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  // Swipe UP on mobile: logo jede nahoru (efekt), po puštění se vrátí
  const [nudge, setNudge] = useState(0);
  const phaseRef = useRef(phase);
  useEffect(() => { phaseRef.current = phase; if (phase !== "idle") setNudge(0); }, [phase]);
  useEffect(() => {
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0]?.clientY ?? 0; };
    const onTouchMove = (e: TouchEvent) => {
      if (phaseRef.current !== "idle") return;
      const dy = touchStartY - (e.touches[0]?.clientY ?? 0);
      if (dy > 0) {
        const max = window.innerHeight * 0.28;
        setNudge(Math.min(dy * 0.6, max));
      } else {
        setNudge(0);
      }
    };
    const onTouchEnd = () => { if (phaseRef.current === "idle") setNudge(0); };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (phase !== "booting") return;

    setStatusText("INICIALIZUJI PROTOKOL ALPHA...");

    const timer = window.setTimeout(() => {
      setPhase("active");
      setStatusText("PROTOKOL_ALPHA : ACTIVE");
    }, 1900);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const showHud = phase !== "idle";

  const handleLaunch = () => {
    if (phase === "idle") {
      setPhase("booting");
    }
  };

  const handleOpenBrief = () => {
    setBriefSubmitted(false);
    setBriefOpen(true);
  };

  const handleBriefSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActiveField(null);
    setBriefSubmitted(true);
    setStatusText("BRIEF RECEIVED • STANDBY");
  };

  const getCaretStyle = (value: string, multiline = false) => {
    const lines = value.split("\n");
    const lastLine = lines[lines.length - 1] ?? "";

    return {
      left: `calc(1rem + ${Math.max(lastLine.length, 0) * 0.62}ch)`,
      top: multiline ? `calc(0.9rem + ${(lines.length - 1) * 1.5}rem)` : "0.95rem",
    };
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(249,115,22,0.12), transparent 32%), linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 28px 28px, 28px 28px",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      {phase !== "idle" && <LightningIntro loop={process.env.NODE_ENV === 'development'} />}

      <header
        className={`absolute inset-x-0 top-0 z-30 transition-all duration-700 ease-out ${
          showHud ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto mt-1 max-w-6xl border border-orange-500/25 bg-black/75 px-3 py-2 shadow-[0_0_35px_rgba(249,115,22,0.08)]">
          <nav className="flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.28em] md:gap-4 md:text-xs">
            {navItems.map((item) => (
              <button
                key={item}
                className="border border-orange-500/20 bg-black/40 px-3 py-1 text-orange-200/90 transition-colors hover:border-orange-400/55 hover:text-orange-100"
              >
                [ {item} ]
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section
        className={`relative z-20 mx-auto flex max-w-6xl flex-col items-center px-4 transition-all duration-700 md:px-6 ${
          showHud ? "justify-start pb-16 pt-[76px] md:pt-[100px]" : "h-[100dvh] justify-start pt-[28vh] md:pt-[32vh]"
        }`}
      >
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-out ${
            showHud
              ? "mt-4 translate-y-0 scale-[0.84] opacity-100 md:mt-8"
              : "translate-y-0 scale-100 opacity-100"
          }`}
          style={phase === "idle" ? { transform: `translateY(-${nudge}px)`, transition: nudge === 0 ? "transform 0.45s cubic-bezier(0.22,1,0.36,1)" : "none" } : undefined}
        >
          <div
            className="relative w-fit overflow-visible"
            style={{
              margin: "0 auto",
              padding: "0.5rem",
              background: "transparent",
            }}
          >
            <img
              src="/bull-head-smooth-rich-v7.png?v=7"
              alt="BullStack Logo"
              className="w-[220px] transition-all duration-700 md:w-[340px]"
              style={{
                filter: "contrast(1.07) saturate(1.14)",
                height: "auto",
                position: "relative",
              }}
            />
          </div>

          <div className="text-center">
            <h1
              className="mb-2 text-6xl font-[1000] leading-none tracking-[-0.05em] text-orange-500 md:text-8xl"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              BullStack
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 bg-zinc-800" />
              <p className="text-[9px] font-light uppercase tracking-[0.5em] text-zinc-500 opacity-80 md:text-[10px] md:tracking-[0.8em]">
                Software Studio
              </p>
              <div className="h-[1px] w-8 bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* spacer so content doesn't sit behind fixed CTA */}
        <div className="h-4" />
      </section>

      {/* CTA — fixed floating bottom center */}
      <div
        className={`fixed bottom-10 left-0 right-0 z-40 flex justify-center px-4 transition-[transform,opacity] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          phase === "idle" ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-32 scale-[1.18] opacity-0"
        }`}
      >
        <div className="relative w-fit">
          {/* Corner brackets */}
          <span className="pointer-events-none absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500 shadow-[0_0_10px_#f97316] z-30" />
          <span className="pointer-events-none absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500 shadow-[0_0_10px_#f97316] z-30" />
          <span
            className="pointer-events-none absolute block"
            style={{ inset: '-10px', opacity: phase === 'idle' ? undefined : 0 }}
          >
            <span
              className="block w-full h-full"
              style={{
                background: '#ea580c',
                filter: 'blur(24px)',
                ...(phase === 'idle' ? { animation: 'btn-glow-opacity 3.2s ease-in-out infinite' } : {}),
              }}
            />
          </span>
          <button
            type="button"
            onClick={handleLaunch}
            disabled={phase !== "idle"}
            className="group relative block p-0"
            style={{ background: 'none', border: 'none' }}
          >
            <span
              className="block"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                background: 'rgba(124,45,18,0.55)',
                padding: '1px',
              }}
            >
              <span
                className="flex items-center justify-center gap-2 whitespace-nowrap bg-black px-6 py-3 text-[9px] font-extrabold uppercase tracking-[0.25em] text-orange-800/90 group-hover:text-orange-600 md:gap-3 md:px-16 md:py-5 md:text-[12px] md:tracking-[0.45em]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 13px 100%, 0 calc(100% - 13px))' }}
              >
                SYSTEM ONLINE
                <span
                  className="inline-block h-[6px] w-[6px] rounded-full bg-orange-700/80 shrink-0"
                  style={{ animation: 'blink-dot 1.1s step-start infinite' }}
                />
                VSTOUPIT DO SYSTÉMU
              </span>
            </span>
          </button>
        </div>
      </div>

      <section className="relative z-20 mx-auto w-full max-w-6xl px-4 md:px-6">
        <button
          type="button"
          onClick={handleOpenBrief}
          className={`group relative -mt-1 mx-auto block w-full max-w-[64rem] overflow-visible px-2 transition-all duration-700 ease-out ${
            showHud
              ? "translate-y-0 opacity-100 delay-150"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <span
            className="pointer-events-none absolute inset-y-3 left-10 right-0 translate-x-8 -translate-y-4 border border-orange-500/28 bg-[#070200]/82 shadow-[0_0_20px_rgba(249,115,22,0.08)]"
            style={{
              clipPath:
                "polygon(4% 0%, 96% 0%, 100% 22%, 100% 70%, 93% 100%, 4% 100%, 0% 78%, 0% 22%)",
            }}
          />
          <span
            className="pointer-events-none absolute left-10 top-[-20px] h-5 w-24 translate-x-6 -translate-y-1 border border-orange-500/30 bg-[#130601]/85 md:left-16 md:h-6 md:w-32 md:translate-x-8"
            style={{
              clipPath: "polygon(0% 100%, 0% 32%, 16% 0%, 100% 0%, 100% 100%)",
            }}
          />
          <span
            className="pointer-events-none absolute inset-y-1 left-6 right-4 translate-x-3 -translate-y-2 border border-orange-400/35 bg-[#0b0301]/80 shadow-[0_0_16px_rgba(249,115,22,0.1)]"
            style={{
              clipPath:
                "polygon(4% 0%, 96% 0%, 100% 22%, 100% 70%, 93% 100%, 4% 100%, 0% 78%, 0% 22%)",
            }}
          />
          <span
            className="pointer-events-none absolute left-6 top-[-20px] z-10 h-6 w-36 border border-orange-400/55 bg-[#140702]/95 shadow-[0_0_18px_rgba(249,115,22,0.14)] md:left-10 md:h-8 md:w-44"
            style={{
              clipPath: "polygon(0% 100%, 0% 32%, 16% 0%, 100% 0%, 100% 100%)",
            }}
          />
          <span
            className="pointer-events-none absolute left-[1.8rem] top-[-12px] z-10 h-4 w-28 border border-orange-300/40 md:left-[3rem] md:h-5 md:w-34"
            style={{
              clipPath: "polygon(0% 100%, 0% 38%, 16% 0%, 100% 0%, 100% 100%)",
            }}
          />
          <span className="pointer-events-none absolute left-[2.4rem] top-[-12px] z-20 text-[7px] font-semibold uppercase tracking-[0.28em] text-orange-300/95 md:left-[3.8rem] md:text-[8px]">
            Prototype - 018 dn
          </span>
          <span className="pointer-events-none absolute inset-y-3 left-0 right-0 border border-orange-500/30" />
          <span className="pointer-events-none absolute inset-y-1 left-2 right-2 border border-orange-500/35" />
          <span className="pointer-events-none absolute inset-y-0 left-5 right-5 border border-orange-400/45" />

          <span
            className="relative block overflow-hidden border border-orange-400/70 bg-[#0f0602]/95 px-7 py-4.5 text-orange-200 shadow-[0_0_30px_rgba(249,115,22,0.28)] transition-all duration-300 group-hover:scale-[1.005] group-hover:shadow-[0_0_42px_rgba(249,115,22,0.4)] md:px-12 md:py-5.5"
            style={{
              clipPath:
                "polygon(4% 0%, 96% 0%, 100% 22%, 100% 68%, 91% 100%, 4% 100%, 0% 78%, 0% 22%)",
            }}
          >
            <span className="pointer-events-none absolute inset-[3px] border border-orange-300/30" />
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.16),transparent_65%)]" />
            {/* Horní čára se shimmerem zleva doprava */}
            <div className="pointer-events-none absolute left-3 right-20 top-4 h-[2px] overflow-hidden bg-orange-300/30 md:left-6 md:right-auto md:w-32">
              <span className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-orange-200/90 to-transparent" style={{ animation: 'line-shimmer 3.2s ease-in-out infinite' }} />
            </div>
            {/* Spodní čára se shimmerem — zpožděná o polovinu cyklu */}
            <div className="pointer-events-none absolute bottom-4 left-20 right-3 h-[2px] overflow-hidden bg-orange-300/25 md:right-6 md:left-auto md:w-32">
              <span className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-orange-200/90 to-transparent" style={{ animation: 'line-shimmer 3.2s ease-in-out 1.6s infinite' }} />
            </div>
            {/* Olejový odlesk pod textem */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(234,88,12,0.07) 20%, rgba(251,191,36,0.06) 40%, rgba(249,115,22,0.09) 60%, rgba(234,88,12,0.05) 80%, transparent 100%)', filter: 'blur(6px)' }} />

            <span className="pointer-events-none absolute left-7 bottom-3 font-mono text-[7px] font-extrabold uppercase tracking-widest text-orange-700/70 md:text-[7px]">
              sequence a17 • system armed
            </span>
            <span className="pointer-events-none absolute right-7 top-3 font-mono text-[7px] font-extrabold uppercase tracking-widest text-orange-700/70 md:text-[7px]">
              bullstack launch protocol
            </span>

            <span className="relative flex items-center justify-center gap-4 md:gap-6">
              <span className="text-center text-[24px] font-black italic tracking-tighter uppercase leading-none whitespace-nowrap text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.4)] md:text-[52px]">
                VYPUSTIT PROJEKT
              </span>
              <span className="text-2xl font-light text-orange-500 transition-all duration-300 group-hover:translate-x-1 group-hover:animate-pulse md:text-3xl">
                &gt;
              </span>
            </span>
          </span>
        </button>

        <div
          className={`mt-14 w-full flex flex-col gap-10 transition-all duration-700 ease-out ${
            showHud
              ? "translate-y-0 opacity-100 delay-300"
              : "pointer-events-none translate-y-12 opacity-0"
          }`}
        >
          <ServiceModule title="Web_Vývoj" icon={Layout} description="Konstrukce kvantově responzivních architektur s nulovou latencí a maximální propustností dat." stats={[{ label: "Odezva", value: "0.02ms" }, { label: "Jádro", value: "V8_TURBO" }, { label: "Stav", value: "AKTIVNÍ" }, { label: "Verze", value: "STABLE_V14" }]} onOpen={() => setOpenService({ title: "Web_Vývoj", icon: Layout, description: "Konstrukce kvantově responzivních architektur s nulovou latencí a maximální propustností dat.", stats: [{ label: "Odezva", value: "0.02ms" }, { label: "Jádro", value: "V8_TURBO" }, { label: "Stav", value: "AKTIVNÍ" }, { label: "Verze", value: "STABLE_V14" }] })} />
          <ServiceModule type="ai" title="AI_Agenti" icon={Cpu} description="Nasazení kognitivních entit s hlubokým učením pro autonomní správu kritických procesů." stats={[{ label: "Synapse", value: "512B+" }, { label: "Model", value: "AXION_4" }, { label: "Sync", value: "STABILNÍ" }, { label: "Verze", value: "STABLE_V14" }]} onOpen={() => setOpenService({ title: "AI_Agenti", type: "ai", icon: Cpu, description: "Nasazení kognitivních entit s hlubokým učením pro autonomní správu kritických procesů.", stats: [{ label: "Synapse", value: "512B+" }, { label: "Model", value: "AXION_4" }, { label: "Sync", value: "STABILNÍ" }, { label: "Verze", value: "STABLE_V14" }] })} />
          <ServiceModule type="branding" title="Branding" icon={Fingerprint} description="Zhmotnění identity z chaosu myšlenek do hmatatelného odkazu skrze DNA kód vaší značky." stats={[{ label: "Archetyp", value: "DEFINOVÁN" }, { label: "Kód", value: "HELIX_SYNC" }, { label: "Rezonance", value: "98.4%" }, { label: "Fáze", value: "GENESIS" }]} onOpen={() => setOpenService({ title: "Branding", type: "branding", icon: Fingerprint, description: "Zhmotnění identity z chaosu myšlenek do hmatatelného odkazu skrze DNA kód vaší značky.", stats: [{ label: "Archetyp", value: "DEFINOVÁN" }, { label: "Kód", value: "HELIX_SYNC" }, { label: "Rezonance", value: "98.4%" }, { label: "Fáze", value: "GENESIS" }] })} />
        </div>
      </section>

      {openService && (
        <ServiceDetail title={openService.title} description={openService.description} icon={openService.icon} stats={openService.stats} type={openService.type} onClose={() => setOpenService(null)} />
      )}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          briefOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setBriefOpen(false)}
        />

        <div
          className={`absolute inset-3 overflow-hidden border border-orange-500/35 bg-[#040404]/95 shadow-[0_0_45px_rgba(249,115,22,0.16)] transition-all duration-300 md:inset-8 ${
            briefOpen ? "scale-100" : "scale-[0.98]"
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
          <div className="absolute inset-[10px] border border-orange-500/20" />

          <div className="relative z-10 flex h-full flex-col p-4 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-orange-500/20 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-orange-300/70">
                  PROJECT_TERMINAL
                </p>
                <h2
                  className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-orange-400 md:text-4xl"
                  style={{ fontFamily: "Impact, sans-serif" }}
                >
                  ZADAT PARAMETRY MISE
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setBriefOpen(false)}
                className="border border-orange-500/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-200 transition-colors hover:border-orange-400/60 hover:bg-orange-500/10"
              >
                ZAVŘÍT
              </button>
            </div>

            {briefSubmitted ? (
              <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-2xl border border-orange-400/35 bg-black/70 p-6 text-center shadow-[0_0_30px_rgba(249,115,22,0.16)] md:p-10">
                  <div className="mb-4 text-sm uppercase tracking-[0.5em] text-orange-300/70">
                    TRANSMISSION_OK
                  </div>
                  <h3
                    className="mb-4 text-3xl font-black uppercase text-orange-400 md:text-5xl"
                    style={{ fontFamily: "Impact, sans-serif" }}
                  >
                    Brief přijat.
                  </h3>
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
                    Mise byla zařazena do fronty. BullStack naváže spojení a připraví další sekvenci startu.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBriefSubmit} className="flex flex-1 flex-col">
                <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-orange-300/80">
                  <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                  LIVE INPUT SESSION
                  <span className="text-orange-400">▌</span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.42em] text-orange-300/75">
                      01 / JMÉNO
                    </span>
                    <div className="relative">
                      <input
                        autoFocus
                        type="text"
                        value={briefForm.name}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        onChange={(event) =>
                          setBriefForm((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        placeholder="např. Jan Novák"
                        style={{ caretColor: "transparent" }}
                        className="terminal-field w-full border border-orange-500/30 bg-black/70 px-4 py-3.5 text-orange-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-400 selection:bg-orange-500/30"
                      />
                      {activeField === "name" && (
                        <span
                          className="terminal-caret pointer-events-none"
                          style={getCaretStyle(briefForm.name)}
                        >
                          █
                        </span>
                      )}
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.42em] text-orange-300/75">
                      02 / E-MAIL
                    </span>
                    <div className="relative">
                      <input
                        type="email"
                        value={briefForm.email}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        onChange={(event) =>
                          setBriefForm((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        placeholder="např. hello@firma.cz"
                        style={{ caretColor: "transparent" }}
                        className="terminal-field w-full border border-orange-500/30 bg-black/70 px-4 py-3.5 text-orange-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-400 selection:bg-orange-500/30"
                      />
                      {activeField === "email" && (
                        <span
                          className="terminal-caret pointer-events-none"
                          style={getCaretStyle(briefForm.email)}
                        >
                          █
                        </span>
                      )}
                    </div>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.42em] text-orange-300/75">
                      03 / ROZPOČET
                    </span>
                    <select
                      value={briefForm.budget}
                      onChange={(event) =>
                        setBriefForm((current) => ({
                          ...current,
                          budget: event.target.value,
                        }))
                      }
                      className="terminal-field w-full border border-orange-500/30 bg-black/70 px-4 py-3.5 text-orange-100 outline-none transition-colors focus:border-orange-400 selection:bg-orange-500/30"
                    >
                      <option>do 50 000 Kč</option>
                      <option>50 000 – 150 000 Kč</option>
                      <option>150 000 – 300 000 Kč</option>
                      <option>300 000 Kč +</option>
                    </select>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.42em] text-orange-300/75">
                      04 / POPIS MISE
                    </span>
                    <div className="relative">
                      <textarea
                        rows={7}
                        value={briefForm.mission}
                        onFocus={() => setActiveField("mission")}
                        onBlur={() => setActiveField(null)}
                        onChange={(event) =>
                          setBriefForm((current) => ({
                            ...current,
                            mission: event.target.value,
                          }))
                        }
                        placeholder="Co potřebuješ spustit, automatizovat nebo postavit?"
                        style={{ caretColor: "transparent" }}
                        className="terminal-field w-full resize-none border border-orange-500/30 bg-black/70 px-4 py-3.5 text-orange-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-400 selection:bg-orange-500/30"
                      />
                      {activeField === "mission" && (
                        <span
                          className="terminal-caret pointer-events-none"
                          style={getCaretStyle(briefForm.mission, true)}
                        >
                          █
                        </span>
                      )}
                    </div>
                  </label>
                </div>

                <div className="mt-auto flex flex-col gap-4 border-t border-orange-500/20 pt-5 md:flex-row md:items-center md:justify-between">
                  <div className="text-[10px] uppercase tracking-[0.38em] text-zinc-400">
                    READY_FOR_TRANSMISSION <span className="text-orange-400">▌</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setBriefOpen(false)}
                      className="border border-orange-500/30 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-200 transition-colors hover:border-orange-400/60 hover:bg-orange-500/10"
                    >
                      STORNO
                    </button>
                    <button
                      type="submit"
                      className="border border-orange-400/70 bg-orange-500/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.35em] text-orange-100 shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all hover:border-orange-300 hover:bg-orange-500/16"
                    >
                      ODESLAT DO ŘÍDICÍHO CENTRA ›
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

    </main>
  );
}