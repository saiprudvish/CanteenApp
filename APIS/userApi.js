//create mini express application
const exp=require("express")

const expressErrorHandler = require("express-async-handler")
const userApi=exp.Router();
//let initializeApp=require("firebase/app")
const iapp=require("firebase/app")
//import { initializeApp } from "firebase/app";
//const expressErrorHandler = require("express-async-handler")
//add body parser middleware
userApi.use(exp.json())
//import { getAuth } from "firebase/auth";
const iauth=require("firebase/auth")
var mysql = require('mysql');


// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3_sVw1vM2JJYHIZrmhW0eYOfz9aEOJKI",
  authDomain: "vnrcanteen-dc1ee.firebaseapp.com",
  projectId: "vnrcanteen-dc1ee",
  storageBucket: "vnrcanteen-dc1ee.appspot.com",
  messagingSenderId: "560693712371",
  appId: "1:560693712371:web:2ff1567022f2b7f06c2e86",
  measurementId: "G-SZ11ZY2DL6"
};

const app1 = iapp.initializeApp(firebaseConfig);
const auth=iauth.getAuth(app1);
// Initialize Firebase

//const analytics = getAnalytics(app);


const googleProvider = new iauth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    
  await signInWithPopup(auth, googleProvider).then(
    result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user)
  })
 //SetSignin(true);
 
 


};

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sai1234",
    database:"canteen",
    timezone: 'Z',
    connectionLimit:10
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.query('select * from info',(err,result,fields)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(result)
//     userApi.get("/data", (req, res) => {
    
//         res.send({result})
     
//       });
// })


//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new iauth.GoogleAuthProvider();
//const auth=iauth.getAuth(app1);
//console.log(provider)

//const auth = getAuth();


userApi.get("/login", expressErrorHandler(async (req, res) => {
 
   //console.log(auth)
   const googleProvider = new iauth.GoogleAuthProvider();


    
  await iauth.signInWithPopup(auth, googleProvider).then(
     (res)=>{
         const user = res.user;
           
          //console.log(user)
     }
 );
  
  //res.send({ message: user })

}))







//export userApi
module.exports=userApi; 