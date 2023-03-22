import "./cmain.scss";
import FormEN from "../form/form-en";
import Socials from "../socials/socials";
import { Container, Row, Col } from "react-bootstrap";

function CMainEN() {
  return (
    <Container className="cmain">
      <Row>
        <Col className="main-col">
          <FormEN />
        </Col>
        <Col className="main-col">
          <Socials/>
        </Col>
      </Row>
    </Container>
  );
}

export default CMainEN;
