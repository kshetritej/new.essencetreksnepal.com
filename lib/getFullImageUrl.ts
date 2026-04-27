export const getFullImageUrl = (url: string): string => {
  if (!url) return "";
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  // If URL is already absolute, return as is
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return `${apiBase}${url.split("/api/v1")[1]}`;
  }
  // Construct full URL from API base
  return `${apiBase}${url.startsWith("/") ? "" : "/"}${url}`;
};
