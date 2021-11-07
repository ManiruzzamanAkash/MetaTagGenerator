import React from "react";

const GeneratedMetaTag = ({ metaTags }) => {
  return (
    <div className="mt-2">
      <h3>
        Meta tags Generated:{" "}
        <small className="text-danger">Select and Copy</small>
      </h3>
      <div className="generated-meta-tags">
        <pre>
          <code>{metaTags}</code>
        </pre>
      </div>
    </div>
  );
};

export default GeneratedMetaTag;
