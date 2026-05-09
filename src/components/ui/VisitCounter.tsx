"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function VisitCounter() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setTotal(data.total))
      .catch(() => setTotal(0));
  }, []);

  return (
    <p className="text-stone-500 text-sm">
      {t("totalViews")}{" "}
      {total !== null ? total.toLocaleString(locale) : "—"}
    </p>
  );
}
