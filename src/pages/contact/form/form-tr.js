import "./form.scss";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function FormTR() {
  const form = useRef();

  function clearForm() {
    for (var i = 0; i < document.querySelectorAll(".clear").length; i++) {
      document.querySelectorAll(".clear")[i].value = "";
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ec2c3so",
        "template_wxgbicf",
        form.current,
        "gsykEksvRf329Uxhg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearForm();
  }

  return (
    <Container fluid className="form">
      <form ref={form} onSubmit={sendEmail}>
        <Row className="name">
          <Col className="input-col">
            <input
              type="text"
              name="user_fname"
              className="contact-input clear"
              placeholder="Ad"
            />
          </Col>
          <Col className="input-col">
            <input
              type="text"
              name="user_lname"
              className="contact-input clear"
              placeholder="Soyad"
            />
          </Col>
        </Row>
        <Row className="mail">
          <Col className="input-col">
            <input
              type="email"
              name="user_email"
              className="contact-input clear"
              placeholder="Email"
            />
          </Col>
        </Row>
        <Row className="message">
          <Col className="input-col">
            <textarea
              name="message"
              className="contact-input clear"
              placeholder="Mesaj"
            />
          </Col>
        </Row>

        <Row>
          <Col className="input-col">
            <input
              type="submit"
              value="Gönder"
              className="contact-input"
              id="send-btn"
            />
          </Col>
        </Row>
        <Row>
          <Col className="more-info">
            <p>Daha fazla bilgi için: mselimyaman@gmail.com</p>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default FormTR;
