import React, { useContext, useEffect, useState } from "react";
import {
  customerDetailsPrintContext,
  SaveCustomerPayDetailsContext,
  totalAmountContext,
} from "../ContextAPI/ContextShare";
import { uploadCustomerPayDetailsAPI } from "../services/allAPI";
import InsertModal from "./InserModal";
import PrintTable from "./PrintTable";

function FirstHeader() {
  // saveCustomer ID
  const { saveCustomerId, setSaveCustomerId } = useContext(
    SaveCustomerPayDetailsContext
  );
  // customerSales TOtal Amaount
  const { customerToatalAmount, setcustomerToatalAmount } =
    useContext(totalAmountContext);

  // printCustomer Details
  // const { getcustomerdetailsPrint, setgetcustomerdetailsPrint } = useContext(
  //   customerDetailsPrintContext
  // );

  const [customerPayDetails, setCustomerPayDetails] = useState({
    id: "",
    vr_date: "",
    ac_name: "",
    ac_amt: customerToatalAmount,
    status: "",
  });

  // setgetcustomerdetailsPrint(customerPayDetails);
  const generateNewId = () => {
    
    return `C${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const handleNewButtonClick = () => {
    // Set a new id and update vr_date with the current date
    setCustomerPayDetails((prevDetails) => ({
      ...prevDetails,
      id: generateNewId(),
      vr_date: new Date().toISOString().split("T")[0],
      status: "A",
      
    }));
  };

  const saveCustomerDetails = async () => {
    const { vr_date, ac_name, ac_amt, status } = customerPayDetails;

    if (!vr_date || !ac_name || !ac_amt) {
      console.log(customerPayDetails);
      alert("Please fill in all the form fields");

      return;
    }

    try {
      const response = await uploadCustomerPayDetailsAPI({
        ...customerPayDetails,
        ac_amt: customerToatalAmount,
      });
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        alert("Data uploaded successfully");
        setCustomerPayDetails((prevDetails) => ({
          ...prevDetails,
          id: generateNewId(), 
          vr_date: new Date().toISOString().split("T")[0], 
          ac_name: "",
          ac_amt: "",
          status: "",
        }));
        setcustomerToatalAmount("");
        handleNewButtonClick();
      } else {
        console.error(response);
        alert("Failed to upload data");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data");
    }
  };

  // get customerID
  setSaveCustomerId(customerPayDetails.id);

  useEffect(() => {
    handleNewButtonClick();
  }, []);
  return (
    <div>
      <div>
        <div className="border m-3 py-3 shadow">
          <div>
            {" "}
            <h1 className="text-center text-danger">HEADER</h1>
          </div>
          <div className="d-flex justify-content-end">
            <div>
              <button
                className="border py-2 px-4 shadow buttonHover"
                onClick={handleNewButtonClick}
              >
                New
              </button>
            </div>
            <div>
              {/* <button className="border col-12 py-3 shadow buttonHover">
          Insert
        </button> */}
              <InsertModal customerPayDetails={customerPayDetails} />
            </div>
            <div>
              {/* <button
                className="border py-2 px-4 shadow buttonHover"
                onClick={() => window.print()}
              > */}
              <PrintTable customerPayDetails={customerPayDetails} />
              {/* </button> */}
            </div>
            <div>
              <button
                className="border py-2 px-4 shadow buttonHover"
                onClick={() => saveCustomerDetails()}
              >
                Save
              </button>
            </div>
          </div>

          <div className="row my-5 px-5">
            <div className="col-4">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-4 col-form-label">
                  Vr No :-
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="inputtext"
                    value={customerPayDetails.id}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="mb-3 row ">
                <label for="inputtext" className="col-sm-4 col-form-label">
                  Vr Data :-
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputtext"
                    value={customerPayDetails.vr_date}
                    onChange={(e) =>
                      setCustomerPayDetails({
                        ...customerPayDetails,
                        vr_date: e.target.value,
                      })
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-3 col-form-label">
                  Status :-
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="inputtext"
                    value={customerPayDetails.status}
                    onChange={(e) =>
                      setCustomerPayDetails({
                        ...customerPayDetails,
                        status: e.target.value,
                      })
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-2 col-form-label">
                  Acc Name :-
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputtext"
                    value={customerPayDetails.ac_name}
                    onChange={(e) =>
                      setCustomerPayDetails({
                        ...customerPayDetails,
                        ac_name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-3 col-form-label">
                  Acc Amt :
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="inputtext"
                    value={customerToatalAmount}
                    onChange={(e) =>
                      setCustomerPayDetails({
                        ...customerPayDetails,
                        ac_amt: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstHeader;
