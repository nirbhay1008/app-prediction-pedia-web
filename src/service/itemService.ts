import { getApiService } from "./ApiService.ts";

type Items = {
  itemId: string;
  itemName: string;
};
export const fetchItemList = async (
  url: string,
  method: string
): Promise<Items[]> => {
  const response = await getApiService({
    url,
    method,
  });

  if (response.ok) {
    return await response.json();
  }
  const errorMessage = await response.json();
  throw new Error(errorMessage);
};
