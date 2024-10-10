// SearchBar.jsx

import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

const SearchBar = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  course,
  setCourse,
  minAge,
  setMinAge,
  maxAge,
  setMaxAge,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ backgroundColor: "#e6f2ff" }}>
      <Card.Body>
        <Form>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={2} className="mb-3">
              <Form.Group controlId="formCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="shadow-none"
                >
                  <option value="">All</option>
                  <option value="IT">IT</option>
                  <option value="IS">IS</option>
                  <option value="CS">CS</option>
                  <option value="DS">DS</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2} className="mb-3">
              <Form.Group controlId="formMinAge">
                <Form.Label>Min Age</Form.Label>
                <Form.Control
                  type="number"
                  value={minAge}
                  onChange={(e) => setMinAge(e.target.value)}
                  placeholder="Min Age"
                  min="0"
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={2} className="mb-3">
              <Form.Group controlId="formMaxAge">
                <Form.Label>Max Age</Form.Label>
                <Form.Control
                  type="number"
                  value={maxAge}
                  onChange={(e) => setMaxAge(e.target.value)}
                  placeholder="Max Age"
                  min="0"
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group controlId="formStartDate">
                <Form.Label>Start Birthdate</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group controlId="formEndDate">
                <Form.Label>End Birthdate</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="shadow-none"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
