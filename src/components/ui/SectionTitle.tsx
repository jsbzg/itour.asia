import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <FadeIn className={cn("mb-12", align === "center" && "text-center", className)}>
      <div className="inline-block mb-4">
        <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl text-navy-700 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-navy-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </FadeIn>
  );
}
