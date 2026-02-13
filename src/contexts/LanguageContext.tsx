import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "badge": "AI-Powered Daily Planning",
    "hero.title.1": "Your AI That Plans Your Day",
    "hero.title.2": "Automatically",
    "hero.subtitle": "Stop feeling overwhelmed by tasks. MindPilot uses AI to turn your goals into a clear daily plan — so you always know what to do next.",
    "hero.cta": "Get Early Access",
    "hero.tagline": "Less stress · Better focus · Real progress",
    "why.title.1": "Why",
    "why.title.2": "MindPilot",
    "why.subtitle.1": "Most task apps just store your to-dos.",
    "why.subtitle.2": "MindPilot thinks for you.",
    "feature.autoprioritization": "Auto-Prioritization",
    "feature.autoprioritization.desc": "AI ranks your tasks by impact so you always tackle what matters most.",
    "feature.smartscheduling": "Smart Scheduling",
    "feature.smartscheduling.desc": "Creates a daily schedule that fits your energy levels and deadlines.",
    "feature.adaptiveplanning": "Adaptive Planning",
    "feature.adaptiveplanning.desc": "Plans adjust in real-time when life throws curveballs.",
    "feature.motivationengine": "Motivation Engine",
    "feature.motivationengine.desc": "Streaks, progress insights, and nudges keep you consistently moving forward.",
    "how.title.1": "How It",
    "how.title.2": "Works",
    "how.subtitle": "Four simple steps to a stress-free day.",
    "step.1.title": "Tell Your Goals",
    "step.1.desc": "Share your goals, tasks, and deadlines with MindPilot.",
    "step.2.title": "AI Builds Your Plan",
    "step.2.desc": "Our AI creates your optimal daily schedule in seconds.",
    "step.3.title": "Follow & Focus",
    "step.3.desc": "Work through focused sessions with smart reminders.",
    "step.4.title": "Track Progress",
    "step.4.desc": "See your momentum build and stay motivated every day.",
    "built.title.1": "Built For",
    "built.title.2": "People Who",
    "audience.1": "Feel overwhelmed by too many tasks",
    "audience.2": "Struggle with setting priorities",
    "audience.3": "Want structure without complexity",
    "audience.4": "Want real productivity, not just lists",
    "signup.title.1": "Get",
    "signup.title.2": "Early Access",
    "signup.subtitle": "Be among the first to try MindPilot and shape the future of smart productivity.",
    "signup.placeholder": "Enter your email",
    "signup.button": "Get Early Access",
    "signup.toast.title": "You're on the list! 🎉",
    "signup.toast.desc": "We'll notify you when MindPilot launches.",
    "bonus.1": "Free premium features at launch",
    "bonus.2": "Direct influence on product direction",
    "bonus.3": "Priority access before public release",
    "footer.copyright": "© 2026 MindPilot. All rights reserved.",
  },
  ar: {
    "badge": "تخطيط يومي مدعوم بالذكاء الاصطناعي",
    "hero.title.1": "ذكاؤك الاصطناعي الذي يخطط يومك",
    "hero.title.2": "تلقائياً",
    "hero.subtitle": "توقف عن الشعور بالإرهاق من المهام. مايند بايلوت يستخدم الذكاء الاصطناعي لتحويل أهدافك إلى خطة يومية واضحة — لتعرف دائماً ما يجب فعله.",
    "hero.cta": "احصل على وصول مبكر",
    "hero.tagline": "ضغط أقل · تركيز أفضل · تقدم حقيقي",
    "why.title.1": "لماذا",
    "why.title.2": "مايند بايلوت",
    "why.subtitle.1": "معظم تطبيقات المهام تخزن قوائمك فقط.",
    "why.subtitle.2": "مايند بايلوت يفكر بدلاً عنك.",
    "feature.autoprioritization": "ترتيب تلقائي للأولويات",
    "feature.autoprioritization.desc": "الذكاء الاصطناعي يرتب مهامك حسب التأثير لتنجز الأهم أولاً.",
    "feature.smartscheduling": "جدولة ذكية",
    "feature.smartscheduling.desc": "ينشئ جدولاً يومياً يناسب مستويات طاقتك ومواعيدك النهائية.",
    "feature.adaptiveplanning": "تخطيط متكيف",
    "feature.adaptiveplanning.desc": "الخطط تتكيف في الوقت الفعلي عندما تتغير الظروف.",
    "feature.motivationengine": "محرك التحفيز",
    "feature.motivationengine.desc": "السلاسل والتقارير والتنبيهات تبقيك متحركاً للأمام باستمرار.",
    "how.title.1": "كيف",
    "how.title.2": "يعمل",
    "how.subtitle": "أربع خطوات بسيطة ليوم بلا ضغوط.",
    "step.1.title": "أخبرنا بأهدافك",
    "step.1.desc": "شارك أهدافك ومهامك ومواعيدك مع مايند بايلوت.",
    "step.2.title": "الذكاء الاصطناعي يبني خطتك",
    "step.2.desc": "ذكاؤنا الاصطناعي ينشئ جدولك اليومي المثالي في ثوانٍ.",
    "step.3.title": "تابع وركز",
    "step.3.desc": "اعمل من خلال جلسات مركزة مع تذكيرات ذكية.",
    "step.4.title": "تتبع التقدم",
    "step.4.desc": "شاهد زخمك يتصاعد وابقَ متحفزاً كل يوم.",
    "built.title.1": "مصمم لمن",
    "built.title.2": "يعانون من",
    "audience.1": "الشعور بالإرهاق من كثرة المهام",
    "audience.2": "صعوبة في تحديد الأولويات",
    "audience.3": "يريدون هيكلة بدون تعقيد",
    "audience.4": "يريدون إنتاجية حقيقية، لا مجرد قوائم",
    "signup.title.1": "احصل على",
    "signup.title.2": "وصول مبكر",
    "signup.subtitle": "كن من أوائل من يجرب مايند بايلوت وساهم في تشكيل مستقبل الإنتاجية الذكية.",
    "signup.placeholder": "أدخل بريدك الإلكتروني",
    "signup.button": "احصل على وصول مبكر",
    "signup.toast.title": "أنت في القائمة! 🎉",
    "signup.toast.desc": "سنخبرك عند إطلاق مايند بايلوت.",
    "bonus.1": "ميزات مميزة مجانية عند الإطلاق",
    "bonus.2": "تأثير مباشر على اتجاه المنتج",
    "bonus.3": "أولوية الوصول قبل الإطلاق العام",
    "footer.copyright": "© 2026 مايند بايلوت. جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
