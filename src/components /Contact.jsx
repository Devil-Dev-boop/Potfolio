
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMesssage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(name);

  return (
    <div className="contact">
      <h2>
        <span className="bouncy-text">C</span>
        <span className="bouncy-text">o</span>
        <span className="bouncy-text">n</span>
        <span className="bouncy-text">t</span>
        <span className="bouncy-text">a</span>
        <span className="bouncy-text">c</span>
        <span className="bouncy-text space">t</span>
        <span className="bouncy-text">M</span>
        <span className="bouncy-text">e</span>
      </h2>

      <p>
        Hello! Thank you for taking the time to visit my portfolio. If you have
        any questions or would like to discuss a potential project, please feel
        free to contact me using the form below. I will get back to you as soon
        as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div class="wrapper">
          <div className="temp">
            <input
              class="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <span class="underline"></span>
          </div>

          <div className="temp">
            <input
              class="input"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
            <span class="underline"></span>
          </div>
          <div className="temp">
            <input
              class="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span class="underline"></span>
          </div>
          
          <textarea
            value={message}
            onChange={(e) => setMesssage(e.target.value)}
            rows="13"
            cols="55"
            placeholder="Message"
          />
          
          <div className='button'> 
                <input type='submit' class='contact-me'  value="Send Message" />
                </div>
          </div>
      </form>

      {/* <div class="wrapper">
    <input class="input" placeholder="Please Enter Text" type="text" />
    <span class="underline"></span> */}
    </div>
  );
};

export default Contact;
