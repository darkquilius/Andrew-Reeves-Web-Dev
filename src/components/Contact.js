import React, { useState } from "react";
import styled from "styled-components";
import ContactEmail from "../utils/ContactEmail"
import * as emailjs  from "@emailjs/browser";
emailjs.init("3tdGNPLr5MQiCE9J2");

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
  
    let tempParams = {
      from_name: name,
      email: email,
      subject: subject,
      message: message
    }

    emailjs.send(ContactEmail.SERVICE_ID, ContactEmail.TEMPLATE_ID, tempParams).then(
      (result) => {
        alert("Message Sent, I will get back to you shortly", result.text);
        resetForm()
      },
      (error) => {
        alert("An error occurred, Please try again", error.text);
      }
    );
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    let x = e.target.id;
    if(x === "contact-name"){
      setName(e.target.value)
    }
    if(x === "contact-email"){
      setEmail(e.target.value)
    }
    if(x === "contact-subject"){
      setSubject(e.target.value)
    }
    if(x === "contact-message"){
      setMessage(e.target.value)
    }
  }

  const resetForm = () => {
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-subject").value = "";
    document.getElementById("contact-message").value = "";
  }

  return (
    <ContactStyles className="section sec5 contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact{" "}
            <span className="me-span">
              Me<span className="bg-text">Contact Me</span>
            </span>
          </h2>
          <p className="header-text">Feel free to get in touch!</p>
        </div>
        <div className="contact-content">
          <div className="left-contact">
            <h4>Contact Me Here</h4>
            <p>
              I love talking to new people. Below is my contact info and links
              to my Github/LinkedIn. Shoot me an email either directly or using
              this handy form to my right. Thanks a million. Keep Coding.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon location">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span>Location: Atlanta, GA</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon email">
                  <i className="fas fa-envelope"></i>{" "}
                  <span>Email: andrew.c.reeves27@gmail.com</span>
                </div>
              </div>
              <div className="contact-icons">
                <a
                  href="https://github.com/darkquilius"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-reeves-web-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <div className="contact-form">
              <div className="input-control input-name">
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder=" So what is your name?"
                  onChange={e => handleChange(e)}
                ></input>
                <input
                  type="text"
                  id="contact-email"
                  required
                  placeholder=" How about your email?"
                  onChange={e => handleChange(e)}
                ></input>
              </div>
              <div className="input-control">
                <input
                  type="text"
                  id="contact-subject"
                  required
                  placeholder=" What should we talk about?"
                  onChange={e => handleChange(e)}
                ></input>
              </div>
              <div className="input-control">
                <textarea onChange={e => handleChange(e)} name="" id="contact-message" cols="15" rows="8"></textarea>
              </div>
              <div onClick={(e) => {
                handleSubmit(e)
              }} className="submit-button">
                <a href="" className="main-btn">
                  <span className="btn-text">Talk Soon! </span>
                  <span className="btn-icon">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
};

const ContactStyles = styled.div`
  .main-title {
    text-align: center;
    padding: 20px 0;
    h2 {
      position: relative;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 700;
      white-space: nowrap;
      .me-span {
        color: var(--color-secondary);
      }
      .bg-text {
        position: absolute;
        top: 50%;
        left: 50%;
        color: var(--color-grey5);
        transition: all 0.4s ease-in-out;
        z-index: -1;
        transform: translate(-50%, -50%);
        font-weight: 700;
        font-size: 5rem;
        @media screen and (max-width: 850px) {
          font-size: 4.25rem;
          left: 75%;
        }
      }
    }
  }

  .contact-content {
    display: flex;
    padding-top: 3.5rem;
    .left-contact {
      background-color: var(--container-shading);
      padding: 20px 10px;
      border-radius: 10px;
      flex: 2;
      height: fit-content;
      h4 {
        margin-top: 1rem;
        font-size: 2rem;
        text-transform: uppercase;
      }
      p {
        margin: 1rem 0;
        line-height: 2rem;
      }
      .icon {
        display: grid;
        grid-template-columns: 40px 1fr;
        align-items: center;
        i {
          display: flex;
          font-size: 1.3rem;
        }
      }
      .contact-icons {
        margin-top: 1rem;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        background-color: var(--color-grey5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 0.4rem;
        transition: all 0.4s ease-in-out;
        &:hover {
          background-color: var(--color-white);
          i {
            color: var(--color-primary);
          }
        }
      }
    }
    .right-contact {
      flex: 3;
      margin-left: 3rem;
      .submit-button {
        justify-content: center;
      }
      .input-control {
        margin: 1.5rem 0;
        input,
        textarea {
          padding: 8px;
          box-sizing: border-box;
          border-radius: 15px;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          padding: 0.8rem 1.1.rem;
          width: 100%;
          resize: none;
          border: none;
          outline: none;
        }
      }
      .input-name {
        display: flex;
        :last-child {
          margin-left: 1.5rem;
        }
      }
    }
  }

  .submit-button {
    display: flex;
    align-self: flex-start;

    .main-btn {
      background-color: var(--color-grey5);
      border-radius: 30px;
      color: inherit;
      font-weight: 600;
      position: relative;
      border: 1px solid var(--color-white);
      display: flex;
      align-self: flex-start;
      align-items: center;
      overflow: hidden;

      .btn-text {
        padding: 0 2rem;
        @media screen and (max-width: 1200px), screen and (max-height: 600px) {
          padding: 0 1rem;
          font-size: small;
        }
      }

      .btn-icon {
        background-color: var(--color-grey5);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 1rem;
        @media screen and (max-width: 1200px), screen and (max-height: 600px) {
          padding: 0.5rem;
        }
      }
    }
  }
`;

export default Contact;
