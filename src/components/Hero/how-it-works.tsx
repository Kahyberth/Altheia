export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 md:text-4xl">
            Simple, Powerful, Intelligent
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-lg">
            Getting started with Altheia is easy. Our intuitive platform guides
            you through every step.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Sign Up",
              description:
                "Create your Altheia account in minutes and connect your data sources.",
            },
            {
              step: "02",
              title: "Configure",
              description:
                "Set up your AI preferences and customize the platform to your needs.",
            },
            {
              step: "03",
              title: "Transform",
              description:
                "Watch as Altheia's AI transforms your workflow and delivers insights.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-center text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
