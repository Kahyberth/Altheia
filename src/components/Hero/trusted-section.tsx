import ScrollReveal from "./scroll-reveal";

export default function TrustedSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h2 className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
              Trusted by innovative companies worldwide
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
              {[
                "Acme Inc",
                "Globex",
                "Stark Industries",
                "Wayne Enterprises",
                "Umbrella Corp",
              ].map((company) => (
                <div
                  key={company}
                  className="flex items-center justify-center transition-transform hover:scale-110"
                >
                  <span className="text-xl font-bold text-slate-400 transition-colors hover:text-violet-600">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
