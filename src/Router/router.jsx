import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatPage from '../components/ChatPage'
import GroupPage from '../components/GroupPage'

export default function AppRouter() {
       return (
              <Router>
                     <Route exact path="/group" component={GroupPage} />
                     <Route exact path="/chat" component={ChatPage} />
              </Router>
       )
}