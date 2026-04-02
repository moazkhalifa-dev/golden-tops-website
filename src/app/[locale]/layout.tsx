import { notFound } from "next/navigation";
import { isValidLocale, getDirection } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PerformanceFix from "@/components/PerformanceFix";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const dir = getDirection(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${notoArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen max-w-full overflow-x-hidden flex flex-col antialiased">
        <PerformanceFix />
        <Providers>
          <Navbar locale={locale as Locale} dict={dict} />
          <main className="flex-1 max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer locale={locale as Locale} dict={dict} />
          <WhatsAppButton
            locale={locale as Locale}
            phoneNumber={dict.contact?.whatsapp || dict.contact?.phone}
            email={dict.contact?.email}
          />
        </Providers>
      </body>
    </html>
  );
}
