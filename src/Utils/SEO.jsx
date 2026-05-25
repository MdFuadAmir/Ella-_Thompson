import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Ella Thompson | UI/UX Designer",
  description = "Creative UI/UX designer crafting modern, user-friendly, and visually engaging digital experiences for web and mobile products.",
  image = "https://i.ibb.co.com/WNqYCBcV/fuad.png",
  url = "https://ella-thompson.vercel.app",
}) => {
  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="UI UX designer, product designer, web designer, mobile app designer, figma designer, user interface, user experience, creative designer"
      />

      <meta name="author" content="Ella Thompson" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
