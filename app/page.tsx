export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex">
        <h1 className="text-6xl font-black tracking-tighter text-orange-500 border-b-4 border-orange-500 pb-2 italic">
          BULLSTACK STUDIO
        </h1>
      </div>
      <p className="mt-8 text-xl font-light tracking-[0.3em] text-zinc-400 uppercase">
        Software Craftsmanship
      </p>
      <div className="mt-12">
        <div className="px-6 py-3 border border-orange-500/20 bg-orange-500/5 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.1)]">
          <span className="text-orange-400 animate-pulse text-xs uppercase tracking-[0.2em] font-bold">
            System Online - Ready to build
          </span>
        </div>
      </div>
    </main>
  );
}