import React from "react";
import FirstHeader from "./FirstHeader";
import SalesActivities from "./SalesActivities";
import SalesDetails from "./SalesDetails";

function MainBody() {
  return (
    <div className="row w-100">
      <div className="col-10">
        <div className="row">
          <div className="col-12">
            {" "}
            <FirstHeader />
          </div>
          <div className="col-12">
            {" "}
            <SalesDetails />
          </div>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <SalesActivities />
      </div>
    </div>
  );
}

export default MainBody;
