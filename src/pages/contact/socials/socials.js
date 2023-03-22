import "./socials.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Socials() {
  return (
    <Container fluid className="social">
      <Row>
        <Col className="social-col">
          <a href="https://github.com/nostoc34" target="blank">
            <AiOutlineGithub className="social-icon github" />
          </a>
        </Col>
        <Col className="social-col">
          <a
            href="https://www.linkedin.com/in/muhammed-selim-yaman/"
            target="blank"
          >
            <AiFillLinkedin className="social-icon linkedin" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="social-col">
          <a href="https://www.instagram.com/mselimyaman/" target="blank">
            <AiFillInstagram className="social-icon instagram" />
          </a>
        </Col>
        <Col className="social-col">
          <a href="https://twitter.com/mselimyaman" target="blank">
            <AiOutlineTwitter className="social-icon twitter" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Socials;
