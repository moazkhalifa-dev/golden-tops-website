import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  heading,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span
          className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border ${
            light
              ? "text-primary-400 bg-secondary-800 border-secondary-700"
              : "text-secondary-700 bg-secondary-50 border-secondary-100"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-secondary-900"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-secondary-200" : "text-neutral-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  className?: string;
  locale?: Locale;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  locale,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5";

  const sizeClasses = {
    default: "h-12 px-6 text-sm md:text-base",
    large: "h-[52px] md:h-14 px-7 md:px-8 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/15",
    secondary:
      "bg-secondary-700 text-white hover:bg-secondary-600 hover:shadow-lg",
    outline:
      "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    const fullHref = locale ? `/${locale}${href}` : href;
    return (
      <Link href={fullHref} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface ArrowPillLinkProps {
  children: React.ReactNode;
  href: string;
  locale?: Locale;
  className?: string;
  light?: boolean;
}

export function ArrowPillLink({
  children,
  href,
  locale,
  className = "",
  light = false,
}: ArrowPillLinkProps) {
  const fullHref = locale ? `/${locale}${href}` : href;

  return (
    <Link
      href={fullHref}
      className={`group inline-flex h-14 items-center gap-3 rounded-full border px-7 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        light
          ? "border-white/20 bg-white/8 text-white hover:bg-white/12"
          : "border-neutral-200 bg-white text-neutral-900 shadow-[0_18px_40px_-28px_rgba(21,34,51,0.35)] hover:border-primary-200"
      } ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-white transition-transform duration-300 group-hover:translate-x-0.5">
        <svg
          className={`h-4 w-4 ${locale === "ar" ? "rotate-180" : ""}`}
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
      </span>
    </Link>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
