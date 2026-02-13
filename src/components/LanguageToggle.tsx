import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 gap-2 rounded-full border-border bg-card/80 backdrop-blur-sm hover:bg-card"
    >
      <Languages className="w-4 h-4" />
      {lang === "en" ? "العربية" : "English"}
    </Button>
  );
};

export default LanguageToggle;
