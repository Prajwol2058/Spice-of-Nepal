"use client";
import { useTranslations } from "next-intl";
import * as React from "react";

function Hero() {
  const t = useTranslations();
  return (
    <>
      <div className="overflow-hidden relative w-full h-screen max-md:h-[550px]">
        <div className="relative size-full">
          <img
            src="/hero/hero.png"
            className="object-cover size-full"
            alt="Restaurant background"
          />
        </div>
        <div className="flex absolute top-2/4 left-2/4 justify-center items-center px-2 py-14 w-full -translate-x-2/4 -translate-y-2/4 max-w-[664px] max-md:px-4 max-md:py-10">
          <div className="flex flex-col gap-5 items-center w-full">
            <div className="text-5xl font-black leading-tight text-center text-amber-500 max-w-[648px] max-md:text-4xl max-sm:px-5 max-sm:py-0 max-sm:text-3xl">
              {t("herotitle")}
            </div>
            <div className="text-xl font-semibold text-center text-white max-md:text-lg max-sm:text-base">
              {t("herosubtitle")}
            </div>
            <button className="px-8 py-4 mt-5 text-base font-bold text-amber-500 rounded-3xl border-amber-500 border-solid transition-all cursor-pointer border-[3px] duration-[0.3s] ease-[ease] max-sm:px-6 max-sm:py-3 max-sm:text-sm hover:bg-amber-500 hover:text-white hover:scale-105">
              {t("herobutton")}
            </button>
          </div>
        </div>
        <div>
          <img
            src="/hero/decorative.png"
            alt="Decorative pattern"
            className="absolute right-0 bottom-0 w-[451px] h-[321px] opacity-10"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
