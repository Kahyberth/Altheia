import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroCtaSection() {
  return (
    <section className="bg-gradient-to-br from-violet-600 to-indigo-600 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
            Ready to Experience the Power of AI?
          </h2>
          <p className="max-w-[700px] text-violet-100 md:text-lg">
            Join thousands of innovative companies already using Altheia to
            transform their business.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-violet-600 hover:bg-violet-50 text-base">
              Join Altheia
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-violet-600 hover:bg-violet-50 text-base"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
