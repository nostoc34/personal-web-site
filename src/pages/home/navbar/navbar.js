import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/hakkimda">Hakkımda</Link>
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
