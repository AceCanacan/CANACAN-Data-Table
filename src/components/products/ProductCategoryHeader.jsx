// ProductCategoryHeader.jsx

import React from "react";
import Table from "../Table";

const ProductCategoryHeader = ({ text }) => {
  return (
    <Table.Row>
      <Table.ColumnHeader
        colSpan="5"
        className="text-white"
        style={{
          backgroundColor: "#a3c4f3",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        {text}
      </Table.ColumnHeader>
    </Table.Row>
  );
};

export default ProductCategoryHeader;
