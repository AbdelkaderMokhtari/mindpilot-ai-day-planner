import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Brain,
  Zap,
  CalendarClock,
  TrendingUp,
  Target,
  ListChecks,
  Compass,
  Rocket,
  Crown,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Auto-Prioritization",
    desc: "AI ranks your tasks by impact so you always tackle what matters most.",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    desc: "Creates a daily schedule that fits your energy levels and deadlines.",
  },
  {
    icon: Compass,
    title: "Adaptive Planning",
    desc: "Plans adjust in real-time when life throws curveballs.",
  },
  {
    icon: TrendingUp,
    title: "Motivation Engine",
    desc: "Streaks, progress insights, and nudges keep you consistently moving forward.",
  },
];

const steps = [
  { num: "01", title: "Tell Your Goals", desc: "Share your goals, tasks, and deadlines with MindPilot.", icon: Target },
  { num: "02", title: "AI Builds Your Plan", desc: "Our AI creates your optimal daily schedule in seconds.", icon: Brain },
  { num: "03", title: "Follow & Focus", desc: "Work through focused sessions with smart reminders.", icon: ListChecks },
  { num: "04", title: "Track Progress", desc: "See your momentum build and stay motivated every day.", icon: Rocket },
];

const audiences = [
  { icon: "😫", text: "Feel overwhelmed by too many tasks" },
  { icon: "🎯", text: "Struggle with setting priorities" },
  { icon: "🧩", text: "Want structure without complexity" },
  { icon: "⚡", text: "Want real productivity, not just lists" },
];

const bonuses = [
  { icon: Crown, text: "Free premium features at launch" },
  { icon: MessageSquare, text: "Direct influence on product direction" },
  { icon: ShieldCheck, text: "Priority access before public release" },
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when MindPilot launches.",
    });
    setEmail("");
  };

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <Brain className="w-4 h-4" />
            AI-Powered Daily Planning
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Your AI That Plans Your Day{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automatically
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop feeling overwhelmed by tasks. MindPilot uses AI to turn your goals into a clear daily plan — so you always know what to do next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={scrollToSignup} className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">Less stress · Better focus · Real progress</p>
          </div>
        </div>
      </section>

      {/* Why MindPilot */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why <span className="text-primary">MindPilot</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Most task apps just store your to-dos.{" "}
              <span className="text-foreground font-semibold">MindPilot thinks for you.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">Four simple steps to a stress-free day.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center space-y-4">
                <div className="text-5xl font-black text-primary/20">{s.num}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-primary/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built For <span className="text-primary">People Who</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div
                key={a.text}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl">{a.icon}</span>
                <span className="text-base font-medium">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get <span className="text-primary">Early Access</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Be among the first to try MindPilot and shape the future of smart productivity.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-xl flex-1"
            />
            <Button type="submit" size="lg" className="h-12 px-6 rounded-xl shadow-lg shadow-primary/25">
              Get Early Access
            </Button>
          </form>

          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            {bonuses.map((b) => (
              <div key={b.text} className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border">
                <b.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-bold">MindPilot</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 MindPilot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
