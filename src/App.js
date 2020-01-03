import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "  AIzaSyCBfn3CYHY-1UvF2yjoS_fyyLD65QjUtjk",
  authDomain: "angular-authentication-a5ab0.firebaseapp.com"
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Sithija Shehara</h1>
        {this.state.isSignedIn ? (
          <div>
            Signed In!
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </div>
        ) : (
          <StyleFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
