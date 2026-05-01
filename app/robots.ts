<<<<<<< ssr_test
=======
export const dynamic = "force-static";

>>>>>>> main
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
<<<<<<< ssr_test
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       
       // '/admin/',     
       // '/dashboard/', 
        '/login/',     
      ],
    },
    sitemap: 'https://gradeplusapp.com/sitemap.xml',
  };
}
=======
      userAgent: '*',  
      allow: '/',     
      disallow: ['/login', '/api/'], 
    },
    sitemap: 'https://gradeplusapp.com/sitemap.xml',
  };
}
>>>>>>> main
