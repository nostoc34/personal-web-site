import "./banner.scss";
import { Container } from "react-bootstrap";
import banner from "../../../assets/images/bannerBg.jpg";
import { AiFillFire } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function BannerTR() {
  return (
    <Container fluid className="banner">
      <img src={banner} alt="banner" className="banner-img" />
      <div className="saying">
        <h1>"Teknoloji, hikayelerimizi anlattığımız kamp ateşidir."</h1>
        <h5>Laurie Anderson</h5>
      </div>
      <div className="to-contact">
        <p>Siz de hikayelerinizi anlatmak ister misiniz?</p>
        <NavLink to="/iletisim">
          <AiFillFire />
        </NavLink>
      </div>
    </Container>
  );
}

export default BannerTR;
