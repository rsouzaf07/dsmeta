import logo from '../../assets/logo.svg'
import "./styles.css";

function Header() {
  return (
  <header>
    <div className="dsmeta-logo-container">
      <img src={logo} alt="" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por
        <a href="https://github.com/rsouzaf07">@rsouzaf07</a>
      </p>
    </div>
  </header> )
}

export default Header;
