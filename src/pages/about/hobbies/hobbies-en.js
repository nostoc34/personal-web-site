import "./hobbies.scss";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import cooking from "../../../assets/images/cooking.jpg";
import anime from "../../../assets/images/anime.png";
import hat from "../../../assets/images/hat.png";
import knife from "../../../assets/images/knife.png";
import pot from "../../../assets/images/pot.png";
import saitama from "../../../assets/images/saitama.png";
import pikachu from "../../../assets/images/pikachu.png";
import sharingan from "../../../assets/images/sharingan.png";

function HobbiesEN() {
  const [isHoveredCook, setIsHoveredCook] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".cook-doodle");

    if (isHoveredCook) {
      elements.forEach((element) => {
        element.style.transition = "all 1s ease";
        element.style.transform = "translateY(-20px)";
        element.style.opacity = "1";
      });
    } else {
      elements.forEach((element) => {
        element.style.transition = "all 1s ease";
        element.style.transform = "translateY(0)";
        element.style.opacity = "0";
      });
    }
  }, [isHoveredCook]);

  const [isHoveredAnime, setIsHoveredAnime] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".anime-doodle");

    if (isHoveredAnime) {
      elements.forEach((element) => {
        element.style.transition = "all 1s ease";
        element.style.transform = "translateY(-20px)";
        element.style.opacity = "1";
      });
    } else {
      elements.forEach((element) => {
        element.style.transition = "all 1s ease";
        element.style.transform = "translateY(0)";
        element.style.opacity = "0";
      });
    }
  }, [isHoveredAnime]);

  return (
    <Container fluid className="hobbies">
      <h1>MY HOBBIES</h1>
      <div className="hobby-cont">
        <div className="hobby-row">
          <div className="hobby-col cooking-img">
            <img
              src={cooking}
              alt="cooking"
              className="hobby-img"
              id="cooking-img"
            />
          </div>
          <div
            className="hobby-col hobby-p cooking-p"
            onMouseEnter={() => setIsHoveredCook(true)}
            onMouseLeave={() => setIsHoveredCook(false)}
          >
            <img
              src={knife}
              alt="knife"
              className="doodles cook-doodle"
              id="knife-icon"
            />
            <img
              src={hat}
              alt="hat"
              className="doodles cook-doodle"
              id="cook-icon"
            />
            <img
              src={pot}
              alt="pot"
              className="doodles cook-doodle"
              id="pot-icon"
            />
            <p>
              I have always loved to cook and eat. When I was little, I used to
              watch cooking shows on TV all the time. I even thought of becoming
              a cook for a while, but I decided to keep it as a hobby.
            </p>
          </div>
        </div>
        <div className="hobby-row">
          <div
            className="hobby-col hobby-p anime-p"
            onMouseEnter={() => setIsHoveredAnime(true)}
            onMouseLeave={() => setIsHoveredAnime(false)}
          >
            <img
              src={saitama}
              alt="saitama"
              className="doodles anime-doodle"
              id="saitama-icon"
            />
            <img
              src={pikachu}
              alt="pikachu"
              className="doodles anime-doodle"
              id="pikachu-icon"
            />
            <img
              src={sharingan}
              alt="sharingan"
              className="doodles anime-doodle"
              id="sharingan-icon"
            />
            <p>
              I started watching anime in high school. The drawing style, which
              is different from other animations, drew me in. Although I still
              love anime, in recent years I have tended to read manga rather
              than watching anime.
            </p>
          </div>
          <div className="hobby-col anime-img">
            <img src={anime} alt="anime" className="hobby-img" id="anime-img" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HobbiesEN;
