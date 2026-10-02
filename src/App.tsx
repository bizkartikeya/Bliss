import { useState, type ChangeEvent, type FormEvent } from 'react'

const WHATSAPP_NUMBER = '919999999999'

const stats = [
  { value: '2', label: 'Dedicated workout floors' },
  { value: '6 AM+', label: 'Early access & flexible timing' },
  { value: '100%', label: 'Focus on functional fitness' },
]

const floorFeatures = [
  'Strength stations and plate-loaded machines',
  'Leg day focus with squat racks and power tools',
  'High-energy cardio and conditioning options',
]

const upperBodyFeatures = [
  'Chest, shoulder and back training stations',
  'Premium dumbbell and cable setups',
  'Upper-body hypertrophy and sports conditioning',
]

const programs = [
  { title: 'Fat Loss', description: 'Structured routines that improve stamina and burn calories without burnout.', accent: 'Burn' },
  { title: 'Strength Build', description: 'Progressive training for better muscle and raw power output.', accent: 'Power' },
  { title: 'Muscle Gain', description: 'Targeted upper and lower body plans for visible transformation.', accent: 'Gain' },
  { title: 'Athletic Prep', description: 'Performance-focused conditioning for speed, agility and resilience.', accent: 'Train' },
]

const memberships = [
  { name: 'Starter', price: '₹899', note: 'Monthly', perks: ['Gym access', 'Locker support', 'Basic fitness guidance'] },
  { name: 'Pro Athlete', price: '₹1,499', note: 'Monthly', perks: ['Everything in Starter', 'Priority floor guidance', 'Progress tracking'], featured: true },
  { name: 'Elite', price: '₹2,199', note: 'Monthly', perks: ['Everything in Pro', 'Trainer consultation', 'Custom program plan'] },
]

const gallery = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80',
]

const testimonials = [
  { name: 'Rahul S.', quote: 'The split-floor layout is perfect. I train legs downstairs and upper body upstairs without wasting time.' },
  { name: 'Prerna K.', quote: 'The vibe is motivating, and the coaching style helps me stay consistent while improving strength.' },
  { name: 'Vikas M.', quote: 'Strong equipment, clean environment, and a serious workout culture. It feels like a premium training club.' },
]

const whyUs = [
  { title: 'Specialized Zones', text: 'Leg floor and upper-body floor separated for focused, efficient work.' },
  { title: 'Smart Atmosphere', text: 'Modern equipment, bold design, and a high-energy environment for results.' },
  { title: 'Goal-Based Coaching', text: 'Programs built around fat loss, muscle gain, and performance goals.' },
  { title: 'Member First', text: 'Supportive staff, flexible timings, and structured progress monitoring.' },
]

const initialForm = {
  name: '',
  phone: '',
  goal: 'General Enquiry',
  message: '',
}

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3.5 font-bold text-slate-950 shadow-[0_16px_40px_rgba(255,153,0,0.35)] transition hover:-translate-y-0.5'
const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3.5 font-bold text-slate-100 transition hover:-translate-y-0.5'
const sectionTitleClass =
  'm-0 max-w-[700px] text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.05] tracking-[-0.05em] text-white'

