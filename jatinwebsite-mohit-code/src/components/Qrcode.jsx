import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Qrcode() {
  const location = useLocation();
  const email = location.state.emailData;
  const secret = location.state.secretKey;
  console.log(email);
  console.log(secret);
 

  const [otp, setOtp] = useState("");
  const [qrCodeLink, setQrCodeLink] = useState("");
  //const [secret , setSecret] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    generateQR();
  }, []);

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/verify?code=${otp}&secret=${secret}`
      );

      console.log(response);

      if (response.data == true) {
        alert("Registration successful");
        setOtp(""); 
        navigateTo("/login"); 
      } else {
        alert("Incorrect OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Incorrect OTP"); 
      
    }
  }

  async function generateQR() {
    try {
      const response = await axios.get(`/generate/${email}`);
      //console.log(response.data);
      setQrCodeLink(response.data.qrcodeUrl);
      
    } catch (error) {
      console.error("Error fetching QR code URL:", error);
    }
  }

  return (
    <Wrapper style={{ marginBottom: "100px" }}>
      <h2
        className="common-heading"
        style={{ marginTop: "20px", marginBottom: "1rem" }}
      >
        SCAN THE QR-CODE
      </h2>

      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%",
        }}
      >
        <img
          style={{
            display: "block",
            margin: "auto",
            backgroundColor: "hsl(0, 0%, 90%)",
          }}
          src={qrCodeLink}
        />
      </div>
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

export default Qrcode;
