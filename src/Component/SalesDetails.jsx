import React from "react";

function SalesDetails() {
  return (
    <div className="shadow mx-3">
      <table className="table border" border={1}>
        <thead>
          <tr>
            <th className="text-center pt-4 pb-4" colSpan={7}>
              Details
            </th>
          </tr>
          <tr>
            <th scope="col" className="border">
              Sr No
            </th>
            <th scope="col" className="border">
              Item Code
            </th>
            <th scope="col" style={{ width: "500px" }} className="border">
              Item Name
            </th>
            <th scope="col" className="border">
              Qty
            </th>
            <th scope="col" className="border">
              Rate
            </th>
            <th scope="col" className="border">
              Amount
            </th>
            <th className="text-center">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="border">Mark</td>
            <td className="border">Otto</td>
            <td className="border">@mdo</td>
            <td className="border">@mdo</td>
            <td className="border">@mdo</td>
            <td className="border text-center">
              <i className="bi bi-trash text-danger"></i>
            </td>
          </tr>

          <tr>
            <td
              colSpan={5}
              style={{ textAlign: "right" }}
              className="border fw-bold text-danger"
            >
              Total Amount :-
            </td>
            <td className="border fw-bold text-primary">275.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesDetails;
