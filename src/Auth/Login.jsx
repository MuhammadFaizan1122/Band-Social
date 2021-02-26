import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChatPage from '../components/ChatPage'
import firebase from '../config/firebase'

export default function Login(props) {
       const [email, setEmail] = useState()
       const [password, setPassword] = useState()
       const [emailError, setEmailError] = useState()
       const [passwordError, setPasswordError] = useState()
       const [user, setUser] = useState()


       const clearInputs = () => {
              setEmail('')
              setPassword('')
       }
       const clearErrors = () => {
              setEmailError('')
              setPasswordError('')
       }


       const SignInFunc = () => {
              clearErrors();
              firebase.auth().signInWithEmailAndPassword(email, password)
                     .then(function (result) {
                            var user = result.user;
                            firebase.database().ref(`users/${user.uid}`).set({
                                   email: user.email,
                                   uid: user.uid,
                            })
                            console.log(props)
                            props.history.push('/group')
                     })
                     .catch((error) => {
                            switch (error.code) {
                                   case "auth/invalid-email":
                                   case "auth/user-disabled":
                                   case "auth/user-not-found":
                                          setEmailError(error.message);
                                          break;
                                   case "auth/wrong-password":
                                          setPasswordError(error.message);
                                          break;
                            }
                     });
       }
       // const SignUpFunc = () => {
       //        clearInputs()
       //        firebase.auth().createUserWithEmailAndPassword(email, password)
       //               .catch((error) => {
       //                      switch (error.code) {
       //                             case "auth/email-already-in-use":
       //                             case "auth/invalid-email":
       //                                    setEmailError(error.message);
       //                                    break;
       //                             case "auth/waek-password":
       //                                    setPasswordError(error.message);
       //                                    break;
       //                      }
       //               });
       // }
       // const LogOutFunc = () => {
       //        firebase.auth().signOut()
       // }

       const authenticationListner = () => {
              firebase.auth().onAuthStateChanged((user) => {
                     if (user) {
                            clearInputs();
                            setUser(user)
                     }
                     else {
                            setUser("")
                     }
              })
       }

       useEffect(() => {
              authenticationListner()
       }, [])


       // const loginData = () => {
       //        console.log({
       //               email,
       //               password
       //        })
       // }
       // console.log(firebase.auth().uid)
       return (
              <div className="loginComp">
                     {/* {(user) ? (
                            <>
                                   <Link to="/" />
                                   <ChatPage />
                            </>
                     ) : ( */}
                     <div className="mainContainer">
                            <form>
                                   <input
                                          placeholder="Enter your email"
                                          type="text"
                                          className="email"
                                          autoFocus
                                          required
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                   /><br />
                                   <p className="errorMessage">{emailError}</p>
                                   <br />
                                   <input
                                          placeholder="Enter your password"
                                          type="password"
                                          className="password"
                                          required
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                   /><br />
                                   <p className="errorMessage">{passwordError}</p>

                                   <Link onClick={SignInFunc}>Login</Link>
                            </form>
                            <p className="para">Don't have an account ? <Link to="/signup" className="togglebtn" >Sign Up</Link> </p>

                     </div>
                     {/* // )} */}
              </div>
       )
}
