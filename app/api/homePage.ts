import { fetchData } from "@/utils/api";
import { HomePageData } from "@/types/HomePage";

export const getHomePage = async (): Promise<{ data: HomePageData | null }> => {
  try {
    const data = await fetchData("homepage");
    return data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    return { data: null };
  }
};

export default getHomePage;

export const revalidate = 60;
