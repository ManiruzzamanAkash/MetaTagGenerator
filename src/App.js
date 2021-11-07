import "./styles/styles.css";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import GeneratedMetaTag from "./components/GeneratedMetaTag";
import MetaTagForm from "./components/MetaTagForm";
import { generateMetaTags } from "./utils/generator";
import ReferenceLinks from "./components/ReferenceLinks";

export default function App() {
  const [metaTags, setMetaTags] = useState("");
  const [metaTagsCollection, setMetaTagsCollection] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    url: "",
    imageUrl: ""
  });

  useEffect(() => {
    setMetaTags(generateMetaTags(metaTagsCollection));
  }, [metaTagsCollection]);

  return (
    <div className="App container">
      <title>Meta Tag Generator</title>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h1 className="meta-tag-title">Meta Tag Generator</h1>
          <MetaTagForm
            metaTagsCollection={metaTagsCollection}
            setMetaTagsCollection={setMetaTagsCollection}
          />

          <GeneratedMetaTag metaTags={metaTags} />
        </Card.Body>
      </Card>

      <ReferenceLinks />
    </div>
  );
}
