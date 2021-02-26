import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GroupPage from '../components/GroupPage'
import firebase from '../config/firebase'


export default function SignUp(props) {
       const [firstName, setFirstName] = useState()
       const [lastname, setLastname] = useState()
       const [email, setEmail] = useState()
       const [password, setPassword] = useState()
       const [emailError, setEmailError] = useState()
       const [passwordError, setPasswordError] = useState()
       const [user, setUser] = useState()



       const clearInputs = () => {
              setFirstName('')
              setLastname('')
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
       const SignUpFunc = () => {
              clearInputs()
              firebase.auth().createUserWithEmailAndPassword(email, password)
                     .then(function (result) {
                            var user = result.user;
                            firebase.database().ref(`users/${user.uid}`).set({
                                   firstName: firstName,
                                   lastName: lastname,
                                   email: user.email,
                                   uid: user.uid,
                            })
                            console.log(props)
                            props.history.push('/group')
                            // console.log(user.email)
                     })
                     .catch((error) => {
                            switch (error.code) {
                                   case "auth/email-already-in-use":
                                   case "auth/invalid-email":
                                          setEmailError(error.message);
                                          break;
                                   case "auth/waek-password":
                                          setPasswordError(error.message);
                                          break;
                            }
                     });
       }
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



       // const registerData = () => {
       //        console.log({
       //               firstName,
       //               lastname,
       //               email,
       //               password
       //        })
       // }

       return (
              <div className="loginComp">
                     {/* {(user) ? (
                            <GroupPage />
                     ) : ( */}
                     <div className="mainContainer">
                            <form>
                                   <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" type="text" className="firstName" /><br />
                                   <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Enter last name" type="text" className="lastName" /><br />
                                   <input
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter your email"
                                          type="text"
                                          className="email"
                                          required
                                          value={email}
                                   /><br />
                                   <p className="errorMessage">{emailError}</p>

                                   <input
                                          onChange={(e) => setPassword(e.target.value)}
                                          placeholder="Enter your password"
                                          type="password"
                                          value={password}
                                          className="password"
                                   /><br />
                                   <p className="errorMessage">{passwordError}</p>

                                   <Link onClick={SignUpFunc}>Register</Link>
                            </form>
                            <p className="para">Have an account ?  <Link to="/" className="togglebtn" >Login</Link> </p>
                     </div>
                     {/* // )} */}
              </div>
       )
}
