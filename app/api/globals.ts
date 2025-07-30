import { fetchData } from "@/utils/api";

export const getGlobals = async () => {
  try {
    const data = await fetchData("global");
    return data;
  } catch (error) {
    console.error("Error fetching site config:", error);
    return { data: null };
  }
};

export default getGlobals;
