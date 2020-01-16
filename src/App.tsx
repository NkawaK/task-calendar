import React from "react";

import { FirebaseAuth, signInWithRedirect } from "./FirebaseAuth";
import TaskCalender from "./pages/TaskCalendar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const NotSignedIn = React.useCallback(() => {
    return (
      <div>
        <Header />
        <div className="signin">
          <div className="signin_head">
            <span className="signin_head_title">
              Sign in
            </span>
            <span>
              <div className="google_title">
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
              </div>
            </span>
            <figure className="signin_head_logo">
              <img src={"./btn_google_signin_light_pressed_web@2x.png"} alt="logo"
                onClick={() => signInWithRedirect()}
              />
            </figure>
          </div>
        </div>
        <Footer />
      </div>
    );
  }, []);
  const Loading = React.useCallback(() => {
    return <div>loading now...</div>
  }, []);

  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <Header />
      <TaskCalender />
      <Footer />
    </FirebaseAuth>
  );
};

export default App;