import { BrandFooter } from './components/layout/BrandFooter'
import { BrandHeader, type NavigationItem } from './components/layout/BrandHeader'
import { ActionLink } from './components/ui/ActionLink'
import { Container } from './components/ui/Container'
import { FaqItem } from './components/ui/FaqItem'
import { SectionHeading } from './components/ui/SectionHeading'

const headerNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Layanan', href: '#services' },
  { label: 'Keunggulan', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
]

const footerNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Layanan', href: '#services' },
  { label: 'Keunggulan', href: '#experience' },
  { label: 'Dokter', href: '#doctors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#contact' },
]

const serviceItems = [
  {
    title: 'Konsultasi dokter estetika',
    description:
      'Sesi awal untuk memahami kondisi kulit dan arah treatment yang paling sesuai.',
    duration: '30 - 45 menit',
    focus: 'Assessment personal',
  },
  {
    title: 'Laser rejuvenation',
    description:
      'Untuk tekstur, pori, bekas jerawat, dan warna kulit yang lebih merata.',
    duration: '45 - 60 menit',
    focus: 'Skin clarity',
  },
  {
    title: 'Acne and brightening plan',
    description:
      'Rangkaian perawatan untuk kulit berjerawat, sensitif, atau tampak kusam.',
    duration: '60 menit',
    focus: 'Problem-solving care',
  },
  {
    title: 'Skin booster and anti-aging',
    description:
      'Fokus pada hidrasi, elastisitas, dan tampilan kulit yang sehat dan segar.',
    duration: '45 menit',
    focus: 'Healthy glow',
  },
  {
    title: 'Contouring and lifting',
    description:
      'Membantu membentuk kontur wajah dengan hasil yang tetap natural.',
    duration: '45 - 75 menit',
    focus: 'Natural definition',
  },
  {
    title: 'Wellness recovery infusion',
    description:
      'Support therapy untuk hidrasi, energi, dan recovery harian.',
    duration: '40 menit',
    focus: 'Whole-body recovery',
  },
]

const experienceHighlights = [
  {
    title: 'Assessment menyeluruh',
    description: 'Kondisi kulit dan kebutuhan pasien dibaca lebih dulu.',
  },
  {
    title: 'Rencana perawatan bertahap',
    description: 'Program disusun bertahap agar lebih aman dan relevan.',
  },
  {
    title: 'Aftercare yang terarah',
    description: 'Panduan aftercare dibuat ringkas dan jelas.',
  },
  {
    title: 'Concierge-style booking',
    description: 'Jadwal dan reminder ditangani lebih rapi.',
  },
]

const doctors = [
  {
    name: 'dr. Aurelia Mahendra',
    role: 'Aesthetic Doctor',
    note: 'Fokus pada anti-aging dan kualitas kulit.',
  },
  {
    name: 'dr. Nadia Prameswari',
    role: 'Skin & Laser Practitioner',
    note: 'Menangani laser, pigmentasi, dan acne care.',
  },
  {
    name: 'dr. Rafael Santoso',
    role: 'Wellness & Recovery Care',
    note: 'Berfokus pada recovery dan hydration support.',
  },
]

const faqItems = [
  {
    question: 'Apakah saya harus tahu treatment yang saya inginkan sebelum datang?',
    answer:
      'Tidak. Konsultasi awal membantu dokter memahami kondisi kulit dan merekomendasikan treatment yang paling sesuai.',
  },
  {
    question: 'Apakah tersedia treatment dengan downtime minimal?',
    answer:
      'Tersedia beberapa pilihan dengan downtime minimal, tergantung kondisi kulit dan hasil yang ingin dicapai.',
  },
  {
    question: 'Bagaimana proses reservasi biasanya dilakukan?',
    answer:
      'Reservasi dapat dilakukan melalui WhatsApp atau telepon, lalu tim front desk akan membantu konfirmasi jadwal konsultasi.',
  },
  {
    question: 'Apakah ada panduan setelah treatment?',
    answer:
      'Ya. Setiap pasien akan mendapatkan panduan aftercare singkat sesuai treatment yang dijalani.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'AuraCare Clinic',
  image: '/clinic.jpeg',
  description:
    'AuraCare Clinic adalah klinik estetika premium dengan layanan konsultasi dokter, skin treatment, laser rejuvenation, anti-aging, dan wellness recovery.',
  telephone: '+62 21 5099 8800',
  email: 'hello@auracareclinic.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Senopati Raya No. 18',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12190',
    addressCountry: 'ID',
  },
  openingHours: ['Mo-Fr 09:00-20:00', 'Sa 09:00-18:00'],
  areaServed: 'Jakarta',
}

