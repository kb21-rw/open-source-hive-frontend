import { fetchData } from "@/utils/api";
import { HomePageData } from "@/types/HomePage";

export const getHomePage = async (): Promise<{ data: HomePageData }> => {
  try {
    const data = await fetchData("homepage");
    return data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error;
  }
};

export default getHomePage;

export const revalidate = 60;
