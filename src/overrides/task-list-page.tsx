import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { MediaListingClient } from '@/overrides/media-listing-client'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff6e9_0%,#fffaf4_100%)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Press Media Listing</p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Find the right announcement fast with smart filters.</h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#6f4018]">
                Browse all published press media using category and date filters with built-in search. This layout is optimized for quick newsroom scanning on desktop and mobile.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full border border-[#f1a661]/35 bg-white px-5 py-3 text-sm font-semibold text-[#5f3514] hover:bg-[#fff0dd]">
                  Contact Desk
                </Link>
              </div>
            </div>
            <div className="rounded-[1.8rem] border border-[#f1a661]/30 bg-white p-4 shadow-[0_20px_46px_rgba(209,132,63,0.15)]">
              <ContentImage src="/freepic/news-grid.jpg" alt="Editorial team managing newsroom updates" width={700} height={1180} className="h-auto w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <MediaListingClient posts={posts} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
