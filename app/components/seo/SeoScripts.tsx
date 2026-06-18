import Script from "next/script";

export default function SeoScripts() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GradePlus",
    "url": "https://gradeplusapp.com/",
    "logo": "https://gradeplusapp.com/AI/logo.webp",
    "description": "GradePlus is an AI-powered study app that helps students with homework solutions, doubt solving, exam preparation, MCQ practice, revision support, and personalized learning.",
    "email": "info@iblib.com",
    "sameAs": [
      "https://www.facebook.com/Gradeplusofficial",
      "https://www.instagram.com/gradeplus_official",
      "https://www.youtube.com/@gradepluseducations"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "UGF 03, Trinity Square, Badshah Nagar Metro Station, Mahanagar",
      "addressLocality": "Lucknow",
      "postalCode": "226006",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-70800-05275",
        "contactType": "customer support",
        "email": "info@iblib.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-63959-52271",
        "contactType": "customer support",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-63641-60785",
        "contactType": "customer support",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+65-8798-0736",
        "contactType": "international support",
        "areaServed": "SG"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-G9DGBFNC7Q" 
        strategy="afterInteractive" 
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9DGBFNC7Q');
          `
        }} 
      />
      <Script 
        id="microsoft-clarity" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x8g4b9i316");
          `
        }}
      />
    </>
  );
}