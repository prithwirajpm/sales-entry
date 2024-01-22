import React, { createContext, useState } from "react";

export const SaveCustomerPayDetailsContext = createContext({});
export const totalAmountContext = createContext({});
export const uploadDetailsContext = createContext({});
export const getcustomerItemDetailsContext = createContext({});
// export const customerDetailsPrintContext = createContext({});

function ContextShare({ children }) {
  const [saveCustomerId, setSaveCustomerId] = useState({});
  const [customerToatalAmount, setcustomerToatalAmount] = useState({});
  const [uploaditemDetails, setuploaditemDetails] = useState({});
  const [getcustomerItemDetails, setgetcustomerItemDetails] = useState({});
  // const [getcustomerdetailsPrint, setgetcustomerdetailsPrint] = useState({});

  return (
    <getcustomerItemDetailsContext.Provider
      value={{ getcustomerItemDetails, setgetcustomerItemDetails }}
    >
      <totalAmountContext.Provider
        value={{ customerToatalAmount, setcustomerToatalAmount }}
      >
        <uploadDetailsContext.Provider
          value={{ uploaditemDetails, setuploaditemDetails }}
        >
          <SaveCustomerPayDetailsContext.Provider
            value={{ saveCustomerId, setSaveCustomerId }}
          >
            {children}
          </SaveCustomerPayDetailsContext.Provider>
        </uploadDetailsContext.Provider>
      </totalAmountContext.Provider>
    </getcustomerItemDetailsContext.Provider>
  );
}

export default ContextShare;
