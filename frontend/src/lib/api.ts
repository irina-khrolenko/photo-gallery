import qs from "qs";
export async function fetcher(url: string, params = {}, options = {}) {
  try {
    const queryString = qs.stringify(params, { addQueryPrefix: true });
    const newUrl = url + queryString;
    const response = await fetch(newUrl, {
      method: "GET",
      ...options,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw new Error("Fetch error");
  }
}
