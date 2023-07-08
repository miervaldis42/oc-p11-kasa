/**
 * @description Façade design pattern applied on `fetch` API function
 *
 * @param url {string} URL to retrieve data
 * @param config {object} Can be the headers or any options which shapes the fetch function
 * @returns data retrieved from the given URL
 */
export default function customRequest<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}
