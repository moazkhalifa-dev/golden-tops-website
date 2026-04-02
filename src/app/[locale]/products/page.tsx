import { redirect } from "next/navigation";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  redirect(`/${locale}/services`);
}
