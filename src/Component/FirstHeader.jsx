import React, { useEffect } from "react";


function FirstHeader() {

  return (
    <div>
      <div>
        <div className="border m-3 py-3 shadow">
          <div>
            {" "}
            <h1 className="text-center text-danger">Header</h1>
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
                    className="form-control w-50"
                    id="inputtext"
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
                  <input type="text" className="form-control" id="inputtext" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-3 col-form-label">
                  Status :-
                </label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="inputtext" />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-2 col-form-label">
                  Acc Name :-
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputtext" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 row">
                <label for="inputtext" className="col-sm-3 col-form-label">
                  Acc Amt :
                </label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="inputtext" />
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
