import React, { useContext } from "react";
import FirstHeader from "./FirstHeader";
import SalesDetails from "./SalesDetails";

function MainBody() {
  return (
    <div className="container w-100">
      <div className="col-12">
        {" "}
        <FirstHeader />
      </div>
      <div className="col-12">
        {" "}
        <SalesDetails />
      </div>
    </div>
  );
}

export default MainBody;
