type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image, url }: Props) {
  const siteName = "Awakening Lyrics";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultImage = image || "https://awakening-lyrics.vercel.app/default.jpg";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
    </>
  );
}
