import ScrollToTop from "@/components/ui/ScrollToTop";
import { HomePageData } from "@/types/HomePage";
import ComponentParser from "./cms/componentParser";
import getHomePage from "./api/homePage";
import NoHomepageData from "@/components/ui/NoHomepageData";
import SiteLoadError from "@/error/SiteLoadError";

export default async function Home() {
  try {
    const { data: homepage }: { data: HomePageData } = await getHomePage();
    if (
      !homepage ||
      !Array.isArray(homepage.sections) ||
      homepage.sections.length === 0
    ) {
      return <NoHomepageData />;
    }
    return (
      <section className="min-h-screen">
        <ComponentParser sections={homepage.sections} />
        <ScrollToTop />
      </section>
    );
  } catch (error) {
    console.error("Error fetching home page:", error);
    return <SiteLoadError />;
  }
}
