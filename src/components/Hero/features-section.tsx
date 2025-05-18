import { Cpu, Database, Globe, Lock, MessageSquare, Zap } from "lucide-react";
import FeatureCard from "./feature-card";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
            <span>Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 md:text-4xl">
            AI-Powered Capabilities
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-lg">
            Discover how Altheia's advanced AI technology can transform your
            workflow and boost productivity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Cpu className="h-6 w-6" />}
            title="Advanced AI Processing"
            description="Leverage state-of-the-art machine learning algorithms to process and analyze complex data sets."
          />
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="Natural Language Understanding"
            description="Communicate with our AI using natural language for seamless interaction and faster results."
          />
          <FeatureCard
            icon={<Database className="h-6 w-6" />}
            title="Intelligent Data Management"
            description="Automatically organize, categorize, and extract insights from your data with AI-powered tools."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Global Accessibility"
            description="Access your AI tools and data from anywhere in the world with our cloud-based platform."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Real-time Processing"
            description="Get instant results with our high-performance computing infrastructure optimized for AI workloads."
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6" />}
            title="Enterprise-grade Security"
            description="Rest easy knowing your data is protected with advanced encryption and security protocols."
          />
        </div>
      </div>
    </section>
  );
}
