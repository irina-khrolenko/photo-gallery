import { HomePage } from "@/components";
import { fetchCollections } from "@/services/CollectionsService";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const collections = await fetchCollections(locale);
  return (
    <div>
      <main>
        <HomePage collections={collections} />
      </main>
    </div>
  );
}
