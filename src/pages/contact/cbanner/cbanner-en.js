import "./cbanner.scss";
import { useState, useEffect } from "react";

function CBannerEN() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`cbanner ${loaded ? "loaded-cbanner" : ""}`}>
      <h3>WOULD YOU LIKE TO WORK WITH ME?</h3>
      <h1>RIGHT DECISION.</h1>
    </div>
  );
}

export default CBannerEN;
