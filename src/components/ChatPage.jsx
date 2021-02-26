import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "../StyleSheets/ChatPage.css";

export default function ChatPage() {
       return (
              <div className="main">
                     <div className="chatHeader">
                            <Link to="/group"><AiOutlineArrowLeft className="leftIcon" /></Link>
                            <div className="friendName">
                                   {/* <p className="friendNameText">Alexendra hells</p> */}
                            </div>
                     </div>
                     <div className="chatContent">
                            <div className="chatBody">
                                   <div className="messages">
                                          <div className="mymessage">
                                                 <ul>
                                                        <li className="mymessageList">
                                                               My Message <AiOutlineUser className="myImgIcon" />
                                                        </li>
                                                 </ul>
                                          </div>
                                          <div className="friendmessage">
                                                 <ul>
                                                        <li className="friendmessageList">
                                                               <AiOutlineUser className="friendImgIcon" />Friend Message
                                                        </li>
                                                 </ul>
                                          </div>
                                          <div className="mymessage">
                                                 <ul>
                                                        <li className="mymessageList">
                                                               My Message <AiOutlineUser className="myImgIcon" />
                                                        </li>
                                                 </ul>
                                          </div>
                                          <div className="friendmessage">
                                                 <ul>
                                                        <li className="friendmessageList">
                                                               <AiOutlineUser className="friendImgIcon" />Friend Message
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                                   <div className="sendPortion">
                                          <input type="text" placeholder="Enter message" className="chatInput" name="chatInput" />
                                          <button className="sendBtn">Send</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
