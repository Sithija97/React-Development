import React from "react";
import emailjs from "emailjs-com";

const Mailer = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_irfe41e",
        "template_vyab3qc",
        e.target,
        "user_ArXTfHLtXPGLyf4Uch6fa"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Contact form</h2>
      <form onSubmit={sendEmail}>
        <label>name </label>
        <input type="text" name="name" /> <br />
        <label>email </label>
        <input type="text" name="user_email" /> <br />
        <label>text </label>
        <textarea name="message" rows="4"></textarea> <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Mailer;
