import React, { useState } from 'react'
import '../StyleSheets/GroupPageContainer.css'
import ReactS3 from 'react-s3'
import { Link } from 'react-router-dom';

const config = {
       bucketname: "bandsocial",
       albumname: 'photos',
       region: 'US West (N.California) us-west-1',
       accessKeyId: "AKIA3YGT46P6HICCH3ME",
       secretAccessKey: "t3+ CHJWnD6iLviEJVNaewuyuNH8V77l0cFhEURs6",
}

export default function GroupPageContent() {

       const [image, setImage] = useState()

       const imageSetting = () => {
              // console.log(image)
              ReactS3.uploadFile(image, config)
                     .then((data) => {
                            console.log(data)
                     })
                     .catch((error) => {
                            alert(error);
                     })
       }

       return (
              <div className="contentContainer">
                     <div className="mainHeading">
                            <h2 className="headingtxt">
                                   Group Page
                            </h2>
                     </div>
                     <div className="mainContainers">
                            <div className="imagecontainer">
                                   <div className="co-heading">
                                          <p className="co-heading-text">Band Name</p>
                                   </div>
                                   <div className="content">
                                          {/* <img src={image} alt="" /> */}
                                          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                                          <button onClick={imageSetting}>Upload Image</button>
                                   </div>
                            </div>
                            <div className="listContainer">
                                   <div className="co-heading">
                                          <p className="co-heading-text">Band Members</p>
                                   </div>
                                   <div className="list-content">
                                          <ul className="unordered">
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 01</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 02</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 03</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 04</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 05</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 06</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 07</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 08</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 09</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 10</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 11</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 12</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 13</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 14</li></Link>
                                                 <Link style={{ textDecoration: "none" }} to="/chat" ><li className="listItems">Member 15</li></Link>
                                          </ul>
                                   </div>
                            </div>
                     </div>
                     <div className="footerBox">
                            <div className="memberContent">
                                   <div className="memberHeading">
                                          <p className="textHeading">Needed Band Members</p>
                                   </div>
                                   <div className="MemberslistContainer">
                                          <div className="contactList">
                                                 <ul className="membercontentList">
                                                        <li className="memberlistItems">Drummers</li>
                                                        <li className="memberlistItems">Keyboard</li>
                                                        <li className="memberlistItems">Violinist</li>
                                                 </ul>
                                          </div>
                                          <div className="btn">
                                                 <Link to="/chat" className="contactwithus">
                                                        Contact With Us
                                                 </Link>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div >
       )
}
