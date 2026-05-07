import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'For startups publishing occasional releases.',
    features: ['Standard distribution', 'Basic newsroom listing', 'Email support', '1 release / month'],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Best for growing teams with regular campaigns.',
    features: ['Extended distribution', 'Advanced analytics', 'Media reach insights', '4 releases / month'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$199',
    description: 'For agencies and high-volume publishing teams.',
    features: ['Priority distribution', 'Dedicated success manager', 'Competitor benchmarking', 'Unlimited releases'],
  },
]

const comparisons = [
  { label: 'Distribution level', basic: 'Core channels', pro: 'Extended channels', premium: 'Priority + premium channels' },
  { label: 'Analytics', basic: 'Standard open/click metrics', pro: 'Performance dashboard', premium: 'Custom reporting suite' },
  { label: 'Media reach', basic: 'Local and niche visibility', pro: 'National media targeting', premium: 'Global media outreach' },
]

const faqs = [
  {
    q: 'Can I change my plan later?',
    a: 'Yes. You can upgrade or downgrade at any time and changes are applied at the next billing cycle.',
  },
  {
    q: 'Do plans include editorial review?',
    a: 'All plans include baseline formatting checks. Pro and Premium include deeper review support.',
  },
  {
    q: 'Can agencies manage multiple clients?',
    a: 'Yes. Premium is built for multi-client workflows with broader team support.',
  },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#251308]">
      <NavbarShell />
      <main>
        <section className="border-b border-[#f1a661]/20 bg-[linear-gradient(180deg,#fff6e8_0%,#fffaf4_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b22]">Business Wire Style Pricing</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Choose the right plan for your media distribution goals</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#6f4018]">
              Transparent plans with clear differences in distribution level, analytics depth, and media reach.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-[1.8rem] border p-6 ${
                  plan.popular
                    ? 'border-[#e38b29] bg-[#fff4e5] shadow-[0_24px_45px_rgba(227,139,41,0.28)]'
                    : 'border-[#f1a661]/25 bg-white shadow-[0_14px_34px_rgba(206,128,57,0.12)]'
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 right-5 rounded-full bg-[#e38b29] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Most Popular
                  </span>
                ) : null}
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <p className="mt-2 text-sm text-[#7c471d]">{plan.description}</p>
                <p className="mt-5 text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-[#7c471d]">per month</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#5f3514]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#e38b29]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e38b29] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cc7417]">
                  Choose {plan.name}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6">
            <h2 className="text-2xl font-semibold">Features Comparison</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#f1a661]/25 text-left">
                    <th className="py-3 font-semibold text-[#9a5b22]">Feature</th>
                    <th className="py-3 font-semibold text-[#9a5b22]">Basic</th>
                    <th className="py-3 font-semibold text-[#9a5b22]">Pro</th>
                    <th className="py-3 font-semibold text-[#9a5b22]">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.label} className="border-b border-[#f1a661]/15">
                      <td className="py-3 font-semibold">{row.label}</td>
                      <td className="py-3 text-[#6f4018]">{row.basic}</td>
                      <td className="py-3 text-[#6f4018]">{row.pro}</td>
                      <td className="py-3 text-[#6f4018]">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6">
              <h2 className="text-2xl font-semibold">Add-ons</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Press media writing assistance',
                  'Priority editorial review',
                  'Extra language localization',
                  'Custom media outreach list',
                ].map((addon) => (
                  <div key={addon} className="rounded-xl border border-[#f1a661]/20 bg-[#fff8ef] px-4 py-3 text-sm font-medium text-[#5f3514]">
                    {addon}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-4 shadow-[0_18px_36px_rgba(209,132,63,0.12)]">
              <ContentImage src="/freepic/pricing.jpg" alt="Business team reviewing pricing and analytics" width={850} height={1480} className="h-auto w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="rounded-[1.8rem] border border-[#f1a661]/25 bg-white p-6">
            <h2 className="text-2xl font-semibold">FAQs</h2>
            <div className="mt-5 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-[#f1a661]/20 bg-[#fff8ef] p-4">
                  <h3 className="text-base font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6f4018]">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
