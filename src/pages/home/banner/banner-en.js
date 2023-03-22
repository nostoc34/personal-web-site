import "./banner.scss";
import { Container } from "react-bootstrap";
import { AiFillFire } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function BannerEN() {
  return (
    <Container fluid className="banner">
      <div className="saying">
        <h1>"Technology is the campfire around which <br/> we tell our stories."</h1>
        <h5>Laurie Anderson</h5>
      </div>
      <div className="to-contact">
        <p>Would you like to tell your stories too?</p>
        <NavLink to="/contact">
          <AiFillFire />
        </NavLink>
      </div>
    </Container>
  );
}

export default BannerEN;
