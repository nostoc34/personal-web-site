import "./vision.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BiTimeFive, BiCheck, BiCodeAlt } from "react-icons/bi";

function VisionEN() {
  return (
    <Container className="vision-cont">
      <h1>VISION</h1>
      <Row className="vision-row">
        <Col className="box">
          <div className="vision-col col-front first-vis">
            <BiCodeAlt />
            <h5>INNOVATION</h5>
          </div>
          <div className="vision-col col-back first-vis">
            <p>
              Improving and developing continuously by discovering new
              technologies.
            </p>
          </div>
        </Col>
        <Col className="box">
          <div className="vision-col col-front second-vis">
            <BiTimeFive />
            <h5>DISCIPLINE</h5>
          </div>
          <div className="vision-col col-back second-vis">
            <p>Progressing step by step towards the goal.</p>
          </div>
        </Col>
        <Col className="box">
          <div className="vision-col col-front third-vis">
            <BiCheck />
            <h5>QUALITY</h5>
          </div>
          <div className="vision-col col-back third-vis">
            <p>Working to always produce the best.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default VisionEN;
