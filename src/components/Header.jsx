import logo from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="chef claude face" />
        <h1 className="website-title">Chef Claude</h1>
      </nav>
    </header>
  );
}
