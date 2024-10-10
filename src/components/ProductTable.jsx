// ProductTable.jsx

import React, { useMemo } from "react";
import Table from "./Table";
import { Card } from "react-bootstrap";

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const ProductTable = ({
  headers,
  data,
  firstName,
  lastName,
  course,
  minAge,
  maxAge,
  startDate,
  endDate,
}) => {
  const filteredData = useMemo(() => {
    return data
      .map((item) => ({ ...item, age: calculateAge(item.birthdate) }))
      .filter((item) => {
        const firstNameMatch = item.firstName
          .toLowerCase()
          .includes(firstName.toLowerCase());
        const lastNameMatch = item.lastName
          .toLowerCase()
          .includes(lastName.toLowerCase());
        const courseMatch = course ? item.course === course : true;
        const minAgeMatch = minAge ? item.age >= parseInt(minAge) : true;
        const maxAgeMatch = maxAge ? item.age <= parseInt(maxAge) : true;
        const startDateMatch = startDate
          ? new Date(item.birthdate) >= new Date(startDate)
          : true;
        const endDateMatch = endDate
          ? new Date(item.birthdate) <= new Date(endDate)
          : true;
        return (
          firstNameMatch &&
          lastNameMatch &&
          courseMatch &&
          minAgeMatch &&
          maxAgeMatch &&
          startDateMatch &&
          endDateMatch
        );
      });
  }, [
    data,
    firstName,
    lastName,
    course,
    minAge,
    maxAge,
    startDate,
    endDate,
  ]);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="table-responsive">
          <Table.TableContainer className="table table-hover table-bordered">
            <Table.THead>
              <Table.Row className="bg-light">
                <Table.ColumnHeader>Last Name</Table.ColumnHeader>
                <Table.ColumnHeader>First Name</Table.ColumnHeader>
                <Table.ColumnHeader>Course</Table.ColumnHeader>
                <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
                <Table.ColumnHeader>Age</Table.ColumnHeader>
              </Table.Row>
            </Table.THead>

            <Table.TBody>
              {filteredData.map((item) => (
                <Table.Row key={`${item.lastName}-${item.firstName}`}>
                  <Table.Column>{item.lastName}</Table.Column>
                  <Table.Column>{item.firstName}</Table.Column>
                  <Table.Column>{item.course}</Table.Column>
                  <Table.Column>{item.birthdate}</Table.Column>
                  <Table.Column>{item.age}</Table.Column>
                </Table.Row>
              ))}
            </Table.TBody>
          </Table.TableContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductTable;
