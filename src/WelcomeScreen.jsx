import React from "react";
import "./WelcomeScreen.css";
import { ReactComponent as Logo } from "./meet-logo.svg";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet App</h1>
      <div className="app-logo">
        <Logo />
      </div>
      <p>
        Log in to see upcoming events around the world for full-stack developers
      </p>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            className="btn-text"
          >
            <b>Sign in with Google</b>
          </button>
        </div>
      </div>
      <a
        href="https://mpschirle1.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy Policy
      </a>
    </div>
  ) : null;
}

export default WelcomeScreen;
