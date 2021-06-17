import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ title, description, image, article, slug }) => {
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    siteName,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${(slug = "/" ? "" : slug)}`,
    siteName,
  };
  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${slug}`} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:type" content="website" />
      {seo.siteName && <meta name="og:site_name" content={seo.siteName} />}
      {/*{twitterUsername && (*/}
      {/*    <meta name="twitter:creator" content={twitterUsername} />*/}
      {/*)}*/}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  siteName: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  siteName: null,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        siteName: siteName
      }
    }
  }
`;
