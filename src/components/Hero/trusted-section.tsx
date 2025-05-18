export default function TrustedSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted by innovative companies worldwide
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70">
            {[
              "Acme Inc",
              "Globex",
              "Stark Industries",
              "Wayne Enterprises",
              "Umbrella Corp",
            ].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="text-xl font-bold text-slate-400">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
