import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ScrollToTop from "./components/ScrollToTop";
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from "styled-components";
import Products from './components/Products'
import Product from './components/Product';
import Qrcode from './components/Qrcode';
import Otp from './components/Otp';
import Verify from './components/Verify';




const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>

        <Header />
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/qr-code" element={<Qrcode />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/verify" element={<Verify/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
