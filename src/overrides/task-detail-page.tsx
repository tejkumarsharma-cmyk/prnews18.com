import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'
import { Facebook, Linkedin, Share2, Twitter } from 'lucide-react'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 3)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const image =
    (Array.isArray(post.media) && post.media.find((item) => typeof item?.url === 'string' && item.url)?.url) ||
    (Array.isArray((post.content as Record<string, unknown>)?.images) && ((post.content as Record<string, unknown>).images as string[])[0]) ||
    '/freepic/press-release.jpg'
  const subtitle =
    (typeof content.excerpt === 'string' && content.excerpt) ||
    (typeof content.description === 'string' && content.description) ||
    post.summary ||
    'Latest media distribution update from the PRnews18 newsroom.'
  const releaseUrl = `/updates/${post.slug}`

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff6ea_0%,#fffaf4_100%)] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.23em] text-[#9a5b22]">Press Media</div>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base leading-8 text-[#6f4018]">{subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#875028]">
            <span>By {post.authorName || 'PRnews18 Editorial Desk'}</span>
            <span className="rounded-full border border-[#f1a661]/35 px-3 py-1">
              {String((content.category as string) || 'Media Update')}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#9a5b22] hover:text-[#e38b29]">
              Home
            </Link>
            <span>›</span>
            <Link href="/updates" className="text-[#9a5b22] hover:text-[#e38b29]">
              Latest News
            </Link>
            <span>›</span>
            <span className="truncate text-[#875028]">{post.title}</span>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="rounded-[2rem] border border-[#f1a661]/25 bg-white p-5 shadow-[0_24px_50px_rgba(209,132,63,0.14)] sm:p-8">
            <div className="overflow-hidden rounded-[1.2rem] border border-[#f1a661]/20">
              <ContentImage src={String(image)} alt={`${post.title} featured image`} width={1400} height={820} className="h-auto w-full object-cover" />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-[#9a5b22]">Share:</span>
              <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(releaseUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f1a661]/35 text-[#9a5b22] hover:bg-[#fff2df]">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(releaseUrl)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f1a661]/35 text-[#9a5b22] hover:bg-[#fff2df]">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(releaseUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f1a661]/35 text-[#9a5b22] hover:bg-[#fff2df]">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href={releaseUrl} className="inline-flex h-9 items-center gap-2 rounded-full border border-[#f1a661]/35 px-4 text-sm font-semibold text-[#9a5b22] hover:bg-[#fff2df]">
                <Share2 className="h-4 w-4" />
                Release URL
              </Link>
            </div>

            <div className="article-content prose prose-lg mt-8 max-w-none prose-headings:text-[#2b170a] prose-p:text-[#5f3514] prose-li:text-[#5f3514]">
              <RichContent html={html} />
            </div>
          </article>

          <aside className="space-y-5">
            <section className="rounded-[1.6rem] border border-[#f1a661]/25 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b22]">Related Releases</p>
              <div className="mt-3 space-y-4">
                {recent.map((item) => (
                  <Link key={item.id} href={`/updates/${item.slug}`} className="block rounded-xl border border-[#f1a661]/20 p-3 transition hover:bg-[#fff6ea]">
                    <p className="text-sm font-semibold leading-6 text-[#321b0b]">{item.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-10 rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6">
          <h2 className="text-2xl font-semibold">More from PRnews18 newsroom</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {recent.map((item) => (
              <Link key={`related-${item.id}`} href={`/updates/${item.slug}`} className="rounded-[1.2rem] border border-[#f1a661]/25 bg-[#fff8ef] p-4 transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(209,132,63,0.16)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b22]">Related</p>
                <h3 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
