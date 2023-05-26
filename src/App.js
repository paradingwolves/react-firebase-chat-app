import React, { useState } from 'react';
import logo from './logo.svg';
import {Auth} from "./components/Auth";
import './App.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();



function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  if(!isAuth) {
    return (
      <Auth />
    );
  }

  return (
    <div>
      {room ? (
        <div>Chat</div>
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input />
          <button>Enter Chat</button>
        </div>
      )}
    </div>
  )
    

 
}

export default App;
