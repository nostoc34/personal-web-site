import "./cmain.scss";
import FormTR from "../form/form-tr";
import Socials from "../socials/socials";
import { Container, Row, Col } from "react-bootstrap";

function CMainTR() {
  return (
    <Container className="cmain">
      <Row>
        <Col className="main-col">
          <FormTR />
        </Col>
        <Col className="main-col">
          <Socials />
        </Col>
      </Row>
    </Container>
  );
}

export default CMainTR;
