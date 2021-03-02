import React from "react";
import "./../App.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.go(-1);
    // history.push("/");
    console.log("your message has been sent!", title, body);
    setCheckSubmit(true);
  };

  return (
    <>
      <div className="banner-image paraPort">
        <h1 className="banner-header">Contact</h1>
      </div>
      <form onSubmit={handleSubmit} className="create">
        <label>Email title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) =>
            e.target.value ? setTitle(e.target.value) : "Enter Title"
          }
        />
        <label>Message:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Message Me</button>
      </form>
      {checkSubmit ? (
        title ? (
          <p>Message Sent!</p>
        ) : (
          <p>You need a title</p>
        )
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Contact;
