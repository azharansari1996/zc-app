import React from "react";

function SignUp(props) {
  return (
    <>
      <div
<<<<<<< HEAD
        className="modal fade"
        id="sign-up"
=======
        className="modal fade "
        id="SignUp"
>>>>>>> 064ac541538486709f9782ba765b12fb9dc05f50
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
<<<<<<< HEAD
              <h5 className="modal-title" id="sign-up-title">
                SignUp
=======
              <h5 className="modal-title" id="SignUp-title">
                Create an account
>>>>>>> 064ac541538486709f9782ba765b12fb9dc05f50
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-10 d-flex flex-column">
                  <button>Continue with Gmail</button>
                  <button>Continue with Facebook</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
