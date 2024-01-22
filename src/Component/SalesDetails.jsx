import React, { useContext, useEffect, useState } from "react";
import {
  getcustomerItemDetailsContext,
  SaveCustomerPayDetailsContext,
  totalAmountContext,
  uploadDetailsContext,
} from "../ContextAPI/ContextShare";
import { deletesalesItemsAPI, getCustomerItemsAPI } from "../services/allAPI";

function SalesDetails() {
  // get vr_no
  const { saveCustomerId, setSaveCustomerId } = useContext(
    SaveCustomerPayDetailsContext
  );

  // get totoal Amount
  const { customerToatalAmount, setcustomerToatalAmount } =
    useContext(totalAmountContext);

  // sales Upload Details
  const { uploaditemDetails, setuploaditemDetails } =
    useContext(uploadDetailsContext);

  // get item to print
  const { getcustomerItemDetails, setgetcustomerItemDetails } = useContext(
    getcustomerItemDetailsContext
  );

  const [itemDetails, setItemDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // get Customer Items
  const getCustomerItems = async () => {
    try {
      const { data } = await getCustomerItemsAPI();
      console.log(data);
      setItemDetails(data);
      setgetcustomerItemDetails(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // get ID Check
  console.log(saveCustomerId);

  const deletesalesItem = async (id) => {
    await deletesalesItemsAPI(id);
    alert("Are you sure you want to remove this item?");
    getCustomerItems();
  };

  // total Amount
  useEffect(() => {
    if (itemDetails && itemDetails.length > 0) {
      const calculatedTotal = itemDetails
        .filter((item) => item.vr_no === saveCustomerId)
        .reduce((total, item) => total + item.qty * item.rate, 0);
      setTotalAmount(calculatedTotal);
      setcustomerToatalAmount(calculatedTotal.toFixed(2) || 0);
    }
  }, [itemDetails]);

  // get items
  useEffect(() => {
    getCustomerItems();
  }, [uploaditemDetails, customerToatalAmount]);
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
          {itemDetails && itemDetails.length > 0
            ? itemDetails
                .filter((item) => item.vr_no === saveCustomerId)
                .map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td className="border">{item.item_code}</td>
                    <td className="border">{item.item_name}</td>
                    <td className="border">{item.qty}</td>
                    <td className="border">{item.rate}</td>
                    <td className="border">{item.qty * item.rate}</td>
                    <td className="border text-center">
                      <i
                        className="bi bi-trash text-danger"
                        onClick={() => deletesalesItem(item.id)}
                      ></i>
                    </td>
                  </tr>
                ))
            : null}
          <tr>
            <td
              colSpan={5}
              style={{ textAlign: "right" }}
              className="border fw-bold text-danger"
            >
              Total Amount :-
            </td>
            <td className="border fw-bold text-primary">
              {totalAmount.toFixed(2) || 0}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesDetails;
