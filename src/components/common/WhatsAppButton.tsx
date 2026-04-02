"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import type { Locale } from "@/i18n/config";

interface WhatsAppButtonProps {
  locale: Locale;
  phoneNumber?: string;
  email?: string;
}

export default function WhatsAppButton({
  locale,
  phoneNumber = "966XXXXXXXXX",
  email = "info@goldentops.com",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message =
    locale === "ar"
      ? "مرحباً، أود الاستفسار عن خدماتكم"
      : "Hello, I would like to inquire about your services";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const contactItems = [
    {
      href: `tel:${phoneNumber}`,
      label: locale === "ar" ? "اتصال" : "Call",
      icon: FaPhone,
      className: "text-secondary-700",
    },
    {
      href: whatsappUrl,
      label: locale === "ar" ? "واتساب" : "WhatsApp",
      icon: FaWhatsapp,
      className: "text-[#25D366]",
    },
    {
      href: `mailto:${email}`,
      label: locale === "ar" ? "إيميل" : "Email",
      icon: FaEnvelope,
      className: "text-primary-600",
    },
  ];

  const stackSpacing = 64;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`fixed bottom-6 z-50 flex flex-col items-center gap-3 ${
            locale === "ar" ? "left-6" : "right-6"
          }`}
        >
          <div className="relative flex h-[204px] w-14 items-end justify-center">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const offset = (contactItems.length - index) * stackSpacing;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  animate={
                    isOpen
                      ? {
                          opacity: 1,
                          y: -offset,
                          scale: 1,
                          pointerEvents: "auto",
                        }
                      : {
                          opacity: 0,
                          y: 0,
                          scale: 0.86,
                          pointerEvents: "none",
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                    mass: 0.55,
                    delay: isOpen ? index * 0.025 : 0,
                  }}
                  className="absolute bottom-0 flex h-14 w-14 transform-gpu items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-[0_18px_40px_-20px_rgba(21,34,51,0.35)] will-change-transform transition-transform duration-150 hover:-translate-y-0.5"
                  aria-label={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className={`text-[22px] ${item.className}`} />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            type="button"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_24px_50px_-18px_rgba(196,154,46,0.65)]"
            aria-label={
              locale === "ar" ? "فتح خيارات التواصل" : "Open contact options"
            }
          >
            <motion.div
              animate={{ rotate: isOpen ? 8 : 0, scale: isOpen ? 1.03 : 1 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
            >
              <HiOutlineChatAlt2 className="text-[25px]" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
