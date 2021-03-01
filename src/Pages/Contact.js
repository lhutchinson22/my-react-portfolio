import React from "react";
import "./../App.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.go(-1);
    console.log("your message has been sent!");
    // history.push("/");
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Message:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Message Me</button>
      </form>

      {/* {handleSubmit ? (
        <p>title: {title} was sent.</p>
      ) : (
        <p>please input field"</p>
      )} */}
      {/* {handleSubmit && <p>thank you for your message: "{body}"</p>} */}
    </>
  );
};

export default Contact;
