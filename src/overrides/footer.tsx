import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#f1a661]/20 bg-[#1f1209] text-[#ffe7ca]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#2d190b] p-1">
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{SITE_CONFIG.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#f1a661]">Media Press Distribution</p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#ffd8a9]">
              Publish your press media, improve media visibility, and keep your newsroom content discoverable across channels.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f1a661]">Platform</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/updates" className="transition-colors hover:text-white">Latest News</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-white">Newsroom</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f1a661]">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/help" className="transition-colors hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f1a661]">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[#ffd8a9]">
          &copy; {year} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
