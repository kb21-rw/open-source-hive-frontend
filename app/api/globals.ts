import { fetchData } from "@/utils/api";

export const getGlobals = async () => {
  try {
    return await fetchData("global");
  } catch (error) {
    console.error("Error fetching site config:", error);
    throw error;
  }
};

export default getGlobals;
