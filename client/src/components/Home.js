import React, { Component } from "react";
import background from "../assets/background.jpg";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "fixed",
          left: "0px",
          zIndex: "1002",
          minWidth: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div
          class="center"
          style={{
            position: "absolute",
            zIndex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "9vh 9vw",
            borderRadius: "15vh",
            // backdropFilter: 'blur(6vh)'
          }}
        >
          <main class="px-3">
            <h1 style={{ color: "black", fontSize: "3rem" }}>
              Bottlr <img src="bottlr.png" alt="bottlr.png" height="48px" />
            </h1>
            <p class="lead">
              {" "}
              Share your bottled emotions <br />
              and read from others around the world
            </p>
            <a
              href="/feed"
              class="btn btn-lg btn-secondary font-weight-bold border-black bg-white text-black"
            >
              Enter and Start Browsing
            </a>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
