import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="col-2">
        <div className="card" style={{ width: "12rem" }}>
          <img src={"/assets/images/TikTok.PNG"} />
        </div>
      </div>

      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <div className="container text-center flex">
          <div className="row align-items-start">

            <div className="col-10">
              <h1 className="m-0" style={{ fontSize: "2rem" }}>
                Tik Tok Product Reviews
              </h1>
              <p
                className="m-0"
                style={{ fontSize: "1.75rem", fontWeight: "700" }}
              >
                Reviews That You Can Trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <ul className="nav nav-tabs .current-menu-item a ">
          <li className="nav-item">
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-primary border border-5" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button
                  className="btn btn-primary border border-5"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-primary border border-5" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary border border-5" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </li>
          <li className="nav-item">
            <a
              href="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <button
                className="btn btn-primary border border-5"
                type="submit"
              >
                Home
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
