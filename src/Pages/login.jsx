import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import useToken from "../Hooks/useToken";
// import { useNavigate } from "react-router-dom";
import "./pageStyle/login.css";

const TOKEN = gql`
  query ($username: String!, $password: String!) {
    access_token(username: $username, password: $password)
  }
`;

const Login = () => {
  const { setToken } = useToken();
  const [variables, setVariables] = useState({
    username: "",
    password: "",
  });

  const { data } = useQuery(TOKEN, {
    variables: variables,
    onCompleted: (data) => {
      if (data?.access_token) setToken(data?.access_token);
    },
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, password } = evt.target;
    setVariables({ username: username.value, password: password.value });
    if (data?.access_token) setToken(data?.access_token);
  };

  return (
    <main className="main">
      <section className="login">
        <div className="container">
          <div className="login__body rounded">
            <h3 className="login__title">Login</h3>
            <form onSubmit={(e) => handleSubmit(e)} className="login__form">
              <div>
                <label className="login__form-label">USERNAME</label>
                <input
                  className="login__form-input"
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="login__form-label">PASSWORD</label>
                <input
                  className="login__form-input login__form-input-password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <button type="submit" className="login__form-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
