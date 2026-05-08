import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-navy-700 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-heading text-2xl text-white tracking-wider">
              iTour<span className="text-gold-400">.asia</span>
            </Link>
            <p className="mt-4 text-stone-400 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              {t("footer.explore")}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {t("footer.aboutText")}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              {t("footer.about")}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {t("footer.aboutText")}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
