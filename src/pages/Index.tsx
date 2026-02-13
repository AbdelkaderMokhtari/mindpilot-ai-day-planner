import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
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
  ArrowLeft,
} from "lucide-react";

const featureKeys = [
  { icon: Zap, titleKey: "feature.autoprioritization", descKey: "feature.autoprioritization.desc" },
  { icon: CalendarClock, titleKey: "feature.smartscheduling", descKey: "feature.smartscheduling.desc" },
  { icon: Compass, titleKey: "feature.adaptiveplanning", descKey: "feature.adaptiveplanning.desc" },
  { icon: TrendingUp, titleKey: "feature.motivationengine", descKey: "feature.motivationengine.desc" },
];

const stepKeys = [
  { num: "01", titleKey: "step.1.title", descKey: "step.1.desc", icon: Target },
  { num: "02", titleKey: "step.2.title", descKey: "step.2.desc", icon: Brain },
  { num: "03", titleKey: "step.3.title", descKey: "step.3.desc", icon: ListChecks },
  { num: "04", titleKey: "step.4.title", descKey: "step.4.desc", icon: Rocket },
];

const audienceKeys = [
  { icon: "😫", textKey: "audience.1" },
  { icon: "🎯", textKey: "audience.2" },
  { icon: "🧩", textKey: "audience.3" },
  { icon: "⚡", textKey: "audience.4" },
];

const bonusKeys = [
  { icon: Crown, textKey: "bonus.1" },
  { icon: MessageSquare, textKey: "bonus.2" },
  { icon: ShieldCheck, textKey: "bonus.3" },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const { lang, t } = useLanguage();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: t("signup.toast.title"),
      description: t("signup.toast.desc"),
    });
    setEmail("");
  };

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LanguageToggle />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <Brain className="w-4 h-4" />
            {t("badge")}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            {t("hero.title.1")}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("hero.title.2")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={scrollToSignup} className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              {t("hero.cta")}
              <Arrow className="w-5 h-5 ms-2" />
            </Button>
            <p className="text-sm text-muted-foreground">{t("hero.tagline")}</p>
          </div>
        </div>
      </section>

      {/* Why MindPilot */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t("why.title.1")} <span className="text-primary">{t("why.title.2")}</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {t("why.subtitle.1")}{" "}
              <span className="text-foreground font-semibold">{t("why.subtitle.2")}</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureKeys.map((f) => (
              <div
                key={f.titleKey}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(f.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
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
              {t("how.title.1")} <span className="text-primary">{t("how.title.2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("how.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepKeys.map((s, i) => (
              <div key={s.num} className="relative text-center space-y-4">
                <div className="text-5xl font-black text-primary/20">{s.num}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{t(s.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(s.descKey)}</p>
                {i < stepKeys.length - 1 && (
                  <div className={`hidden lg:block absolute top-10 ${isRtl ? "-left-4" : "-right-4"} text-primary/30`}>
                    <Arrow className="w-6 h-6" />
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
              {t("built.title.1")} <span className="text-primary">{t("built.title.2")}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {audienceKeys.map((a) => (
              <div
                key={a.textKey}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl">{a.icon}</span>
                <span className="text-base font-medium">{t(a.textKey)}</span>
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
              {t("signup.title.1")} <span className="text-primary">{t("signup.title.2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("signup.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t("signup.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-xl flex-1"
            />
            <Button type="submit" size="lg" className="h-12 px-6 rounded-xl shadow-lg shadow-primary/25">
              {t("signup.button")}
            </Button>
          </form>

          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            {bonusKeys.map((b) => (
              <div key={b.textKey} className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border">
                <b.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{t(b.textKey)}</span>
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
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
