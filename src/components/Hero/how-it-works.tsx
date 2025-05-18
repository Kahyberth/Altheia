import ScrollReveal from "./scroll-reveal";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-12 md:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="container mx-auto relative px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm">
              <span>How It Works</span>
            </div>
            <h2 className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl">
              Simple, Powerful, Intelligent
            </h2>
            <p className="max-w-[700px] text-slate-600 md:text-lg">
              Getting started with Altheia is easy. Our intuitive platform
              guides you through every step of the journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-violet-600/20 to-indigo-600/20 md:block"></div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description:
                  "Create your Altheia account in minutes and connect your data sources securely.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Configure",
                description:
                  "Set up your AI preferences and customize the platform to your specific needs.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Transform",
                description:
                  "Watch as Altheia's AI transforms your workflow and delivers actionable insights.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M4.93 4.93l2.83 2.83"></path>
                    <path d="M16.24 16.24l2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="M4.93 19.07l2.83-2.83"></path>
                    <path d="M16.24 7.76l2.83-2.83"></path>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 200}>
                <div className="relative flex flex-col items-center space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
                    {item.icon}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="mb-2 text-sm font-medium text-violet-600">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-center text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
