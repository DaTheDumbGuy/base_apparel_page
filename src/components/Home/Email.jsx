import { useState } from "react";
import btnIMG from "../../assets/images/icon-arrow.svg";
import errorIMG from "../../assets/images/icon-error.svg";
import "./Email.scss";

export default function Email() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  function validateEmail(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      alert("Success");
    }

    setError(!emailRegex.test(email));
  }
  function handleEmail(e) {
    setError(false);
    setEmail(e.target.value);
  }
  return (
    <div className="form_container">
      <form
        action="#"
        onSubmit={(e) => validateEmail(e)}
        className={error ? "error" : ""}
      >
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => handleEmail(e)}
          className="email_input"
        />
        <div className="error_btn">
          <img
            src={errorIMG}
            alt=""
            className={`errorIMG ${error ? "error" : ""}`}
          />
          <button>
            <img src={btnIMG} alt="Submit Button" />
          </button>
        </div>
      </form>
      <span className="feedback-error">
        {error ? "Please provide a valid email" : ""}
      </span>
    </div>
  );
}
