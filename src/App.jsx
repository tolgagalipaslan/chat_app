import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  
  } from "react-router-dom";
  

import  Join from "./components/Join/Join"
import  Chat from "./components/Chat/Chat"
const App= () => (
   <Router>
     <Routes>
        <Route path="/" element={<Join/>} />
        <Route path="/chat" element={<Chat/>} />


        {/* <Link to='/'>
        </Link> */}
    </Routes>
   </Router>
   
);

export default App