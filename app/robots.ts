import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       
        // '/admin/',     
        // '/dashboard/', 
        '/login/',
        '/*?utm_',
        '/*?fbclid=',
        '/*?gclid=',
        '/*?ref=',
        '/*?replytocom=',
        '/*?unapproved=',     
      ],
    },
    {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'ChatGPT-User',
          'Applebot-Extended',
          'Bytespider'
        ],
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        crawlDelay: 5,
      },
      {
        //for bing as google dont need to wrry
        userAgent: 'Bingbot',
        crawlDelay: 5,
      },
    ],
    sitemap: 'https://gradeplusapp.com/sitemap.xml',
  };
}
