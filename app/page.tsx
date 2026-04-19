export default function MRDetailingWebsite() {
  const packages = [
    {
      name: "Bronze",
      price: "$140",
      description: "Interior and exterior refresh including full cabin cleaning and hand wash.",
      badge: "",
      features: [
        "Interior air blow up",
        "Interior vacuum",
        "Wipe down all surfaces",
        "Windows & mirrors",
        "Door jambs",
        "Floor mats",
        "Vacuum the trunk",
        "Hand wash",
        "Detail rims & tires",
        "Dress rims & tires",
        "Clean exterior windows",
      ],
    },
    {
      name: "Silver",
      price: "$200",
      description: "Interior and exterior detail with deeper cleaning and protection.",
      badge: "",
      features: [
        "Interior air blow up",
        "Complete interior vacuum",
        "Stains (spot treatment)",
        "Leather treatment",
        "Clean & protect plastic",
        "Windows & mirrors",
        "Detail floor mats & shine",
        "Detail trunk",
        "Professional hand wash",
        "Wheel wells",
        "Detail rims & tires",
        "Dress rims & tires",
        "Door jambs",
        "Wax protection (1 month)",
        "Clean exterior windows",
      ],
    },
    {
      name: "Gold",
      price: "$250",
      description: "Advanced interior and exterior detail with protection and deep cleaning.",
      badge: "Most Popular",
      features: [
        "Interior air blow up",
        "Complete interior vacuum",
        "Stains (spot treatment)",
        "Leather treatment",
        "Protect leather",
        "Clean & protect plastic",
        "Windows & mirrors",
        "Detail floor mats & shine",
        "Detail trunk",
        "Pet hair treatment",
        "Professional hand wash",
        "Iron remover",
        "Wheel wells",
        "Detail rims & tires",
        "Dress rims & tires",
        "Door jambs",
        "Wax protection (3 months)",
        "Clean exterior windows",
      ],
    },
    {
      name: "Interior Only",
      price: "$150",
      description: "full-service detail with deep interior restoration.",
      badge: "",
      features: [
       "Interior air blow up",
        "Complete interior vacuum",
        "Stains (spot treatment)",
        "Leather treatment",
        "Clean & protect plastic",
        "Windows & mirrors",
        "Detail floor mats & shine",
        "Detail trunk"
      ],
    },
    {
      name: "Monthly",
      price: "$99",
      description: "Includes everything in the Bronze package to keep your car looking clean and shiny all season long with a monthly detail.",
      badge: "",
      features: [
        "Everything included in the Bronze package",
        "Monthly maintenance detail",
        "Keeps your car clean and shiny all season"
      ],
    },
        {
      name: "3 Year Ceramic coating Package",
      price: "$500",
      description: "Entry-level ceramic coating for added shine and short-term protection.",
      badge: "",
      features: [
        "Full exterior wash",
        "Surface prep",
        "Clay bar treatment",
        "Ceramic coating (5 Years)",
        "Paint correction (Step one Polish)",
        "Gloss finish"
      ],
    },
    {
      name: "5 Year Ceramic coating Package",
      price: "$750",
      description: "Enhanced ceramic protection with longer durability and deeper gloss.",
      badge: "Popular",
      features: [
        "Full exterior wash",
        "Clay bar treatment",
        "Paint correction (Step two Polish)",
        "Ceramic coating (5 Years)",
        "Deep gloss finish"
      ],
    },
    {
      name: "8 Year Ceramic coating Package",
      price: "$1099",
      description: "Premium ceramic coating with maximum protection and long-lasting shine.",
      badge: "Premium",
      features: [
        "Full exterior prep",
        "Full paint correction",
        "Multi-layer ceramic coating (8 Years)",
        "Extreme gloss & protection"
        
      ],
    },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/mr.detailing1/" },
    { label: "TikTok", href: "https://www.tiktok.com/@1mr.detailing" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <p className="text-2xl font-semibold uppercase tracking-[0.3em]">MR Detailing</p>
          <div className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#packages" className="transition hover:text-white">
              Packages
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 pt-12 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/60">Premium car detailing</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
              Bring back the shine your vehicle deserves.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Professional interior and exterior detailing with a clean, premium finish. MR Detailing helps keep your car polished, protected, and looking its best.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-2xl border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Book a Detail
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Interior</p>
              <h3 className="mt-3 text-2xl font-semibold">Deep cleaning</h3>
              <p className="mt-3 text-white/70">
                Seats, carpets, mats, dashboards, and high-touch surfaces cleaned with care.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Exterior</p>
              <h3 className="mt-3 text-2xl font-semibold">Gloss finish</h3>
              <p className="mt-3 text-white/70">
                Exterior washes, trim care, tire shine, and detailing that restores a sharp look.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:col-span-2">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Why MR Detailing</p>
              <h3 className="mt-3 text-2xl font-semibold">Clean work. Premium feel.</h3>
              <p className="mt-3 text-white/70">
                Attention to detail, consistent quality, and a luxury look that matches your brand.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">About</p>
              <h2 className="mt-4 text-4xl font-semibold">Professional detailing built around quality.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                MR Detailing provides premium car detailing services designed to restore and maintain your vehicle’s appearance. Every detail is handled with care so your car leaves looking cleaner, sharper, and better protected.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Interior detailing', 'Exterior detailing', 'Full vehicle care'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury car being detailed"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="packages" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Packages</p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-semibold">Choose the service that fits your vehicle.</h2>
              <p className="max-w-xl text-white/70">
                A simple package lineup that makes it easy for customers to choose the level of care they want.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packages.map((pkg) => {
                const cardClass =
                  pkg.name === 'Platinum'
                    ? 'scale-[1.02] border-white/30 bg-white/[0.06] shadow-2xl shadow-white/10'
                    : pkg.name === 'Gold'
                      ? 'border-white/20 bg-white/[0.03] shadow-xl shadow-white/5'
                      : 'border-white/10 bg-black shadow-black/20';

                const priceClass =
                  pkg.name === 'Platinum'
                    ? 'text-3xl'
                    : pkg.name === 'Gold'
                      ? 'text-2xl'
                      : 'text-xl';

                const badgeClass =
                  pkg.name === 'Gold'
                    ? 'border border-white bg-white text-black'
                    : 'border border-white/20 bg-white/10 text-white';

                return (
                  <div key={pkg.name} className={`rounded-[2rem] border p-6 shadow-lg transition duration-300 ${cardClass}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                        {pkg.price ? <p className={`mt-2 font-semibold ${priceClass}`}>{pkg.price}</p> : null}
                        <p className="mt-3 text-white/65">{pkg.description}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {pkg.badge ? <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] ${badgeClass}`}>{pkg.badge}</span> : null}
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                          Package
                        </span>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3 text-white/80">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Gallery</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold">Real Results</h2>
            <p className="max-w-xl text-white/70">
              Here are some real before and after results from our detailing work.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* Before / After Set 1 */}
            <div className="space-y-3">
              <p className="text-white/60 text-sm uppercase tracking-wider">Before</p>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/r8-before1.jpg"
                  alt="Audi R8 interior before detailing"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-white/60 text-sm uppercase tracking-wider">After</p>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/r8-after1.jpg"
                  alt="Audi R8 interior after detailing"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Before / After Set 2 */}
            <div className="space-y-3">
              <p className="text-white/60 text-sm uppercase tracking-wider">Before</p>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/r8-before2.jpg"
                  alt="Audi R8 interior before detailing second view"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-white/60 text-sm uppercase tracking-wider">After</p>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/r8-after2.jpg"
                  alt="Audi R8 interior after detailing second view"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black to-white/[0.04]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 lg:grid-cols-[1fr_0.9fr] lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/50">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold">Ready to book your detail?</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                  Have a question or want to book a detail? Give us a call or send us a text on our number, or email us and we’ll get back to you as soon as possible.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black p-6">
                <h3 className="text-2xl font-semibold">Business Info</h3>
                <div className="mt-6 space-y-5 text-white/75">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Service Area</p>
                    <p className="mt-2">Ottawa Area</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Contact</p>
                    <p className="mt-2">Call or Text: 613-501-1907

Email: mr.detailing4@gmail.com</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
