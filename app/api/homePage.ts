import { fetchData } from "@/utils/api";

export const getHomePage = async () => {
  try {
    return await fetchData("home-page");
  } catch (error) {
    console.error("Error fetching home page:", error);
  }
};

export default getHomePage;

export const revalidate = 60;
