import { Video, Users, Clapperboard } from 'lucide-react';
import tbsLogo from './assets/tbs_logo_transparent.png';

/**
 * TBS Stream — scaffold landing page.
 * The full platform (host view, viewer grid, recordings) is built once the
 * streaming provider decision lands (Agora primary candidate — see README.md).
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink-900 px-4 text-center text-white">
      <img src={tbsLogo} alt="TBS — Trainers by Sport" className="mb-6 h-16 object-contain" />

      <h1 className="text-4xl font-bold sm:text-5xl">
        TBS <span className="text-brand-500">Stream</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-300">
        Live training sessions from your coach — streamed to you, recorded for later.
        Coming soon to Trainers By Sport.
      </p>

      <div className="mt-10 grid max-w-2xl gap-6 text-left sm:grid-cols-3">
        {[
          { icon: Video, title: 'Live sessions', text: 'Trainers host, patrons join in real time.' },
          { icon: Clapperboard, title: 'Replays', text: 'Every stream recorded and watchable on demand.' },
          { icon: Users, title: 'For subscribers', text: 'Included with your active trainer relationship.' },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Icon size={22} className="text-brand-500" />
            <div className="mt-2 font-semibold">{title}</div>
            <div className="mt-1 text-sm text-gray-400">{text}</div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">
        Provider evaluation in progress — Agora (primary) · Twilio · Daily
      </p>
    </div>
  );
}
