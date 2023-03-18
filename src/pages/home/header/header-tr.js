import "./header.scss";
import "./header-ani-tr.scss";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function HeaderTR() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container fluid className={`header ${loaded ? 'loaded' : ''}`}>
      <h1>Selam. Ben Selim.</h1>
      <h3>Geliştiriyorum :)</h3>
    </Container>
  );
}

export default HeaderTR;
