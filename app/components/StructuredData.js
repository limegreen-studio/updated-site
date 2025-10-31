'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lime Green Studios",
    "alternateName": "Lime Green Labs",
    "url": "https://limegreen.studio",
    "logo": "https://limegreen.studio/LGS.svg",
    "description": "Leading MVP development agency. We build and ship your product from 0 to 1 in just 4 weeks. Expert product development, rapid prototyping, and full-stack development for startups and enterprises.",
    "email": "contact@limegreen.studio",
    "sameAs": [
      "https://twitter.com/limegreenstudios",
      "https://facebook.com/limegreenstudios",
      "https://instagram.com/limegreenstudios"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "MVP Development & Product Development",
    "provider": {
      "@type": "Organization",
      "name": "Lime Green Studios"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Product Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Rapid MVP development from 0 to 1 in 4 weeks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Development",
            "description": "Full-stack product development for startups and enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Mobile and web app development"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lime Green Studios",
    "url": "https://limegreen.studio",
    "description": "Leading MVP development agency. We build and ship your product from 0 to 1 in just 4 weeks.",
    "publisher": {
      "@type": "Organization",
      "name": "Lime Green Studios"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
