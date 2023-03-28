import "./cbanner.scss";
import { useState, useEffect } from "react";

function CBannerTR() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`cbanner ${loaded ? 'loaded-cbanner' : ''}`}>
      <h3>BENİMLE ÇALIŞMAK İSTER MİSİN?</h3>
      <h1>DOĞRU KARAR.</h1>
    </div>
  );
}

export default CBannerTR;
