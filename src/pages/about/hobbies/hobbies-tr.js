import "./hobbies.scss";
import { Container } from "react-bootstrap";
import cooking from "../../../assets/images/cooking.jpg";
import anime from "../../../assets/images/anime.png";

function HobbiesTR() {
  return (
    <Container fluid className="hobbies">
      <h1>HOBİLERİM</h1>
      <div className="hobby-cont">
        <div className="hobby-row">
          <div className="hobby-col cooking-img">
            <img src={cooking} alt="cooking" className="hobby-img" />
          </div>
          <div className="hobby-col hobby-p cooking-p">
            sdaa
          </div>
        </div>
        <div className="hobby-row">
          <div className="hobby-col hobby-p anime-p">
            anime izlemeyi severim
          </div>
          <div className="hobby-col anime-img">
            <img src={anime} alt="anime" className="hobby-img" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HobbiesTR;
