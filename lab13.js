const express = require("express")
const app = express()
app.use(express.json())
const {initializeApp}=require("firebase/app")
const {getAuth,signInWithEmailAndPassword}=require("firebase/auth")
const firebaseConfig={ apiKey: "AIzaSyBOV904aS-iEgcZjGAdr8Gcxr_-UifUBn4",
  authDomain: "student-1d1a8.firebaseapp.com",
  projectId: "student-1d1a8",
  storageBucket: "student-1d1a8.firebasestorage.app",
  messagingSenderId: "907356819620",
  appId: "1:907356819620:web:7ef0d028562d76fc10d631",
  measurementId: "G-L0QBJVYJGV"
}
const firebaseApp=initializeApp(firebaseConfig)
const auth=getAuth(firebaseApp)
app.post("/login",async(req,resp)=>{
    const{email,password}=req.body
    try{
        await(signInWithEmailAndPassword(auth,email,password))
        resp.json({"message":"Login successfull"})
    }
    catch(error){
        resp.json({"message":"Invalid credentials"})
    }
})
app.listen(3000,()=>{console.log("Server started")})
