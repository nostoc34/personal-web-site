import "./header.scss";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function HeaderEN() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container className={`header ${loaded ? 'loaded' : ''}`}>
      <h1>Hi. I'm Selim.</h1>
      <h3>I develop :)</h3>
    </Container>
  );
}

export default HeaderEN;
