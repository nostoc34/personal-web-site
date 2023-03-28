import "./main.scss";
import { Container } from "react-bootstrap";
import profilepic from "../../../assets/images/profilepic.jpg";
import { useState, useEffect } from "react";

function MainTR() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container fluid className="main">
      <h1 className={`${loaded ? 'loaded-h1' : ''}`}>KİM?</h1>
      <div className="main-box">
        <div className={`pfp ${loaded ? 'loaded-pfp' : ''}`}>
          <img src={profilepic} alt="pfp" />
          <div className="aka">a.k.a. Nostoc</div>
        </div>
        <div className={`about-p ${loaded ? 'loaded-about' : ''}`}>
          <h2>Ben Selim.</h2>
          <p>
            1997'de Ankara'da doğdum. Liseyi bitirdikten sonra İngilizce Öğretmenliği bölümünü kazandım.
            Orada iki sene geçirdikten sonra okulu bırakma kararı aldım. Bu süreçte programlama
            ile tanıştım ve tekrar üniversite sınavına girdim. Şu anda Bilgisayar Mühendisliği
            3. sınıf öğrencisi ve front-end geliştirici olarak hayatıma devam ediyorum. 
          </p>
        </div>
      </div>
    </Container>
  );
}

export default MainTR;
