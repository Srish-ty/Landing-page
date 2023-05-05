import { BlueBu } from "./atoms/BlueBu"
import "./styles/Nav.styles.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nfirst">
        <li>Products</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Company</li>
      </ul>

      <ul className="nsecond">
        <li>EN</li>
        <li>Log in </li>
        <BlueBu>Talk to sales</BlueBu>
      </ul>
    </nav>
  );
};
