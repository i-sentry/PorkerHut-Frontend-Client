import { MouseEventHandler, useCallback, useState } from "react";
import data from "./data.json";



function Table() {
  

  const headers = [
    { key: "", label: "" },
    { key: "created_at", label: "Created" },
    { key: "name", label: "Name" },
    { key: "product_id", label: "Product ID" },
    { key: "price", label: "Price" },
    { key: "quantity", label: "Quantity" },
    { key: "visible", label: "Visible" },
    { key: "active", label: "Active" },
    { key: "action", label: "Action" },
  ];

 

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
              return <td key={row.key}>{ row.label}</td>
          })}
        </tr>
      </thead>

      <tbody>
        {data.map((data) => {
          return (
            <tr key={data.id}>
              <td><input type="radio" /></td>
              <td>{data.name}</td>
              <td>{data.product_id}</td>
              <td>{data.price}</td>
              <td>{ }</td>
              <td>{data.visible}</td>
              <td>{data.active}</td>
              <td><button>EDIT</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
