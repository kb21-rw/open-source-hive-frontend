import { fetchData } from "@/utils/api";
import { GlobalSettingsResponse } from "@/types/Global";

export const getGlobals = async (): Promise<{
  data: GlobalSettingsResponse | null;
}> => {
  try {
    const data = await fetchData("global");
    return { data };
  } catch (error) {
    console.error("Error fetching site config:", error);
    return { data: null };
  }
};

export default getGlobals;
