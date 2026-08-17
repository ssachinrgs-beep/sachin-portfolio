import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function ParallaxDemo() {
  return (
    <div className="w-full min-h-screen bg-slate-950">
      <ParallaxComponent />
      <div className="osmo-credits bg-slate-950 py-8 text-center border-t border-slate-900 text-sm text-slate-400">
        <p className="osmo-credits__p">
          Resource by{' '}
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.osmo.supply/" 
            className="osmo-credits__p-a text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
          >
            Osmo
          </a>
        </p>
      </div>
    </div>
  );
}
