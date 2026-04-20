import Cookies from "js-cookie";

/**
 * Utility: Build URL with query params
 */
function buildUrl(
  endpoint: string,
  queryParams?: Record<string, string | number | boolean>
): string {
  const url = new URL(`/api/proxy/${endpoint}`, window.location.origin);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
}

function isFormData(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

/**
 * Generic fetch to backend via Next.js proxy (no app auth)
 */
export async function myFetch(
  endpoint: string,
  options: RequestInit = {},
  queryParams?: Record<string, string | number | boolean>
): Promise<Response> {
  const url = buildUrl(endpoint, queryParams);
  const csrftoken = Cookies.get("csrftoken") ?? "";

  const headers: HeadersInit = {
    "X-CSRFToken": csrftoken,
    ...(options.headers || {}),
  };

  if (!isFormData(options.body)) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, {
    ...options,
    headers,
    credentials: "include",
  });
}
