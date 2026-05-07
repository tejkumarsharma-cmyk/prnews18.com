import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight } from 'lucide-react'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 30
export const generateMetadata = () => buildTaskMetadata('mediaDistribution')

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the complete press media for all newsroom details.'
  return value.length > 180 ? `${value.slice(0, 177).trimEnd()}...` : value
}

export default async function BlogPage() {
  const posts = await fetchTaskPosts('mediaDistribution', 18, { fresh: true })
  const featured = posts[0]
  const gridPosts = posts.slice(1, 13)

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff7eb_0%,#fffaf4_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a5b22]">Latest News</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Newsroom and press media highlights</h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          {featured ? (
            <article className="grid gap-6 rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6 shadow-[0_18px_40px_rgba(209,132,63,0.12)] lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a5b22]">Featured release</p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em]">{featured.title}</h2>
                <p className="mt-3 text-sm leading-8 text-[#6f4018]">{excerpt(featured.summary)}</p>
                <Link href={`/updates/${featured.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e38b29] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cc7417]">
                  Read featured story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-xl border border-[#f1a661]/20 bg-[#fff8ef] p-3">
                <ContentImage src="/freepic/editorial.jpg" alt="Editorial strategy and newsroom publishing" width={720} height={1180} className="h-auto w-full rounded-lg object-cover" />
              </div>
            </article>
          ) : null}
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post) => (
              <article key={post.id} className="rounded-[1.6rem] border border-[#f1a661]/25 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(209,132,63,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b22]">
                  {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f4018]">{excerpt(post.summary)}</p>
                <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e38b29] hover:text-[#cc7417]">
                  Continue reading
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
