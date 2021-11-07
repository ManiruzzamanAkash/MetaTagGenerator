const tabSpacing = "    ";
const newLine = "\n";

const formatLine = (line) => {
  return `${tabSpacing}${line}${newLine}`;
};

export const generateMetaTags = (metaData) => {
  const { title, description, keywords, author, url } = metaData;
  let generatedMetaTags = `<head>${newLine}`;

  // Add website title
  generatedMetaTags += formatLine(`<title>${title}</title>`);

  // Add website description
  generatedMetaTags += formatLine(
    `<meta name="description" content="${description}" />`
  );

  // Add Website Meta Keywords
  generatedMetaTags += formatLine(
    `<meta name="keywords" content="${keywords}" />`
  );

  // Add Website Author
  generatedMetaTags += formatLine(`<meta name="author" content="${author}" />`);

  // Add canonical URL
  generatedMetaTags += formatLine(`<link rel="canonical" href="${url}" />`);

  // Add Robot text
  generatedMetaTags += formatLine(
    `<meta name="robots" content="index, follow" />`
  );

  // Add Website Logo URL
  generatedMetaTags += generateSocialMetaTags(metaData, generatedMetaTags);

  // Finish Meta tags
  generatedMetaTags += "</head>";

  return generatedMetaTags;
};

export const generateSocialMetaTags = (metaData) => {
  const { title, description, url, imageUrl } = metaData;
  let socialMetaData = formatLine("");
  socialMetaData += formatLine("<!--  Essential Social Meta Tags -->");

  // <!--  Essential Social META Tags -->
  // Add Title
  socialMetaData += formatLine(
    `<meta property="og:title" content="${title}" />`
  );

  // Add description
  socialMetaData += formatLine(
    `<meta property="og:description" content="${description}" />`
  );

  // Add Image
  socialMetaData += formatLine(
    `<meta property="og:image" content="${imageUrl}" />`
  );

  // Add URL
  socialMetaData += formatLine(`<meta property="og:url" content="${url}" />`);

  // Add twitter card summary_large_image
  socialMetaData += formatLine(
    `<meta property="twitter:card" content="${imageUrl}" />`
  );

  // <!--  Non-Essential, But Recommended -->
  // Add site Name
  socialMetaData += formatLine(
    `<meta property="og:site_name" content="${title}" />`
  );

  // <meta name="twitter:image:alt" content="Alt text for image">
  // Add twitter image alt text
  socialMetaData += formatLine(
    `<meta property="twitter:image:alt" content="${title}" />`
  );

  // <!--  Non-Essential, But Required for Analytics -->
  // <meta property="fb:app_id" content="your_app_id" />
  // <meta name="twitter:site" content="@website-username">

  return socialMetaData;
};
