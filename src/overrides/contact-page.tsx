import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff4e5_0%,#fffaf4_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Contact PRnews18.com</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Talk to our media distribution team</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#6f4018]">
              Share your publishing goals, campaign details, or account questions and our support desk will route you to the right team quickly.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6 shadow-[0_18px_40px_rgba(209,132,63,0.12)] sm:p-7">
              <h2 className="text-2xl font-semibold">Send a message</h2>
              <p className="mt-2 text-sm text-[#7c471d]">All fields below are optional UI-only placeholders and keep existing logic untouched.</p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="h-12 rounded-xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 text-sm outline-none" placeholder="Contact Name" />
                  <input className="h-12 rounded-xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 text-sm outline-none" placeholder="Phone Number" />
                </div>
                <input className="h-12 rounded-xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 text-sm outline-none" placeholder="Email" />
                <div className="grid gap-4 md:grid-cols-2">
                  <select className="h-12 rounded-xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 text-sm outline-none">
                    <option>What type of organization are you?</option>
                  </select>
                  <select className="h-12 rounded-xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 text-sm outline-none">
                    <option>Subject: How may we help you?</option>
                  </select>
                </div>
                <textarea className="min-h-[170px] rounded-2xl border border-[#f1a661]/35 bg-[#fff8ef] px-4 py-3 text-sm outline-none" placeholder="Message / Comment" />
                <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-[#e38b29] px-6 text-sm font-semibold text-white transition hover:bg-[#cc7417]">
                  Submit Now
                </button>
              </form>
            </div>


          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-4 shadow-[0_18px_40px_rgba(209,132,63,0.12)]">
            <ContentImage src="/freepic/contact.jpg" alt="Support team in contact center" width={1300} height={840} className="h-auto w-full rounded-xl object-cover" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
