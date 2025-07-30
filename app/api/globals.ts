import { fetchData } from "@/utils/api";

export const getGlobals = async () => {
  try {
    const data = await fetchData("global");
    return data;
  } catch (error) {
    console.error("Error fetching site config:", error);
    throw error;
  }
};

export default getGlobals;
