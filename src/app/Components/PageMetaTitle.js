// import React from 'react'
// import { Helmet } from 'react-helmet';
// import { usePathname } from 'next/navigation'

// export const PageMetaTitle = ({data}) => {
//    const {pageTitle,pageDescription} = data;
//    const pathname = usePathname();
//    let WebUrl
//    if(typeof window !== 'undefined'){
//       WebUrl = window.location.href
//    } 
//   return (
//     <Helmet>
//       <title>{pageTitle}</title>
//       <meta name="description" content={pageDescription} />
//       <meta property="og:title" content={pageTitle} />
//       <meta property="og:description" content={pageDescription} />
//       <meta property="og:image" content="URL to your Open Graph image" />
//       <meta property="og:type" content='WebPage' />
//       <meta property="og:url" content={WebUrl} />
//       <link rel="canonical" href={WebUrl} />
//       <link rel="shortlink"  href={WebUrl} />
//     </Helmet>
//   )
// }



export const getPageMetaTitle = ({ data }) => {
  const { pageTitle, pageDescription } = data;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: typeof window !== 'undefined' ? window.location.href : '',
      type: 'website',  // Change the type to 'website'
      images: [
        {
          url: 'URL to your Open Graph image',
          alt: 'Image Alt Text',
        },
      ],
    },
    canonical: typeof window !== 'undefined' ? window.location.href : '',
    additionalMetaTags: [
      { property: 'shortlink', content: typeof window !== 'undefined' ? window.location.href : '' },
    ],
  };
};

