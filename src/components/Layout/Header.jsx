import logo from "../../assets/images/logo.svg";
import "./Header.scss";
export default function Header() {
  return (
    <header className="ba_header">
      <img src={logo} alt="" />
    </header>
  );
}
