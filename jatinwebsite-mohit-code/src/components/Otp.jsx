import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Otp(){
  
  const navigateTo = useNavigate();
  const location = useLocation();
  const secret = location.state.secret;
  console.log(secret);
  
  const [otp, setOtp] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/verify?code=${otp}&secret=${secret}`
      );

      console.log(response);

      if (response.data == true) {
        alert("Multi-Factor authentication successful");
        setOtp("");
        navigateTo("/products");
        window.location.reload();
      } else {
        alert("Incorrect OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Incorrect OTP");
    }
  }

  return (
    <Wrapper style={{ marginBottom: "100px" }}>
      <h2
        className="common-heading"
        style={{ marginTop: "20px", marginBottom: "1rem" }}
      >
        Enter the OTP
      </h2>

      <br />
      <br />
      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs">
            <input
              type="text"
              name="qrcode"
              placeholder="Enter OTP"
              autoComplete="off"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={save} style={{ fontSize: "20px" }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-form {
    max-width: 30rem;
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

export default Otp;
