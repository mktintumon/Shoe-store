import React from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";

function Login()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    if (secret !== "") {
      navigateTo("/otp", { state: { secret: secret } });
    }
  }, [secret, navigateTo]);    

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/users/emailpass/${email}/${password}`
      );

      console.log(response);

      if (response.data != '') {
        const userData = response.data.email;
        localStorage.setItem("userData", JSON.stringify(userData));
        setSecret(response.data.secret);
        alert("Open Authenticator App to Enter OTP");
        setEmail("");
        setPassword("");
      } else {
        alert("Incorrect Email / password");
      }
    } catch (err) {
      console.error("Error verifying details:", error);
      alert("Error verifying details:");
    }
  }

  return (
    <Wrapper style={{ marginBottom: "100px" }}>
      <h2 className="common-heading" style={{ marginTop: "20px" }}>
        {" "}
        LOGIN
      </h2>
      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              autoComplete="off"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button onClick={save} style={{ fontSize: "20px" }}>
              LOGIN
            </Button>
          </form>

          <h3
            style={{ fontSize: "22px", marginTop: "20px", textAlign: "center" }}
          >
            Don't have an account ? &nbsp;&nbsp;
            <NavLink className="navbar-link" to="/signup">
              <u>Sign Up</u>
            </NavLink>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-form {
    max-width: 50rem;
    margin: auto;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  input {
    font-size: 16px;
  }
  textarea {
    font-size: 16px;
  }
`;
export default Login;
