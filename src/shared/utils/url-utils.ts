export function getBaseUrl() {
  if (typeof window === "undefined") {
    return "";
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

// export function getProductUrl(productId: number) {
//   const base = getBaseUrl();

//   if (!base) {
//     return `/produto/${productId}`;
//   }

//   return `${base}/produto/${productId}`;
// }

// export function buildUrl(path: string) {
//   const base = getBaseUrl();

//   if (!base) {
//     return path;
//   }

//   return `${base}${path}`;
// }
export function getProductUrl(productId: number) {
  return `/produto/${productId}`;
}

export function buildUrl(path: string) {
  return path;
}
