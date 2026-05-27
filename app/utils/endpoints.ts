const API_PREFIX = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const ENDPOINTS = {
  BLOGS:{
    ALL: `${API_PREFIX}/api/blogs`,
    BY_ID: (id: string) => `${API_PREFIX}/api/blogs/${id}`,
    BY_AUTHOR: (author: string) => `${API_PREFIX}/api/blogs?author=${encodeURIComponent(author)}`,
  },
  COURSES:{
    ALL: `${API_PREFIX}/api/course`,
    BY_CATEGORY: (category: string) => `${API_PREFIX}/api/course?keyword=${encodeURIComponent(category)}`,
    BY_ID: (id: string) => `${API_PREFIX}/api/course?id=${id}`,
  },
ASSETS: {
    AVATAR: (path?: string) => {
      if (!path) return `${API_PREFIX}/default-avatar.png`;
      return path.startsWith('http') ? path : `${API_PREFIX}/${path}`;
    }
  }
}