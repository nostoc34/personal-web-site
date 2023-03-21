import "./main.scss";
import { Container } from "react-bootstrap";
import profilepic from "../../../assets/images/profilepic.jpg";
import { useState, useEffect } from "react";

function MainEN() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container fluid className="main">
      <h1 className={`${loaded ? 'loaded-h1' : ''}`}>Who Am I?</h1>
      <div className="main-box">
        <div className={`pfp ${loaded ? 'loaded-pfp' : ''}`}>
          <img src={profilepic} alt="pfp" />
          <div className="aka">a.k.a. Nostoc</div>
        </div>
        <div className={`about-p ${loaded ? 'loaded-about' : ''}`}>
          <h2>I'm Selim.</h2>
          <p>
            I was born in 1997 in Ankara. After graduating from high school,
            I got into the English Language Teaching department. After spending two years there,
            I decided to drop out of school. In this process, I met with programming and took
            the university exam again. Currently, I continue my life as a 3rd year Computer
            Engineering student and front-end developer.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default MainEN;
