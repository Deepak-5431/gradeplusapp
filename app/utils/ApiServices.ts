
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const defaultOptions: RequestInit = {
      next: { revalidate: 3600 },
      ...options 
    };

    const res = await fetch(url, defaultOptions);
    if (!res.ok) return null;
    
    return await res.json();
  } catch (error) {
    console.error(`api error on url: ${url}`, error);
    return null;
  }
}