import { redirect } from "next/navigation";

interface SolutionsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  redirect(`/${locale}/services`);
}
