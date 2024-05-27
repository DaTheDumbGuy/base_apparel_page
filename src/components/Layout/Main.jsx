import Email from "../Home/Email";
import "./Main.scss";
export default function Main() {
  return (
    <div className="ba_main">
      <div className="heroIMG_container"> </div>
      <div className="ba_body">
        <h1>
          <span className="highlight">We're </span>coming soon
        </h1>
        <p className="details">
          Hello fellow shoppers! We're currently building our new{" "}
          <span className="break"></span>fashion store. Add your email below to
          stay up-to-date with announcements and our launch deals.
        </p>
        <Email />
      </div>
    </div>
  );
}
