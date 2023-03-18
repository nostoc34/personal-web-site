import "./vision.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BiTimeFive, BiCheck, BiCodeAlt } from "react-icons/bi";

function VisionTR() {
  return (
      <Container fluid className="vision-cont">
        <h1>VİZYON</h1>
        <Row className="vision-row">
          <Col className="box">
            <div className="vision-col col-front first-vis">
              <BiCodeAlt />
              <h5>YENİLİK</h5>
            </div>
            <div className="vision-col col-back first-vis">
              <p>
                Yeni teknolojileri keşfederek sürekli gelişmek ve geliştirmek.
              </p>
            </div>
          </Col>

          <Col className="box">
            <div className="vision-col col-front second-vis">
              <BiTimeFive />
              <h5>DİSİPLİN</h5>
            </div>
            <div className="vision-col col-back second-vis">
              <p>Hedefe doğru adım adım ilerlemek.</p>
            </div>
          </Col>

          <Col className="box">
            <div className="vision-col col-front third-vis">
              <BiCheck />
              <h5>KALİTE</h5>
            </div>
            <div className="vision-col col-back third-vis">
              <p>Daima en iyiyi üretmek için çalışmak.</p>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default VisionTR;
