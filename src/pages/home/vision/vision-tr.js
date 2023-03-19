import "./vision.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BiTimeFive, BiCheck, BiCodeAlt } from "react-icons/bi";
import { Element } from "react-scroll";
import React, { useState, useEffect } from "react";

function VisionTR() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-element');
      const elementTopOffset = element.offsetTop;
      const elementHeight = element.clientHeight;
      const elementVisibleHeight = elementHeight * 0.15;
      const elementVisibleTopOffset = elementTopOffset + elementVisibleHeight;
      const currentScrollPos = window.pageYOffset + window.innerHeight;
      const isElementVisible = currentScrollPos >= elementVisibleTopOffset;
      setIsVisible(isElementVisible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element
      name="scrollElement"
      id="scroll-element"
      className={`scroll-element ${isVisible ? "active" : ""}`}
    >
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
    </Element>
  );
}

export default VisionTR;