function App() {
  const [formData, setFormData] = useState(initialForm)

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fullMessage = `Hello BLISS FITNESS CLUB, my name is ${formData.name || 'Customer'}.
Phone: ${formData.phone || 'Not provided'}
Interested in: ${formData.goal}

Message: ${formData.message || 'I want to know more about the gym and membership options.'}

Please share the best package and timings for me.`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-grid mx-auto w-[min(1220px,calc(100%-32px))] pb-12 text-slate-100">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-5 border-b border-white/10 bg-slate-950/70 py-5 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.45)]">
        <div className="inline-flex items-center gap-3.5">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-yellow-300 font-extrabold text-slate-950 shadow-[0_16px_30px_rgba(255,154,47,0.4)]">
            B
          </div>
          <div>
            <p className="m-0 text-[0.72rem] font-extrabold tracking-[0.08em] text-slate-50">
              BLISS FITNESS CLUB
            </p>
            <span className="text-[0.72rem] text-slate-300/80">Power. Strength. Results.</span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
          <a href="#about" className="text-slate-200/80 transition-colors hover:text-white">About</a>
          <a href="#floors" className="text-slate-200/80 transition-colors hover:text-white">Floors</a>
          <a href="#programs" className="text-slate-200/80 transition-colors hover:text-white">Programs</a>
          <a href="#pricing" className="text-slate-200/80 transition-colors hover:text-white">Pricing</a>
          <a href="#contact" className="text-slate-200/80 transition-colors hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className={`${secondaryButtonClass} px-4 py-2.5 text-sm`} href="#contact">
            Book Trial
          </a>
          <a
            className={`${primaryButtonClass} px-4 py-2.5 text-sm`}
            href="https://wa.me/919999999999?text=Hello%20BLISS%20FITNESS%20CLUB%2C%20I%20want%20to%20join%20and%20know%20more%20about%20membership."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="space-y-2">
        <section className="grid min-h-[620px] items-center gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]" id="about">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-orange-200">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Modern strength culture
            </div>
            <h1 className="m-0 max-w-[620px] bg-gradient-to-r from-white via-orange-100 to-amber-300 bg-clip-text text-[clamp(2.8rem,5vw,5.2rem)] font-black leading-[1.05] tracking-[-0.05em] text-transparent">
              Train hard. Lift smart. Live stronger.
            </h1>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-200/80 backdrop-blur-sm">
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-emerald-300">
                New
              </span>
              Membership starts at ₹899/month
            </div>
            <p className="mt-5 max-w-[620px] text-lg leading-8 text-slate-300/80">
              BLISS FITNESS CLUB is built for committed lifters and everyday athletes. With a
              specialized lower-body floor and an upper-body-focused first floor, every session is
              structured to help you progress faster and train with purpose.
            </p>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <a className={primaryButtonClass} href="#contact">
                Get Membership Info
              </a>
              <a
                className={secondaryButtonClass}
                href="https://www.google.com/maps/place/BLISS+FITNESS+CLUB/@29.8635281,77.8662138,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x390eb39ed4ecfa7b:0x82a668313e5992a7!2sBLISS+FITNESS+CLUB!8m2!3d29.8635235!4d77.8687887!16s%2Fg%2F11k50vshx9!3m5!1s0x390eb39ed4ecfa7b:0x82a668313e5992a7!8m2!3d29.8635235!4d77.8687887!16s%2Fg%2F11k50vshx9?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                View on Maps
              </a>
            </div>

            <div className="mt-10 grid max-w-[600px] gap-4 sm:grid-cols-3" aria-label="Club information">
              {stats.map((stat) => (
                <div className="panel-glow rounded-2xl p-4" key={stat.label}>
                  <strong className="block text-[clamp(1.6rem,2vw,2.3rem)] font-extrabold text-white">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-xs text-slate-300/80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[540px]" aria-label="Gym equipment and atmosphere image">
            <div className="absolute left-5 top-5 z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/75 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-sm">
              Leg floor
            </div>
            <div className="absolute bottom-5 right-5 z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/75 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-sm">
              Upper body
            </div>
            <div className="absolute -right-3 -top-3 z-10 hidden h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/30 to-yellow-300/10 blur-2xl md:block" />
            <img
              className="h-full w-full min-h-[540px] rounded-[30px] border border-white/10 object-cover shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
              alt="Athlete training inside modern gym"
            />
          </div>
        </section>

        <section className="mx-auto mt-2 grid max-w-[1180px] gap-5 rounded-[30px] border border-orange-400/10 bg-gradient-to-r from-orange-500/5 via-slate-900/80 to-slate-900/80 p-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-slate-300/70">Premium equipment</span>
            <strong className="mt-2 block text-lg text-white">Performance ready</strong>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-slate-300/70">Strength system</span>
            <strong className="mt-2 block text-lg text-white">Two-zone layout</strong>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-slate-300/70">Results driven</span>
            <strong className="mt-2 block text-lg text-white">Body transformation</strong>
          </div>
        </section>

        <section className="py-20" id="floors">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">
              Club layout
            </p>
            <h2 className={sectionTitleClass}>Two floors. One clear purpose: total-body growth.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="panel-glow rounded-[30px] bg-gradient-to-br from-orange-500/15 via-slate-900/80 to-slate-900 p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-orange-500/20 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-amber-200">
                  Ground floor
                </span>
                <span className="inline-flex items-center justify-center rounded-full bg-sky-500/15 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-sky-200">
                  Leg power zone
                </span>
              </div>
              <h3 className="mb-4 text-[clamp(1.5rem,2vw,2.1rem)] font-bold text-white">
                Lower body and strength core
              </h3>
              <ul className="space-y-3 text-sm leading-7 text-slate-300/80">
                {floorFeatures.map((item) => (
                  <li key={item} className="relative pl-5 before:absolute before:left-0 before:text-lg before:text-amber-400 before:content-['•']">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel-glow rounded-[30px] bg-gradient-to-br from-indigo-500/15 via-slate-900/80 to-slate-900 p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-orange-500/20 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-amber-200">
                  1st floor
                </span>
                <span className="inline-flex items-center justify-center rounded-full bg-sky-500/15 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-sky-200">
                  Upper body zone
                </span>
              </div>
              <h3 className="mb-4 text-[clamp(1.5rem,2vw,2.1rem)] font-bold text-white">
                Upper body and conditioning deck
              </h3>
              <ul className="space-y-3 text-sm leading-7 text-slate-300/80">
                {upperBodyFeatures.map((item) => (
                  <li key={item} className="relative pl-5 before:absolute before:left-0 before:text-lg before:text-amber-400 before:content-['•']">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-20" id="programs">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">Programs</p>
            <h2 className={sectionTitleClass}>Built around your goals.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <article className="soft-card p-6 bg-gradient-to-b from-slate-900/90 to-slate-950/90" key={program.title}>
                <span className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-amber-200">
                  {program.accent}
                </span>
                <h3 className="mt-5 mb-3 text-2xl font-bold text-white">{program.title}</h3>
                <p className="text-base leading-7 text-slate-300/80">{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20" id="pricing">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">Memberships</p>
            <h2 className={sectionTitleClass}>Simple plans. Serious results.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {memberships.map((plan) => (
              <article
                className={`soft-card p-6 ${
                  plan.featured
                    ? 'border-amber-400/40 bg-gradient-to-b from-orange-500/10 to-slate-900/90'
                    : ''
                }`}
                key={plan.name}
              >
                <div className="flex items-center justify-between gap-3 text-white">
                  <span className="font-bold">{plan.name}</span>
                  {plan.featured ? (
                    <span className="inline-flex items-center justify-center rounded-full bg-amber-500/15 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-amber-200">
                      Popular
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 mb-2 text-[clamp(2rem,4vw,2.8rem)] font-black text-white">{plan.price}</h3>
                <p className="text-slate-300/80">{plan.note}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300/80">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="relative pl-5 before:absolute before:left-0 before:text-lg before:text-amber-400 before:content-['•']">
                      {perk}
                    </li>
                  ))}
                </ul>
                <a className={`${primaryButtonClass} mt-6 w-full`} href="#contact">
                  Join now
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">Gym experience</p>
            <h2 className={sectionTitleClass}>Where training feels premium.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                className={`overflow-hidden rounded-[24px] border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 ${index === 0 || index === 3 ? 'min-h-[320px]' : 'min-h-[260px]'}`}
                key={image}
              >
                <img className="h-full w-full object-cover" src={image} alt={`Gym atmosphere ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">Results stories</p>
            <h2 className={sectionTitleClass}>Members who keep coming back.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article className="soft-card bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6" key={testimonial.name}>
                <p className="text-base leading-7 text-slate-300/80">“{testimonial.quote}”</p>
                <strong className="mt-5 block text-white">{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mb-7">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">Why choose us</p>
            <h2 className={sectionTitleClass}>Everything your transformation needs.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyUs.map((item) => (
              <div className="soft-card bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6" key={item.title}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-yellow-300 font-extrabold text-slate-950">
                  ✓
                </span>
                <h3 className="mt-4 mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-base leading-7 text-slate-300/80">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20" id="contact">
          <div className="grid gap-6 rounded-[32px] border border-orange-400/10 bg-gradient-to-br from-orange-500/10 via-slate-900/90 to-slate-950 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-7">
            <div className="px-2 py-5">
              <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-amber-300">
                Let’s build your plan
              </p>
              <h2 className="m-0 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.05] tracking-[-0.05em] text-white">
                Ready to start your strongest chapter?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300/80">
                Ask about memberships, trainer support, and the best plan for your fitness goals.
              </p>

              <div className="mt-7 grid gap-4">
                <div className="rounded-2xl bg-slate-950/30 p-4">
                  <span className="block text-[0.78rem] uppercase tracking-[0.12em] text-slate-300/80">Location</span>
                  <strong className="mt-2 block text-base text-white">BLISS FITNESS CLUB</strong>
                </div>
                <div className="rounded-2xl bg-slate-950/30 p-4">
                  <span className="block text-[0.78rem] uppercase tracking-[0.12em] text-slate-300/80">Hours</span>
                  <strong className="mt-2 block text-base text-white">Open daily for training</strong>
                </div>
                <div className="rounded-2xl bg-slate-950/30 p-4">
                  <span className="block text-[0.78rem] uppercase tracking-[0.12em] text-slate-300/80">WhatsApp</span>
                  <strong className="mt-2 block text-base text-white">Instant enquiry support</strong>
                </div>
              </div>
            </div>

            <form className="panel-glow flex flex-col gap-4 rounded-[28px] bg-slate-900/80 p-5" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-2 font-semibold text-slate-100">
                Name
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </label>

              <label className="flex flex-col gap-2 font-semibold text-slate-100">
                Phone
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your contact number"
                />
              </label>

              <label className="flex flex-col gap-2 font-semibold text-slate-100">
                Goal
                <select
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                >
                  <option>General Enquiry</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Strength Training</option>
                  <option>Body Transformation</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 font-semibold text-slate-100">
                Message
                <textarea
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you want from your gym membership..."
                  rows={4}
                />
              </label>

              <button type="submit" className={`${primaryButtonClass} w-full`}>
                Send on WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-4 md:flex-row">
        <div>
          <p className="mb-1 text-[0.72rem] font-extrabold tracking-[0.08em] text-slate-50">BLISS FITNESS CLUB</p>
          <span className="text-sm text-slate-300/80">Built for stronger everyday living.</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
          <a href="#floors" className="transition-colors hover:text-white">Floors</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-3 rounded-2xl border border-white/10 bg-slate-950/85 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md md:hidden">
        <a className={`${secondaryButtonClass} flex-1 px-3 py-2.5 text-xs`} href="#contact">
          Book Trial
        </a>
        <a
          className={`${primaryButtonClass} flex-1 px-3 py-2.5 text-xs`}
          href="https://wa.me/919999999999?text=Hello%20BLISS%20FITNESS%20CLUB%2C%20I%20want%20to%20join%20and%20know%20more%20about%20membership."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default App
