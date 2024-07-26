import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/Home.css";
import ParticleRing from "../helpers/ParticleRing";

function Home() {
  useEffect(() => {
    // Lock the screen
    document.body.style.overflow = "hidden";

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <link rel="icon" type="image/x-icon" href="../assets/bc-logo.png" />
        <title>Ike Pawsat</title>
      </Helmet>

      <ParticleRing />
    </div>
  );
}

export default Home;
