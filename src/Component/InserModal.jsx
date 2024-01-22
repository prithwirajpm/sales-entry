import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from "react-select";
import { uploadDetailsContext } from "../ContextAPI/ContextShare";
import { getallItemsAPI, uploadSalesAPI } from "../services/allAPI";
import SalesDetails from "./SalesDetails";

function InsertModal({ customerPayDetails }) {
  const { uploaditemDetails, setuploaditemDetails } =
    useContext(uploadDetailsContext);
  const [show, setShow] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [itemOptions, setItemOptions] = useState([]);
  const [salesDetails, setsalesDetails] = useState({
    id: "",
    vr_no: "",
    item_code: "",
    item_name: "",
    qty: "",
    rate: "",
  });
  console.log("dfsdfsd", customerPayDetails.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get items
  const getItems = async () => {
    try {
      const { data } = await getallItemsAPI();

      const options = data.map((item) => ({
        value: item.item_code,
        label: item.item_name,
      }));
      setItemOptions(options);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleCodeChange = (selectedOption) => {
    setSelectedCode(selectedOption);

    setsalesDetails((prevDetails) => ({
      ...prevDetails,
      item_code: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleNameChange = (selectedOption) => {
    setSelectedName(selectedOption);

    const correspondingCode = itemOptions.find(
      (item) => item.label === selectedOption.label
    )?.value;

    setSelectedCode({ value: correspondingCode, label: correspondingCode });

    setsalesDetails((prevDetails) => ({
      ...prevDetails,
      item_code: correspondingCode || "", 
      item_name: selectedOption ? selectedOption.label : "",
    }));
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const { id, vr_no, item_code, item_name, qty, rate } = salesDetails;

    if (!item_code || !item_name || !qty || !rate) {
      console.log(salesDetails);
      alert("Please fill in all the form fields");
      return;
    }

    try {
      const response = await uploadSalesAPI({
        ...salesDetails,
        id,
        vr_no: customerPayDetails.id, // Automatically set sr_no to the value of id
      });

      console.log(response);
      console.log(response.data.id);

      if (response.status >= 200 && response.status < 300) {
        setsalesDetails((prevDetails) => ({
          ...prevDetails,
          id: "",
          vr_no: "",
          item_code: "",
          item_name: "",
          qty: "",
          rate: "",
        }));
        setuploaditemDetails(response);
      } else {
        console.error(response);
        alert("Failed to upload data");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data");
    }
  };

  return (
    <div>
      <button
        onClick={handleShow}
        className="border  py-2 px-4 shadow buttonHover"
      >
        Insert
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="custom-modal"
      >
        <form onSubmit={handleUpload}>
          <Modal.Header closeButton>
            <Modal.Title>INSERT ITEMS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <div className="row">
                <div className="mb-3 col-3">
                  <label htmlFor="itemCode" className="form-label">
                    Item Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemCode"
                    placeholder="Item Code"
                    value={salesDetails.item_code}
                    onChange={(e) =>
                      setsalesDetails({
                        ...salesDetails,
                        item_code: e.target.value,
                      })
                    }
                    readOnly
                  />
                </div>
                <div className="mb-3 col-5">
                  <label htmlFor="itemName" className="form-label">
                    Item Name
                  </label>
                  <Select
                    id="itemName"
                    value={selectedName}
                    onChange={handleNameChange}
                    options={itemOptions}
                    isSearchable
                    placeholder="Select Item Name"
                  />
                </div>
                <div className="mb-3 col-2">
                  <label htmlFor="qty" className="form-label">
                    Qty
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="qty"
                    placeholder="Qty"
                    value={salesDetails.qty}
                    onChange={(e) => {
                      const enteredValue = e.target.value;
                      const minValue = 0;
                      if (enteredValue > minValue) {
                        setsalesDetails({ ...salesDetails, qty: enteredValue });
                      }
                    }}
                  />
                </div>
                <div className="mb-3 col-2">
                  <label htmlFor="rate" className="form-label">
                    Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rate"
                    placeholder="Rate"
                    value={salesDetails.rate}
                    onChange={(e) =>
                      setsalesDetails({ ...salesDetails, rate: e.target.value })
                    }
                  />
                </div>
                {/* <div className="mb-3 col-2">
                <label htmlFor="amount" className="form-label">
                  Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Amount"
                  value={salesDetails.amount}
                  onChange={(e) =>
                    setsalesDetails({ ...salesDetails, amount: e.target.value })
                  }
                />
              </div> */}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" variant="primary" style={{ display: "none" }}>
              Understood
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default InsertModal;
