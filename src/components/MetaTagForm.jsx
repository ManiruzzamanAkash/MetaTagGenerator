import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const MetaTagForm = ({ metaTagsCollection, setMetaTagsCollection }) => {
  const onChangeInput = (name, value) => {
    let newTags = { ...metaTagsCollection };
    newTags[name] = value;

    setMetaTagsCollection(newTags);
  };

  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group row className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Name or Page Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Website Name or Title"
              onChange={(e) => onChangeInput("title", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Address (URL)</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Website URL; eg: https://example.com"
              onChange={(e) => onChangeInput("url", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Meta Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Website Meta Description"
              onChange={(e) => onChangeInput("description", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Meta Keywords</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Website Keywords; eg: website"
              onChange={(e) => onChangeInput("keywords", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Logo (URL)</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Logo URL; eg: https://example.com/logo.png"
              onChange={(e) => onChangeInput("imageUrl", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name; eg: Jhon Doe"
              onChange={(e) => onChangeInput("author", e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
    </Form>
  );
};

export default MetaTagForm;
