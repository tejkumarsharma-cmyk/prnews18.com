'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarDays, Filter, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open this release for the complete story and distribution details.'
  return value.length > 150 ? `${value.slice(0, 147).trimEnd()}...` : value
}

function getCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  if (typeof content.category === 'string' && content.category.trim()) return content.category.trim()
  if (typeof post.tags?.[0] === 'string') return post.tags[0]
  return 'General'
}

function inDateRange(publishedAt: string | null | undefined, range: string) {
  if (range === 'all') return true
  const published = publishedAt ? new Date(publishedAt) : null
  if (!published || Number.isNaN(published.getTime())) return range === 'all'
  const now = Date.now()
  const diff = now - published.getTime()
  if (range === '7days') return diff <= 7 * 24 * 60 * 60 * 1000
  if (range === '30days') return diff <= 30 * 24 * 60 * 60 * 1000
  if (range === 'year') return published.getFullYear() === new Date().getFullYear()
  return true
}

export function MediaListingClient({ posts }: { posts: SitePost[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('all')

  const categories = useMemo(() => {
    const values = Array.from(new Set(posts.map((post) => getCategory(post))))
    return ['all', ...values]
  }, [posts])

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        (post.summary || '').toLowerCase().includes(normalizedQuery)
      const postCategory = getCategory(post)
      const matchesCategory = category === 'all' || postCategory === category
      const matchesDate = inDateRange(post.publishedAt, dateRange)
      return matchesQuery && matchesCategory && matchesDate
    })
  }, [category, dateRange, posts, query])

  return (
    <>
      <section className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-5 shadow-[0_20px_45px_rgba(209,132,63,0.12)] sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_220px_220px]">
          <label className="flex h-12 items-center gap-2 rounded-xl border border-[#f1a661]/30 bg-[#fff8ef] px-4">
            <Search className="h-4 w-4 text-[#9a5b22]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search press media..."
              className="h-full w-full bg-transparent text-sm outline-none placeholder:text-[#9a5b22]/70"
            />
          </label>

          <label className="flex h-12 items-center gap-2 rounded-xl border border-[#f1a661]/30 bg-[#fff8ef] px-3">
            <Filter className="h-4 w-4 text-[#9a5b22]" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-full w-full bg-transparent text-sm outline-none">
              {categories.map((value) => (
                <option key={value} value={value}>
                  {value === 'all' ? 'All categories' : value}
                </option>
              ))}
            </select>
          </label>

          <label className="flex h-12 items-center gap-2 rounded-xl border border-[#f1a661]/30 bg-[#fff8ef] px-3">
            <CalendarDays className="h-4 w-4 text-[#9a5b22]" />
            <select value={dateRange} onChange={(event) => setDateRange(event.target.value)} className="h-full w-full bg-transparent text-sm outline-none">
              <option value="all">Any date</option>
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="year">This year</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.id} className="group rounded-[1.6rem] border border-[#f1a661]/25 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(217,130,54,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b22]">{getCategory(post)}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#2b170a]">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#6f4018]">{excerpt(post.summary)}</p>
            <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex items-center rounded-full border border-[#f1a661]/35 px-4 py-2 text-sm font-semibold text-[#9a5b22] transition-colors hover:bg-[#fff0dd] hover:text-[#e38b29]">
              Read full release
            </Link>
          </article>
        ))}
      </section>

      {!filtered.length ? (
        <section className="mt-8 rounded-[1.4rem] border border-dashed border-[#f1a661]/45 bg-[#fff5e8] p-7 text-center">
          <p className="text-lg font-semibold text-[#5f3514]">No press media match your filters.</p>
          <p className="mt-2 text-sm text-[#8d5220]">Try changing category/date selection or clearing your search query.</p>
        </section>
      ) : null}
    </>
  )
}
