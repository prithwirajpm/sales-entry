import React from "react";
import InsertModal from "./InserModal";

function SalesActivities() {
  return (
    <div className="row">
      <div className="col-12">
        <button className="border col-12 py-3 shadow buttonHover">New</button>
      </div>
      <div className="col-12">
        {/* <button className="border col-12 py-3 shadow buttonHover">
          Insert
        </button> */}
        <InsertModal />
      </div>
      <div className="col-12">
        <button className="border col-12 py-3 shadow buttonHover">Save</button>
      </div>
      <div className="col-12">
        <button className="border col-12 py-3 shadow buttonHover">Print</button>
      </div>
    </div>
  );
}

export default SalesActivities;
