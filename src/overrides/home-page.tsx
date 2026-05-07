import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight, BarChart3, Bell, Building2, Globe, Megaphone, Newspaper, SearchCheck, ShieldCheck, Star } from 'lucide-react'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete media coverage details.'
  return value.length > 180 ? value.slice(0, 177).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 14, { fresh: true })
  const latest = posts.slice(0, 8)
  const highlights = [
    { icon: Megaphone, title: 'Media distribution', body: 'Publish and push your release through clear discovery surfaces.' },
    { icon: Globe, title: 'Wider reach', body: 'Structure stories for stronger indexing and better media pickup.' },
    { icon: BarChart3, title: 'Performance focus', body: 'Track outcomes with plan-based analytics and reporting blocks.' },
    { icon: ShieldCheck, title: 'Trusted delivery', body: 'Editorial-style layouts that add credibility to every release.' },
  ]
  const partnerLogos = ['amazon', 'apple', 'AT&T', 'FedEx', 'Starbucks']
  const solutionCards = [
    {
      icon: Bell,
      title: 'News Coverage',
      body: 'Distribute announcements with multi-channel visibility and newsroom-ready formatting.',
    },
    {
      icon: BarChart3,
      title: 'Performance',
      body: 'Track key pickup metrics and campaign outcomes from one concise reporting layer.',
    },
    {
      icon: SearchCheck,
      title: 'Analytics',
      body: 'Monitor impressions, interest signals, and story-level engagement trends.',
    },
    {
      icon: Building2,
      title: 'Public Relations',
      body: 'Position brand updates with clean press pages and stronger trust indicators.',
    },
    {
      icon: Newspaper,
      title: 'Media Outreach',
      body: 'Prepare stories with structured sections that editors can review quickly.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#f1a661]/25 bg-[radial-gradient(circle_at_top_right,rgba(241,166,97,0.28),transparent_45%),linear-gradient(180deg,#fff8ef_0%,#fff2e2_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f1a661]/35 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a5b22]">
                <Star className="h-3.5 w-3.5" />
                Press Media Distribution
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Publish news that earns visibility, trust, and media attention.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f4018]">{SITE_CONFIG.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-[#e38b29] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(227,139,41,0.32)] transition hover:bg-[#cc7417]">
                  View Latest Releases
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {['10K+ Releases Published', '24/7 Distribution Desk', 'Media-Ready Article Pages'].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#f1a661]/25 bg-white/80 px-4 py-3 text-sm font-semibold text-[#6f4018]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#f1a661]/30 bg-white p-5 shadow-[0_25px_60px_rgba(201,123,52,0.18)]">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-[#f1a661]/20">
                <ContentImage src="/freepic/home-hero.jpg" alt="PR team at newsroom desk" width={1200} height={780} className="h-auto w-full object-cover" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[#6f4018]">
                Trusted by newsrooms and PR teams worldwide to publish, distribute, and amplify media stories with speed and credibility.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.title} className="group rounded-[1.5rem] border border-[#f1a661]/25 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(222,134,57,0.2)]">
                <item.icon className="h-5 w-5 text-[#e38b29]" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#6f4018]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#9a5b22]">Latest Press Media</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Newsroom updates from the distribution desk</h2>
            </div>
            <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9a5b22] hover:text-[#e38b29]">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {latest.map((post, index) => (
              <article key={post.id} className={`rounded-[1.5rem] border border-[#f1a661]/25 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(222,134,57,0.2)] ${index === 0 ? 'md:col-span-2' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b22]">{String((post.content as any)?.category || 'Update')}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f4018]">{excerpt(post.summary)}</p>
                <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e38b29] hover:text-[#cc7417]">
                  Read release
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] border border-[#f1a661]/25 bg-gradient-to-r from-[#fdeedc] via-[#ffe9cf] to-[#fff4e6] p-7 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Need distribution support?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Plan your next release with PRnews18 experts.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6f4018]">
                Share your publishing goals and we will help you choose the right release strategy, distribution plan, and analytics setup.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-[#e38b29] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cc7417]">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-[#f1a661]/25 bg-white p-4">
              <ContentImage src="/freepic/news-grid.jpg" alt="Newsroom planning and editorial collaboration" width={800} height={1180} className="h-auto w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="border-y border-[#f1a661]/25 bg-[#fff8ef]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Trusted by platforms</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-5">
              {partnerLogos.map((logo) => (
                <div key={logo} className="rounded-xl border border-[#f1a661]/25 bg-white px-4 py-3 text-sm font-semibold text-[#6f4018]">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#9a5b22]">Get Results with the Solutions You Need</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-[#251308] sm:text-4xl">
              Deliver your message with confidence and structured media tools.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {solutionCards.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-[#f1a661]/25 bg-white p-5 shadow-[0_10px_24px_rgba(227,139,41,0.12)]">
                <item.icon className="h-5 w-5 text-[#e38b29]" />
                <h3 className="mt-3 text-lg font-semibold text-[#251308]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6f4018]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] border border-[#f1a661]/25 bg-white p-7 shadow-[0_16px_40px_rgba(201,123,52,0.14)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Discover Your Next Story</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#251308]">Clear publication flow, from submission to featured release pages.</h2>
              <p className="mt-3 text-sm leading-7 text-[#6f4018]">
                Showcase your updates in a clean dashboard-style experience that makes writing, publishing, and sharing much easier for teams.
              </p>
              <div className="mt-5">
                <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e38b29] hover:text-[#cc7417]">
                  Explore publishing flow
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-[#f1a661]/25 bg-[#fff8ef] p-4">
              <ContentImage src="/freepic/editorial.jpg" alt="Publishing dashboard and newsroom workflow" width={1200} height={760} className="h-auto w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="grid gap-6 rounded-[2rem] bg-[linear-gradient(120deg,#8f4f1d_0%,#b66420_55%,#d67a26_100%)] p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffe7cc]">Ready to Share Your News?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Launch your next press media in minutes.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#fff3e3]">
                Create compelling stories, distribute with confidence, and drive stronger visibility using your PRnews18 workflow.
              </p>
            </div>
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#8f4f1d] transition hover:bg-[#fff0df]">
              Start now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
