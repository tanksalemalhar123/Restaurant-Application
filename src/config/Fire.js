import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDNRmUIaO4RN5zE58P_WEuUw0KAN14Gnz0",
    authDomain: "loginapp-f8266.firebaseapp.com",
    databaseURL: "https://loginapp-f8266.firebaseio.com",
    projectId: "loginapp-f8266",
    storageBucket: "loginapp-f8266.appspot.com",
    messagingSenderId: "17719918927"
  };
  const fire = firebase.initializeApp(config);

  export default fire;