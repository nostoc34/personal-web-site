import "./cmain.scss";
import FormTR from "../form/form-tr";
import Socials from "../socials/socials";
import { Container, Row, Col } from "react-bootstrap";

function CMainTR() {
  return (
    <Container className="cmain">
      <Row>
        <FormTR />
      </Row>
      <Row>
        <Socials />
      </Row>
    </Container>
  );
}

export default CMainTR;
