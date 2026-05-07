'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const utilityLinks = [{ label: 'Support', href: '/contact' }]
const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Latest News', href: '/updates' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1a661]/25 bg-[#fff9f2]/95 text-[#281507] backdrop-blur-lg">
      <div className="border-b border-[#f1a661]/20 bg-[#fdeedc]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[12px] sm:px-6">
          {utilityLinks.map((item) => (
            <Link key={item.label} href={item.href} className="font-medium text-[#9a5b22] transition-colors hover:text-[#e38b29]">
              {item.label}
            </Link>
          ))}
          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/login" className="font-medium text-[#9a5b22] hover:text-[#e38b29]">
              Sign In
            </Link>
            <Link href="/register" className="rounded-full border border-[#e38b29]/40 bg-white px-3 py-1 font-semibold text-[#281507] transition-colors hover:bg-[#fff3e3]">
              Create Account
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f1a661]/40 bg-white p-1 shadow-sm">
            <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xl font-bold tracking-tight">{SITE_CONFIG.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-[#9a5b22]">Media Press Media Platform</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active ? 'bg-[#e38b29] text-white shadow-[0_10px_24px_rgba(227,139,41,0.32)]' : 'text-[#4e2d11] hover:bg-[#ffe3bf]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/search" className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#f1a661]/35 text-[#4e2d11] transition-colors hover:bg-[#ffe7ca] sm:inline-flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Link>
          <Link href="/updates" className="hidden rounded-full bg-[#e38b29] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#cc7417] sm:inline-flex">
            Submit Release
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f1a661]/35 text-[#4e2d11] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#f1a661]/20 bg-[#fff7ed] px-4 py-4 sm:px-6 lg:hidden">
          <div className="grid gap-2">
            {primaryNav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    active ? 'bg-[#e38b29] text-white' : 'border border-[#f1a661]/30 bg-white text-[#4e2d11]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link href="/search" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-2xl border border-[#f1a661]/30 bg-white px-4 py-3 text-sm font-semibold text-[#4e2d11]">
              <Search className="h-4 w-4" />
              Search releases
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
