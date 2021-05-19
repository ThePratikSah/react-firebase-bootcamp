import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCByRv3e82BQSh9mBnDoDursEIOTvtSHiw",
  authDomain: "bold-streamer-188719.firebaseapp.com",
  databaseURL: "https://bold-streamer-188719.firebaseio.com",
  projectId: "bold-streamer-188719",
  storageBucket: "bold-streamer-188719.appspot.com",
  messagingSenderId: "56109275176",
  appId: "1:56109275176:web:df998a5e21e3635b5a7d1d",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