function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="top" className="bg-[#f3ede5] text-slate-950 font-clinic">
        <BrandHeader
          brand="AuraCare Clinic"
          navItems={headerNavigationItems}
          ctaLabel="Reservasi Sekarang"
          ctaHref="#booking"
        />

        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(8, 12, 12, 0.78) 0%, rgba(11, 18, 18, 0.7) 38%, rgba(15, 24, 24, 0.5) 68%, rgba(18, 26, 26, 0.36) 100%), url('/clinic.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.08)_22%,rgba(0,0,0,0.18)_100%),radial-gradient(circle_at_top_left,rgba(216,192,172,0.16),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.12),transparent_20%)]" />

          <Container className="relative flex min-h-screen items-center pb-8 pt-24 md:pb-10 md:pt-28 lg:pt-32">
            <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="max-w-3xl text-white">
                <h1 className="font-fashion-display text-4xl leading-[0.92] tracking-[-0.06em] md:text-6xl xl:text-[4.8rem]">
                  Klinik estetika premium yang tenang, personal, dan tepercaya.
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                  Perawatan kulit, anti-aging, dan wellness treatment dalam
                  suasana yang elegan dan privat.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink
                    to="#booking"
                    variant="light"
                    className="border-white bg-white hover:bg-[#f6f1ea]"
                  >
                    Atur Jadwal Konsultasi
                  </ActionLink>
                  <ActionLink
                    to="#services"
                    variant="ghost"
                    className="border-white/22 bg-white/8 text-white hover:bg-white/14"
                  >
                    Lihat Pilihan Treatment
                  </ActionLink>
                </div>
                <div className="mt-8 grid max-w-2xl gap-3 text-sm text-white/74 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-white/14 bg-white/8 px-4 py-3 backdrop-blur-md">
                    Dokter berpengalaman
                  </div>
                  <div className="rounded-[22px] border border-white/14 bg-white/8 px-4 py-3 backdrop-blur-md">
                    Ruang privat
                  </div>
                  <div className="rounded-[22px] border border-white/14 bg-white/8 px-4 py-3 backdrop-blur-md">
                    Reservasi cepat
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[32px] border border-white/14 bg-white/10 p-6 text-white shadow-[0_30px_90px_rgba(8,20,18,0.25)] backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec9b7]">
                        Jadwal Hari Ini
                      </p>
                      <h2 className="mt-3 max-w-md font-fashion-display text-3xl leading-none tracking-[-0.05em] md:text-[2.2rem]">
                        Reservasi konsultasi yang lebih rapi dan eksklusif.
                      </h2>
                    </div>
                    <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold text-white/74">
                      Same-day slot
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      ['09.30', 'Konsultasi dokter estetika'],
                      ['11.00', 'Laser dan rejuvenation session'],
                      ['14.00', 'Acne and brightening review'],
                    ].map(([time, label]) => (
                      <div
                        key={time}
                        className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/12 px-4 py-3"
                      >
                        <span className="text-sm font-semibold tracking-[0.08em] text-[#dec9b7]">
                          {time}
                        </span>
                        <span className="text-sm text-white/74">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
                    {[
                      ['Natural result', 'Refined & balanced'],
                      ['Private room', 'Quiet treatment'],
                      ['Fast response', 'WhatsApp booking'],
                    ].map(([title, copy]) => (
                      <div
                        key={title}
                        className="rounded-[20px] bg-white/8 px-4 py-3"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dec9b7]">
                          {title}
                        </p>
                        <p className="mt-2 text-sm text-white/74">{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="Layanan Klinik"
              title="Temukan treatment yang sesuai untuk kulit sehat, tampilan lebih segar, dan hasil yang tetap natural."
              description="Setiap layanan dirancang untuk membantu Anda memahami pilihan treatment sebelum memulai konsultasi."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {serviceItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[32px] border border-[#e3d8cd] bg-white p-7 shadow-[0_24px_80px_rgba(23,51,45,0.06)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#17332d,#4b6a62)] text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      AC
                    </span>
                    <span className="rounded-full bg-[#f4ede5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7f5f4b]">
                      {item.focus}
                    </span>
                  </div>
                  <h3 className="mt-7 font-fashion-display text-4xl leading-none tracking-[-0.05em] text-[#17332d]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#60716b]">
                    {item.description}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-[#efe5da] pt-5 text-sm">
                    <span className="text-[#8a7360]">Estimasi sesi</span>
                    <span className="font-semibold text-[#17332d]">{item.duration}</span>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="experience" className="bg-[#17332d] py-24 text-white">
          <Container className="flex min-h-screen items-center py-16 lg:py-20">
            <div className="w-full">
              <div className="mx-auto max-w-[1040px] text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#dec9b7]">
                  Keunggulan Experience
                </p>
                <h2 className="font-fashion-display mt-4 text-4xl leading-[1] tracking-[-0.045em] text-white md:text-[3.35rem] xl:text-[4rem]">
                  <span className="block lg:whitespace-nowrap">
                    Konsultasi yang jelas dan pelayanan yang rapi
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    untuk pengalaman treatment yang lebih nyaman.
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-white/70 md:text-base lg:max-w-fit lg:whitespace-nowrap">
                  AuraCare mengutamakan kenyamanan pasien sejak reservasi,
                  konsultasi, tindakan, hingga aftercare.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
                <div className="rounded-[30px] border border-white/12 bg-white/6 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#dec9b7]">
                    Alur kunjungan
                  </p>
                  <div className="mt-4 grid gap-3">
                    {[
                      ['01', 'Reservasi dan konfirmasi kebutuhan awal'],
                      ['02', 'Konsultasi dokter dan assessment personal'],
                      ['03', 'Tindakan sesuai rekomendasi atau penyusunan program'],
                      ['04', 'Aftercare, kontrol, dan maintenance planning'],
                    ].map(([step, label]) => (
                      <div
                        key={step}
                        className="flex items-center gap-4 rounded-[22px] bg-black/12 px-4 py-3"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 text-sm font-semibold text-[#dec9b7]">
                          {step}
                        </span>
                        <p className="text-sm leading-6 text-white/76">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {experienceHighlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_18px_60px_rgba(7,18,15,0.18)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dec9b7]">
                        AuraCare Standard
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/72">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="doctors" className="py-24">
          <Container>
            <SectionHeading
              eyebrow="Tim Dokter"
              title="Kenali tim dokter yang mendampingi setiap konsultasi dan treatment Anda."
              description="Setiap dokter memiliki fokus layanan yang jelas untuk membantu Anda memilih treatment dengan lebih yakin."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {doctors.map((doctor) => (
                <article
                  key={doctor.name}
                  className="rounded-[32px] border border-[#e2d7cd] bg-[linear-gradient(180deg,#fffdfb_0%,#f6f0e8_100%)] p-7 shadow-[0_24px_80px_rgba(23,51,45,0.06)]"
                >
                  <div className="rounded-[28px] bg-[linear-gradient(135deg,#d8c0ac,#f5eee6)] p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7f5f4b]">
                      Specialist profile
                    </p>
                    <h3 className="mt-4 font-fashion-display text-4xl leading-none tracking-[-0.05em] text-[#17332d]">
                      {doctor.name}
                    </h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5a746d]">
                      {doctor.role}
                    </p>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-[#60716b]">{doctor.note}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="faq"
          className="bg-[linear-gradient(180deg,#fffdf9_0%,#f6efe7_100%)] py-24"
        >
          <Container>
            <div className="mx-auto max-w-6xl">
              <SectionHeading
                eyebrow="FAQ"
                title="Informasi penting yang paling sering ditanyakan sebelum reservasi."
                description="Jawaban dibuat singkat, jelas, dan mudah dipahami agar pasien baru merasa lebih yakin sebelum datang."
                align="center"
                className="max-w-4xl"
              />

              <div className="mt-12 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                <div className="grid gap-4">
                  <article className="rounded-[34px] border border-[#e6dbcf] bg-[#17332d] p-8 text-white shadow-[0_24px_80px_rgba(23,51,45,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dec9b7]">
                      Butuh bantuan cepat?
                    </p>
                    <h3 className="mt-4 font-fashion-display text-4xl leading-none tracking-[-0.05em]">
                      Tim kami siap membantu Anda memilih langkah pertama.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      Jika masih ragu menentukan treatment, mulai dari konsultasi
                      awal untuk mendapatkan arahan yang lebih tepat.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ActionLink
                        to="#booking"
                        variant="light"
                        className="border-white bg-white text-[#17332d] hover:bg-[#f5eee6]"
                      >
                        Atur Konsultasi
                      </ActionLink>
                      <ActionLink
                        to="#services"
                        variant="ghost"
                        className="border-white/18 bg-white/8 text-white hover:bg-white/14"
                      >
                        Lihat Layanan
                      </ActionLink>
                    </div>
                  </article>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      ['Fast Response', 'WhatsApp dan front desk responsif.'],
                      ['Doctor-led', 'Arahan treatment dimulai dari konsultasi.'],
                      ['Private Care', 'Ruang tindakan tenang dan privat.'],
                    ].map(([title, copy]) => (
                      <article
                        key={title}
                        className="rounded-[26px] border border-[#e6dbcf] bg-white p-5 shadow-[0_18px_50px_rgba(23,51,45,0.05)]"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7360]">
                          {title}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[#61726d]">{copy}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {faqItems.map((item, index) => (
                    <FaqItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      defaultOpen={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="booking" className="py-24">
          <Container className="grid gap-8 rounded-[40px] border border-[#e2d7cc] bg-[linear-gradient(135deg,#fffdf9_0%,#f4ede5_100%)] p-8 shadow-[0_26px_90px_rgba(23,51,45,0.08)] lg:grid-cols-[1fr_0.95fr] lg:items-center md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a7360]">
                Reservasi dan Kontak
              </p>
              <h2 className="mt-4 max-w-2xl font-fashion-display text-5xl leading-none tracking-[-0.06em] text-[#17332d] md:text-7xl">
                Jadwalkan konsultasi dengan proses yang mudah, cepat, dan
                nyaman.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#60716b] md:text-lg">
                Lihat informasi klinik dan pilih waktu kunjungan dengan lebih
                yakin.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  to="tel:+622150998800"
                  className="border-[#17332d] bg-[#17332d] hover:bg-[#112722]"
                >
                  Hubungi Klinik
                </ActionLink>
                <ActionLink
                  to="#services"
                  variant="secondary"
                  className="border-[#d8cfc3] bg-white text-[#17332d]"
                >
                  Tinjau Layanan
                </ActionLink>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[30px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(23,51,45,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7360]">
                  Detail Klinik
                </p>
                <div className="mt-5 grid gap-4 text-sm leading-7 text-[#60716b]">
                  <div className="rounded-[22px] bg-[#f8f3ec] p-4">
                    Jl. Senopati Raya No. 18, Jakarta Selatan
                  </div>
                  <div className="rounded-[22px] bg-[#eef3f0] p-4">
                    Senin - Jumat / 09.00 - 20.00
                    <br />
                    Sabtu / 09.00 - 18.00
                  </div>
                  <div className="rounded-[22px] bg-[#f8f3ec] p-4">
                    WhatsApp, telepon, dan reservasi konsultasi dengan
                    konfirmasi cepat dari tim front desk.
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-[#e2d7cc] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7360]">
                    First visit
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[#17332d]">
                    Datang 10 menit lebih awal untuk registrasi singkat dan
                    review kebutuhan awal.
                  </p>
                </div>
                <div className="rounded-[28px] border border-[#e2d7cc] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7360]">
                    Follow-up
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[#17332d]">
                    Setelah treatment, pasien mendapatkan panduan kontrol dan
                    aftercare yang lebih terstruktur.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <BrandFooter
          brand="AuraCare Clinic"
          navItems={footerNavigationItems}
          phone="+62 21 5099 8800"
          email="hello@auracareclinic.com"
          address="Jl. Senopati Raya No. 18, Jakarta Selatan"
        />
      </main>
    </>
  )
}

export default App
