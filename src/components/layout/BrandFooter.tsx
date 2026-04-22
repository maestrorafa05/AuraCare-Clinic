import type { NavigationItem } from './BrandHeader'
import { Container } from '../ui/Container'

type BrandFooterProps = {
  brand: string
  navItems: NavigationItem[]
  phone: string
  email: string
  address: string
}

const primaryServices = [
  'Konsultasi dokter estetika',
  'Laser dan skin rejuvenation',
  'Anti-aging dan skin booster',
]

const openingHours = [
  'Senin - Jumat / 09.00 - 20.00',
  'Sabtu / 09.00 - 18.00',
  'Minggu / By appointment only',
]

export function BrandFooter({
  brand,
  navItems,
  phone,
  email,
  address,
}: BrandFooterProps) {
  return (
    <footer
      id="contact"
      className="border-t border-[#d7cdc1] bg-[#17332d] py-16 text-white"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-12">
          <div>
            <p className="font-fashion-display text-4xl leading-none tracking-[-0.05em]">
              {brand}
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
              Klinik estetika premium dengan konsultasi yang jelas, suasana yang
              tenang, dan perawatan yang dirancang sesuai kebutuhan pasien.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/74">
              {navItems.slice(0, 4).map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c0ac]">
              Kontak
            </p>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-white/76">
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="transition hover:text-white">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="transition hover:text-white">
                {email}
              </a>
              <p>{address}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c0ac]">
              Info Klinik
            </p>
            <div className="mt-5 grid gap-5 text-sm leading-7 text-white/76">
              <div>
                {openingHours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                {primaryServices.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {brand}. All rights reserved.</p>
          <a href="#top" className="transition hover:text-white">
            Kembali ke atas
          </a>
        </div>
      </Container>
    </footer>
  )
}
