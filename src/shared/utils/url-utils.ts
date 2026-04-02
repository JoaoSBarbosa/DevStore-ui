export function getBaseUrl() {
  if (typeof window === "undefined") {
    return ""; // SSR safe
  }

  return window.location.origin;
}

export function isLocalHost() {
  if (typeof window === "undefined") {
    return false;
  }

  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

export function getProductUrl(productId: number) {
  const base = getBaseUrl();

  if (!base) {
    return `/product/${productId}`;
  }

  return `${base}/product/${productId}`;
}

/**
 * Monta qualquer rota baseada no path
 */
export function buildUrl(path: string) {
  const base = getBaseUrl();

  if (!base) {
    return path;
  }

  return `${base}${path}`;
}
