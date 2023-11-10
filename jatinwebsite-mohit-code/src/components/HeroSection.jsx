import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../redux/Context";
import { useState } from "react";


const HeroSection = (props) => {
  const key = "userData";
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(key) !== null
  );
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p
            className="hero-top-data"
            style={{ color: "rgb(10, 20, 53)", fontWeight: "bold" }}
          >
            THIS IS OUR PAGE
          </p>

          <h1 className="hero-heading">{props.name}</h1>
          <p className="hero-para" style={{ fontSize: "27px" }}>
            Welcome to sneaker hub boys . Grab the latest sneakers at the most
            afforadable price in the market
          </p>

          <NavLink to={isLoggedIn ? '/products' : '/login'}>
            <Button style={{ width: "50rem", fontSize: "2.5rem" }}>
              Explore
            </Button>
          </NavLink>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} atl=""></img>
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10rem;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 4.6rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -15rem;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
