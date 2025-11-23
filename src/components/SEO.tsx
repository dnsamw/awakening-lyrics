type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image, url }: Props) {
  const siteName = "Awakening Lyrics";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultImage =
    image || "https://awakening-lyrics.vercel.app/default.jpg";

  return (
    <>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={defaultImage} />
      {url && <meta key="og:url" property="og:url" content={url} />}

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={defaultImage} />
    </>
  );
}
