"use client";
import React, { FC } from "react";
import { useLocale } from "next-intl";
import ISO6391 from "iso-639-1";
import { locales, usePathname, useRouter } from "@/navigation";

const LanguageSwitcher: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="text-xl cursor-pointer text-white bg-transparent border-none focus:outline-none hover:text-gray-200 transition-colors"
    >
      {locales.map((lang) => (
        <option key={lang} value={lang}>
          {ISO6391.getNativeName(lang)}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
