import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { Globe2, Newspaper, ShieldCheck, Target } from 'lucide-react'

const pillars = [
  {
    icon: Newspaper,
    title: 'Editorial-grade presentation',
    body: 'Every release gets a clean reading surface with better structure and stronger trust cues.',
  },
  {
    icon: Globe2,
    title: 'Distribution-minded UX',
    body: 'Our workflows prioritize reach, discoverability, and media pickup instead of generic post feeds.',
  },
  {
    icon: Target,
    title: 'Outcome-focused publishing',
    body: 'Plans, filters, and page layouts are designed to support campaign goals at every scale.',
  },
  {
    icon: ShieldCheck,
    title: 'Stable shared core',
    body: 'We preserve base platform logic while creating a unique visual identity for this site.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff6e8_0%,#fffaf4_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">About Us</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{SITE_CONFIG.name} is built for modern media distribution.</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#6f4018]">
              We help brands and agencies publish, distribute, and maintain press-ready content experiences through a clean SaaS newsroom model.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.6rem] border border-[#f1a661]/25 bg-white p-6 shadow-[0_16px_36px_rgba(209,132,63,0.12)]">
                <pillar.icon className="h-5 w-5 text-[#e38b29]" />
                <h2 className="mt-4 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#6f4018]">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 rounded-[2rem] border border-[#f1a661]/25 bg-white p-7 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
            <h2 className="text-3xl font-bold tracking-[-0.03em]">What makes this site different</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#6f4018]">
              <li>Purpose-built visual language aligned to media press media workflows.</li>
              <li>Primary UI emphasis on the core media distribution task while keeping all base routes accessible.</li>
              <li>Distinct homepage, navbar, cards, and page rhythm to avoid cloned-site carryover.</li>
              <li>Mobile-first responsive system with lightweight animations and high scanability.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/updates" className="rounded-full bg-[#e38b29] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cc7417]">
                Browse Releases
              </Link>
              <Link href="/contact" className="rounded-full border border-[#f1a661]/35 bg-[#fff8ef] px-5 py-3 text-sm font-semibold text-[#5f3514] hover:bg-[#fff1de]">
                Contact Team
              </Link>
            </div>
          </div>
            <div className="rounded-xl border border-[#f1a661]/20 bg-[#fff8ef] p-3">
              <ContentImage src="/freepic/about.jpg" alt="PRnews18 team collaboration meeting" width={640} height={980} className="h-auto w-full rounded-lg object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
