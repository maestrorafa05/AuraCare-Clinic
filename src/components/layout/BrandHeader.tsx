import { useEffect, useState } from 'react'
import { ActionLink } from '../ui/ActionLink'
import { Container } from '../ui/Container'

export type NavigationItem = {
  label: string
  href: string
}

type BrandHeaderProps = {
  brand: string
  navItems: NavigationItem[]
  ctaLabel: string
  ctaHref: string
}

export function BrandHeader({
  brand,
  navItems,
  ctaLabel,
  ctaHref,
}: BrandHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isActive = isHovered || isScrolled || isMenuOpen
  const brandTextClass = isActive ? 'text-[#17332d]' : 'text-white'
  const subTextClass = isActive ? 'text-[#8a7360]' : 'text-white/72'
  const navTextClass = isActive
    ? 'text-[#425a54] hover:text-[#17332d]'
    : 'text-white/78 hover:text-white'
  const menuButtonClass = isActive
    ? 'border-[#d8cfc3] bg-white text-[#17332d] hover:border-[#b89c87]'
    : 'border-white/20 bg-white/10 text-white hover:border-white/36 hover:bg-white/16'
  const ctaClass = isActive
    ? 'border-[#17332d] bg-[#17332d] !text-white hover:bg-[#112722]'
    : 'border-white bg-white !text-[#17332d] hover:bg-[#f3ede5]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isActive
          ? 'border-b border-[#d8cfc3]/80 bg-[#f6f1ea]/88 shadow-[0_12px_30px_rgba(23,51,45,0.06)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container className="flex items-center justify-between gap-6 py-4">
        <a href="#top" className="flex items-center">
          <span>
            <span
              className={`block font-fashion-display text-2xl leading-none tracking-[-0.04em] md:text-[2rem] ${brandTextClass}`}
            >
              {brand}
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-[0.28em] ${subTextClass}`}
            >
              Aesthetic & Wellness Clinic
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${navTextClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <ActionLink to={ctaHref} className={ctaClass}>
            {ctaLabel}
          </ActionLink>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Buka menu navigasi"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${menuButtonClass}`}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <Container className="pb-4 lg:hidden">
          <div className="rounded-[28px] border border-[#dfd5cb] bg-white p-5 shadow-[0_24px_80px_rgba(23,51,45,0.08)]">
            <nav className="grid gap-2" aria-label="Navigasi mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#17332d] transition hover:bg-[#f7f1ea]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 border-t border-[#efe6dc] pt-4">
              <ActionLink
                to={ctaHref}
                className="w-full border-[#17332d] bg-[#17332d] hover:bg-[#112722]"
              >
                {ctaLabel}
              </ActionLink>
            </div>
          </div>
        </Container>
      )}
    </header>
  )
}
