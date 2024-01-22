import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  getcustomerItemDetailsContext,
  SaveCustomerPayDetailsContext,
  totalAmountContext,
  uploadDetailsContext,
} from "../ContextAPI/ContextShare";

import stamp from "../assets/stamp.jpg";
function PrintTable({ customerPayDetails }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { getcustomerItemDetails, setgetcustomerItemDetails } = useContext(
    getcustomerItemDetailsContext
  );
  const { saveCustomerId, setSaveCustomerId } = useContext(
    SaveCustomerPayDetailsContext
  );
  const { customerToatalAmount, setcustomerToatalAmount } =
    useContext(totalAmountContext);

  console.log(customerPayDetails);

  return (
    <div>
      <div>
        <button
          onClick={handleShow}
          className="border  py-2 px-4 shadow buttonHover"
        >
          Print
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          dialogClassName="custom-modal"
        >
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Sales Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <span className="fw-bolder">
                      Vr No:
                      <span className="ms-2 text-danger">
                        {customerPayDetails.id}
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="fw-bolder">
                      Date:{" "}
                      <span className="ms-2 text-danger">
                        {customerPayDetails.vr_date}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <span className="fw-bolder">
                      Acc Name:
                      <span className="ms-2 text-danger">
                        {customerPayDetails.ac_name}
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="fw-bolder">
                      Toatal Amount:{" "}
                      <span className="ms-2 text-danger">
                        {customerToatalAmount}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <table className="table border mt-3" border={1}>
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
                      <th
                        scope="col"
                        style={{ width: "500px" }}
                        className="border"
                      >
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
                    </tr>
                  </thead>
                  <tbody>
                    {getcustomerItemDetails && getcustomerItemDetails.length > 0
                      ? getcustomerItemDetails
                          .filter((item) => item.vr_no === saveCustomerId)
                          .map((item, index) => (
                            <tr key={item.id}>
                              <th scope="row">{index + 1}</th>
                              <td className="border">{item.item_code}</td>
                              <td className="border">{item.item_name}</td>
                              <td className="border">{item.qty}</td>
                              <td className="border">{item.rate}</td>
                              <td className="border">{item.qty * item.rate}</td>
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
                        {customerToatalAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div className="col-12 d-flex justify-content-end">
                    <div>
                      <img
                        src={stamp}
                        alt=""
                        srcset=""
                        style={{ width: "150px" }}
                      />
                      <div className="ms-5 mt-3 text-danger">Cashier</div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => window.print()}
              >
                Print
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default PrintTable;
