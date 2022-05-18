 import  firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAXd4qVr-BxReRzRpP8MHt3Y_NdOqq9hVE",
  authDomain: "pro-60-e8c77.firebaseapp.com",
  projectId: "pro-60-e8c77",
  storageBucket: "pro-60-e8c77.appspot.com",
  messagingSenderId: "712927560806",
  appId: "1:712927560806:web:b5e609ee8fc9da7dda19a7"
};
//initialize your database
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
  export default firebase.database()
 

  