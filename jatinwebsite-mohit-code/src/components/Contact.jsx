import React from 'react'
import { styled } from "styled-components";

const Contact = () => {
    return (
        <Wrapper>
            <h2 className='common-heading' style={{ marginTop: "40px" }}> Contact Us</h2>
            
            <div className='container'>
                <div className='contact-form'>
                    <h2 style={{ margin: "12px" }}>Feel Free to Send Your Valuable Feedback</h2>
                    <form action="https://formspree.io/f/mknlppdo" method='POST' className='contact-inputs'>
                        <input type="text" name="username" placeholder='Name'
                            autoComplete='off' required />
                        <input type="email" name="Email" placeholder='Email'
                            autoComplete='off' required />

                        <textarea name="message" cols="30" rows="6"
                            autoComplete='off' required
                            placeholder='Your Feedback'
                        ></textarea>
                        <input style={{ maxWidth: "none"}} type="submit" value="send" ></input>
                    </form>
                </div>
            </div>

            
            <div className='location'>
                <h2 className='common-heading' style={{ marginTop: "20px" }}> <u>Locate Us</u></h2>
                
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8938328038744!2d77.59696877510777!3d12.914544616126546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159a8c6f11f5%3A0x214d6818a74fa94b!2zQ3lSQUFDU-KEog!5e0!3m2!1sen!2sin!4v1696414008158!5m2!1sen!2sin"
                width="50%"
                height={300}

                style={{ border: 0, marginBottom: "20px", marginLeft: "10px", marginRight: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
            
        </Wrapper >
    )
}
const Wrapper = styled.section`
    .contact-form {
        max-width:50rem;
        margin:auto;
        font-size : 22px;
        margin-bottom: 20px;

    }
    .contact-inputs {
        display:flex;
        flex-direction:column;
        gap: 3rem;
    }
    input{
        font-size : 16px;
    }
    textarea{
        font-size : 16px;
    }
    .location{
        display : flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:15rem;
        margin-top:8rem;
        margin-bottom:7rem;
    }

`;
export default Contact
