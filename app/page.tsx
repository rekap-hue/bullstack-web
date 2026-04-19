export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6 tracking-tight">
      
      {/* BRAND SEKCE */}
      <div className="flex flex-col items-center gap-0 mb-8 transition-transform duration-500">
        
        {/* TVŮJ NOVÝ MASTERPIECE BULDOČEK */}
        <div 
          className="relative w-fit -mt-12 overflow-visible" 
          style={{
            margin: '0 auto',
            padding: '0.5rem',
            background: 'transparent'
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              zIndex: -1,
              pointerEvents: 'none',
              opacity: 0
            }}
          />
          <img 
            src="/bull-head-smooth-rich-v7.png?v=7"
            alt="BullStack Logo" 
            width="340"
            height="304"
            style={{
              filter: 'contrast(1.07) saturate(1.14)',
              maxWidth: '100%',
              height: 'auto',
              position: 'relative'
            }}
          />
        </div>

        {/* Nápis Brandu - PŘESNĚ BullStack */}
        <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-[1000] leading-none text-orange-500 tracking-[-0.05em] mb-2" 
                style={{ fontFamily: 'Impact, sans-serif' }}>
                BullStack
            </h1>
            <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-8 bg-zinc-800" />
                <p className="text-[10px] md:text-sm font-light tracking-[0.8em] text-zinc-500 uppercase opacity-80">
                    Software Studio
                </p>
                <div className="h-[1px] w-8 bg-zinc-800" />
            </div>
        </div>
      </div>

      {/* STATUS BAR */}
      <div className="fixed bottom-12">
        <div className="px-6 py-2 border border-orange-500/10 bg-orange-500/5 rounded-full backdrop-blur-sm">
          <span className="text-orange-400 animate-pulse text-[10px] uppercase tracking-[0.5em] font-bold">
            System Online • Ready to build
          </span>
        </div>
      </div>

    </main>
  );
}