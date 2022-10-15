import { Link } from "react-router-dom";
import "./styles/userHeader.css";

function UserHeader() {
  return (
    <>
      <header className="header navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-x-diamond-fill bg-danger"></i> Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Link</p>
              </li>
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <p className="dropdown-item">Action</p>
                  </li>
                  <li>
                    <p className="dropdown-item">Another action</p>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <p className="dropdown-item">Something else here</p>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/corzinka" style={{ color: "#555" }}>
              <i
                className="bi bi-cart4"
                style={{ fontSize: "25px", cursor: "pointer" }}
              ></i>
            </Link>
            <Link className="btn btn-primary m-3" to="/login">
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default UserHeader;
