import React, { useContext, useState } from "react";
import swal from "sweetalert";
import kitten from "../assets/img/kitten.jpg";
import fire from "../Firebase";
import UserStore from "../Store";

function Dashboard() {
  const { userData, setUserData } = useContext(UserStore);
  const [name, setName] = useState(
    userData.data.displayName ? userData.data.displayName : "User"
  );

  const updateProfileModal = async () => {
    try {
      let user = fire.auth().currentUser;
      await user.updateProfile({
        displayName: name,
        photoURL: "https://placekitten.com/200/287",
      });

      user = fire.auth().currentUser;
      setUserData({
        ...userData,
        data: user,
      });
    } catch (error) {
      swal(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ maxWidth: "300px" }}>
        <img
          src={userData.data.photoURL ? userData.data.photoURL : kitten}
          className="card-img-top"
          alt={""}
        />
        <div className="card-body text-center">
          <p className="card-text">
            Hello, <strong>{name}</strong>
          </p>
          <p>
            {userData.data.email}{" "}
            {userData.data.emailVerified ? (
              <span className="badge rounded-pill bg-success">Verified</span>
            ) : (
              <span className="badge rounded-pill bg-warning text-dark">
                Unverified
              </span>
            )}
          </p>
          <button
            className="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#updateProfileModal"
          >
            Update profile
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="updateProfileModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update your details here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Update image
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={updateProfileModal}
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Update profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
