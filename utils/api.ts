export const fetchData = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PRIVATE_BACKEND_API}/${url}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
