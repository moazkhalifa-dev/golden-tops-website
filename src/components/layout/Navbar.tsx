"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import type { Locale } from "@/i18n/config";

interface NavbarProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const serviceItems = dict.services.items;

  const navLinks = [
    { href: "", label: dict.nav.home, hasDropdown: false },
    { href: "/about", label: dict.nav.about, hasDropdown: false },
    { href: "/services", label: dict.nav.services, hasDropdown: true },
    { href: "/projects", label: dict.nav.projects, hasDropdown: false },
    { href: "/contact", label: dict.nav.contact, hasDropdown: false },
  ];

  const altLocale = locale === "en" ? "ar" : "en";
  const altPath = pathname.replace(`/${locale}`, `/${altLocale}`);
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isOverlayMode = isHomePage && !isScrolled;

  const closeAllMenus = () => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const isActive = (href: string) => {
    const fullPath = `/${locale}${href}`;
    if (href === "")
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(fullPath);
  };

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isOverlayMode
            ? "bg-transparent shadow-none"
            : "bg-white/95 backdrop-blur-md shadow-md"
        }`}
      >
        <nav className="mx-auto max-w-[1380px] px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid h-[76px] grid-cols-[auto_1fr_auto] items-center gap-3 md:h-[88px] lg:grid-cols-[1fr_auto_1fr]">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              onClick={closeAllMenus}
              className="flex items-center shrink-0 justify-self-start"
            >
              <Image
                src="/images/logo.webp"
                alt="Golden Tops"
                width={190}
                height={62}
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled
                    ? "h-10 md:h-11 lg:h-12"
                    : "h-11 md:h-[52px] lg:h-14"
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-self-center gap-2 xl:gap-3">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={() => setIsServicesOpen(false)}
                      className={`inline-flex items-center gap-1 px-4 py-2.5 text-[16px] xl:text-[17px] font-semibold rounded-lg transition-all duration-200 relative group ${
                        isActive(link.href)
                          ? isOverlayMode
                            ? "text-primary-300"
                            : "text-primary-600"
                          : isOverlayMode
                            ? "text-white hover:text-primary-300"
                            : "text-neutral-700 hover:text-secondary-600"
                      }`}
                    >
                      {link.label}
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 transition-all duration-300 ${
                          isOverlayMode ? "bg-white/80" : "bg-primary-500"
                        } ${
                          isActive(link.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full ${
                            locale === "ar" ? "right-0" : "left-0"
                          } mt-1 w-72 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden z-50`}
                        >
                          <div className="p-2">
                            {serviceItems.map((service: any) => (
                              <Link
                                key={service.slug}
                                href={`/${locale}/services/${service.slug}`}
                                onClick={closeAllMenus}
                                className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-secondary-50 transition-colors group/item"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover/item:bg-primary-100 transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-neutral-800 group-hover/item:text-secondary-700 transition-colors">
                                    {service.title}
                                  </p>
                                  <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                                    {service.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-neutral-100 p-2">
                            <Link
                              href={`/${locale}/services`}
                              onClick={closeAllMenus}
                              className="flex items-center justify-center gap-1 px-3 py-2.5 text-sm font-semibold text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                            >
                              {locale === "ar"
                                ? "عرض جميع الخدمات"
                                : "View All Services"}
                              <svg
                                className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={`/${locale}${link.href}`}
                    onClick={closeAllMenus}
                    className={`px-4 py-2.5 text-[16px] xl:text-[17px] font-semibold rounded-lg transition-all duration-200 relative group ${
                      isActive(link.href)
                        ? isOverlayMode
                          ? "text-primary-300"
                          : "text-primary-600"
                        : isOverlayMode
                          ? "text-white hover:text-primary-300"
                          : "text-neutral-700 hover:text-secondary-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 transition-all duration-300 ${
                        isOverlayMode ? "bg-white/80" : "bg-primary-500"
                      } ${
                        isActive(link.href)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                ),
              )}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center justify-self-end gap-3">
              <Link
                href={altPath}
                scroll={false}
                onClick={closeAllMenus}
                className={`px-4 py-2.5 text-[16px] xl:text-[17px] font-semibold rounded-lg transition-all duration-200 relative group ${
                  isOverlayMode
                    ? "text-white hover:text-primary-300"
                    : "text-neutral-700 hover:text-secondary-600"
                }`}
              >
                {dict.nav.langSwitch}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${
                    isOverlayMode ? "bg-white/80" : "bg-primary-500"
                  }`}
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`justify-self-end lg:hidden p-2 rounded-lg transition-colors ${
                isOverlayMode
                  ? "text-white hover:bg-white/10"
                  : "text-neutral-900 hover:bg-neutral-100"
              }`}
              aria-label="Toggle menu"
              aria-haspopup="dialog"
            >
              {isMobileOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: locale === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "-100%" : "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed top-0 ${
                locale === "ar" ? "left-0" : "right-0"
              } h-full w-[min(88vw,340px)] bg-white z-50 shadow-xl lg:hidden overflow-y-auto`}
              id="mobile-navigation"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="/images/logo.webp"
                    alt="Golden Tops"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.href}>
                        <button
                          onClick={() =>
                            setIsMobileServicesOpen(!isMobileServicesOpen)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive(link.href)
                              ? "bg-secondary-50 text-secondary-700"
                              : "text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          {link.label}
                          <HiChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div
                                className={`${locale === "ar" ? "pr-4" : "pl-4"} py-1 space-y-0.5`}
                              >
                                {serviceItems.map((service: any) => (
                                  <Link
                                    key={service.slug}
                                    href={`/${locale}/services/${service.slug}`}
                                    onClick={closeAllMenus}
                                    className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                      pathname.includes(service.slug)
                                        ? "bg-primary-50 text-primary-700 font-medium"
                                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800"
                                    }`}
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                                <Link
                                  href={`/${locale}/services`}
                                  onClick={closeAllMenus}
                                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-secondary-600 hover:bg-secondary-50 transition-colors"
                                >
                                  {locale === "ar"
                                    ? "عرض جميع الخدمات"
                                    : "View All Services"}
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={`/${locale}${link.href}`}
                        onClick={closeAllMenus}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive(link.href)
                            ? "bg-secondary-50 text-secondary-700"
                            : "text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>

                <div className="border-t border-neutral-100 pt-4 space-y-3">
                  <Link
                    href={altPath}
                    scroll={false}
                    onClick={closeAllMenus}
                    className="block text-center py-2.5 text-sm font-semibold border border-neutral-200 rounded-xl text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    {dict.nav.langSwitch}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
