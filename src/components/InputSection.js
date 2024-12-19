import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import useIsSmallScreen from "./useIsSmallScreen";

const InputSection = ({
  names,
  setNames,
  numTeams,
  setNumTeams,
  handleGenerateTeams,
}) => {
  const isSmallScreen = useIsSmallScreen();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <Col md={5} className={isSmallScreen ? "" : "border-end"}>
      <h4 className="mb-4 text-primary">Enter Details</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>Enter Names (one per line)</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="John Doe&#10;Jane Smith&#10;Diana White"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className="border-primary"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            <strong>Number of Teams</strong>
          </Form.Label>
          <Form.Control
            type="number"
            min="2"
            value={numTeams}
            onChange={(e) => setNumTeams(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            className="border-primary"
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" onClick={handleGenerateTeams}>
            Generate Teams
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default InputSection;
