export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Security Tools
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Know Your API Key{' '}
          <span className="text-[#58a6ff]">Blast Radius</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan GitHub repos and cloud infrastructure to map every service that depends on each API key — so you can rotate safely, without breaking production.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', title: 'Codebase Scan', desc: 'Detects API key references across all your GitHub repos automatically.' },
          { icon: '🗺️', title: 'Dependency Map', desc: 'Visual graph of which services rely on each key.' },
          { icon: '🔄', title: 'Safe Rotation', desc: 'Know the full impact before you rotate or revoke any key.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited repo scans',
              'Cloud infra integration (AWS, GCP, Azure)',
              'Blast radius dashboard',
              'Slack & email alerts on key exposure',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the scanner find API keys?',
              a: 'We use pattern matching and entropy analysis on your GitHub repositories to detect API key references, environment variable names, and secret identifiers — without storing the actual key values.',
            },
            {
              q: 'Is my source code stored on your servers?',
              a: 'No. We only store metadata: file paths, key identifiers, and service mappings. Your source code is never persisted.',
            },
            {
              q: 'Which cloud providers are supported?',
              a: 'AWS, GCP, and Azure are supported today. We read IAM and secret manager configs to map key usage across your infrastructure.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} API Key Blast Radius Guard. All rights reserved.
      </footer>
    </main>
  )
}
