import React from "react";
import "./../App.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  const [checkSubmit, setCheckSubmit] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.go(-1);
    // history.push("/");
    console.log("your message has been sent!", name, body);
    setCheckSubmit(true);

    const dataToSubmit = {
      name,
      email,
    };

    axios.post("api/sendMail", dataToSubmit);
  };

  return (
    <>
      <div className="banner-image paraPort">
        <h1 className="banner-header">Contact</h1>
      </div>
      <form onSubmit={handleSubmit} className="create">
        <label>Your name:</label>
        <input
          type="text"
          required
          placeholder="name"
          value={name}
          onChange={(e) =>
            e.target.value ? setName(e.target.value) : "Enter name"
          }
        />
        <label>Message:</label>
        <textarea
          required
          value={body}
          placeholder="Whats up?"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Your email:</label>
        <input
          type="text"
          required
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Message Me</button>
      </form>
      {checkSubmit ? (
        name ? (
          <p>Message Sent!</p>
        ) : (
          <p>I need your name, please</p>
        )
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Contact;
