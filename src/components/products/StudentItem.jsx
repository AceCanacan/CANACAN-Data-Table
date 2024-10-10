// ProductItem.jsx

import React from "react";
import Table from "../Table";

const StudentItem = ({ value }) => {
  return (
    <Table.Row style={{ backgroundColor: "#f9f9f9" }}>
      <Table.Column>{value.lastName}</Table.Column>
      <Table.Column>{value.firstName}</Table.Column>
      <Table.Column>{value.course}</Table.Column>
      <Table.Column>{value.birthdate}</Table.Column>
      <Table.Column>{value.age}</Table.Column>
    </Table.Row>
  );
};

export default StudentItem;
