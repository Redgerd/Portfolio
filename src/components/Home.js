import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <main className="home-content">
      <h1 className="home-title ">
        Hi, I’m Muhammad Salaar{" "}
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "MERN Stack Developer",
                "Data Scientist",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
      </h1>
      <p className="home-subtitle">
        {" "}
        I "try to" write scalable, performant, and accessible software.
      </p>
    </main>
  );
}

export default Home;
