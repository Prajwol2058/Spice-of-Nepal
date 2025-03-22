"use client";
import { useTranslations } from "next-intl";
import * as React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

// Define a reusable FooterColumn component
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  children,
  className = "",
}) => (
  <section className={`w-3/12 max-md:w-full ${className}`}>
    <div className="flex flex-col items-start text-base text-white max-md:mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  </section>
);

// FooterDivider component for separating sections
const FooterDivider: React.FC = () => (
  <hr className="shrink-0 mt-14 max-w-full h-0.5 border-2 border-white border-solid w-[1400px] max-md:mt-10" />
);

// FooterCopyright component for copyright and designed-by text
const FooterCopyright: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="flex flex-wrap gap-5 justify-between mt-9 text-base font-semibold leading-none text-white max-md:max-w-full">
      <p>{t("footercopyright")}</p>
      <p className="text-right">{t("footerdesignedby")}</p>
    </section>
  );
};

// FooterSocialLinks component for social media links
const FooterSocialLinks: React.FC = () => (
  <div className="flex gap-8  mt-8">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook className="text-white text-2xl hover:text-blue-600" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <Twitter className="text-white text-2xl hover:text-blue-400" />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="text-white text-2xl hover:text-pink-500" />
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  </div>
);

// Main Footer component
const Footer: React.FC = () => {
  const t = useTranslations();
  return (
    <footer className="overflow-hidden px-16 py-12 bg-red-950 max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <FooterColumn title={t("footertitle")}>
            <p className="mt-4 text-base">{t("footerdescription")}</p>
            <img
              src="/navbar/logo.png"
              alt="Logo"
              className="object-contain mt-6 max-w-full aspect-[3.36] w-[215px]"
            />
          </FooterColumn>

          <FooterColumn title={t("footerhours")}>
            <p className="self-stretch mt-1">
              {t("footerhoursdetailsmonday_to_saturday")}
            </p>
            <p className="mt-2">{t("footerhoursdetailssunday")}</p>
            <h3 className="mt-5 text-xl font-semibold">
              {t("footerlunchbuffet")}:
            </h3>
            <p className="self-stretch mt-1">{t("footerhoursdetailssunday")}</p>
          </FooterColumn>

          <FooterColumn title={t("footerservices")}>
            <nav className="flex flex-col items-start font-medium">
              <a href="#" className="mt-8 leading-none">
                {t("footersupportcenter")}
              </a>
              <a href="#" className="mt-3.5 leading-none">
                {t("footertermsandconditions")}
              </a>
              <a href="#" className="mt-3.5 leading-none">
                {t("footerfaqs")}
              </a>
            </nav>
          </FooterColumn>

          <FooterColumn title={t("footercontact")}>
            <address className="flex flex-col items-start font-medium not-italic">
              <p className="mt-8 leading-none">{t("footeraddress")}</p>
              <a href="mailto:" className="self-stretch mt-3.5 leading-none">
                {t("footeremail")}
              </a>
              <a href="tel:" className="mt-3.5 leading-none">
                {t("footertelephone")}
              </a>
            </address>
          </FooterColumn>
        </div>
      </div>

      <FooterSocialLinks />
      <FooterDivider />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
