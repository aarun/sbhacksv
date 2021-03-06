import React, { Component } from "react";
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCbRZwXF2eXe2DpLNeWBDW8N4I8WDOVge8",
  authDomain: "snap-vote-77029.firebaseapp.com",
  databaseURL: "https://snap-vote-77029.firebaseio.com",
  projectId: "snap-vote-77029",
  storageBucket: "snap-vote-77029.appspot.com",
  messagingSenderId: "332977921881"
};

firebase.initializeApp(config);

var data = firebase.database();

var nme = localStorage.getItem("userName");

console.log(nme);

class Users extends Component {
  componentDidMount() { }

  render() {
    const btnStyle = {
      borderWidth: "2px",
      borderColor: "black",
      color: "black"
    };
    return (
      <div
        style={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "table-cell"
        }}
      >
        <h1 className="mb-4">Better School?</h1>
        <div style={{ textAlign: "center" }}>
          <div className="mb-4">



            <button
              className="btn m-2 btn-lg btn-outline-danger"
              style={btnStyle}
              onClick={() => {
                data.ref('usc/').update({
                  [nme]: {
                    name: localStorage.getItem("userName"),
                    profile_picture: localStorage.getItem("userSnap"),
                  }
                });
                window.location.replace("http://localhost:3000/voted");

              }}
            >
              USC
            </button>
            <button
              className="btn m-2 btn-lg btn-outline-primary"
              style={btnStyle}
              onClick={() => {
                data.ref('ucla/').update({
                  [nme]: {
                    name: localStorage.getItem("userName"),
                    profile_picture: localStorage.getItem("userSnap"),
                  }
                });

                window.location.replace("http://localhost:3000/voted");


              }}
            >
              UCLA
            </button>
          </div>
        </div>
        <div>
          <img
            style={{ width: "100px" }}
            src={localStorage.getItem("userSnap")}
          />
          <img
            src="https://accounts.snapchat.com/accounts/snapcodes?type=svg"
          />
        </div>
      </div>


    );
  }
}

function test() {

  window.alert("NICEEEEEEEEE");



}

export default Users;
