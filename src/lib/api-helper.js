/**
 * API Base URL Helper
 * 
 * Dynamically resolves the API base URL to ensure that:
 * 1. On the client side (browser), relative paths are used so they always match the current domain/origin.
 * 2. On the server side, local development uses localhost with the correct port, while production uses the NEXT_PUBLIC_API_URL.
 */
export function getApiBase() {
  if (typeof window !== 'undefined') {
    // Client-side: use empty string so requests are relative to the current origin
    return '';
  }

  // Server-side
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || '2999';
    return `http://localhost:${port}`;
  }

  return process.env.NEXT_PUBLIC_API_URL || '';
}
