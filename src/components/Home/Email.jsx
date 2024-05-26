import btnIMG from "../../assets/images/icon-arrow.svg";
import "./Email.scss";

export default function Email() {
  return (
    <form action="#">
      <input type="email" placeholder="Email Address" className="email_input" />
      <button>
        <img src={btnIMG} alt="Submit Button" />
      </button>
    </form>
  );
}
