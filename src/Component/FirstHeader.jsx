import React from "react";

function FirstHeader() {
  return (
    <div>
      <div>
        <div className="border m-3 py-3 shadow">
          <div>
            {" "}
            <h1 className="text-center text-danger">Header</h1>
          </div>
          <div className="row">
            <div className="col-10">
              <div>
                <label for="inputPassword6" className="col-form-label">
                  Password
                </label>

                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control w-50"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div>
                <label for="inputPassword6" className="col-form-label">
                  Password
                </label>

                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control w-50"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
            <div className="">
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default FirstHeader;
