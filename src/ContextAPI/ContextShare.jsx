import React, { createContext, useState } from "react";

export const SaveCustomerPayDetailsContext = createContext();

function ContextShare({ children }) {
  const [saveCustomerId, setSaveCustomerId] = useState({});

  return (
    <div>
      <SaveCustomerPayDetailsContext.Provider
        value={{ saveCustomerId, setSaveCustomerId }}
      >
        {children}
      </SaveCustomerPayDetailsContext.Provider>
    </div>
  );
}

export default ContextShare;
