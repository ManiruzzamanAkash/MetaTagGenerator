import React from "react";

const ReferenceLinks = () => {
  return (
    <div className="mt-3 bg-info p-2">
      <h3>Reference Links:</h3>
      <hr />

      <ul>
        <li>
          Introduction about SEO and Meta tags
          <a href="https://developers.google.com/search/docs/beginner/seo-starter-guide">
            Visit Doc
          </a>
        </li>

        <li>
          Google Crawling System -{" "}
          <a href="https://developers.google.com/search/docs/advanced/crawling/special-tags">
            Visit Google Doc
          </a>
        </li>
        <li>
          Facebook -{" "}
          <a href="https://developers.facebook.com/tools/debug">
            Visit Facebook Doc
          </a>
        </li>
        <li>
          Twitter -{" "}
          <a href="https://cards-dev.twitter.com/validator">
            Visit Twitter Doc
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReferenceLinks;
