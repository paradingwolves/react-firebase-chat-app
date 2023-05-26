import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import './App.css';
import Cookies from 'universal-cookie';

import { signOut } from 'firebase/auth';
import {auth} from './config/firebase.js';
const cookies = new Cookies();

function App() {
  // State variables
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token")); // Store authentication status
  const [room, setRoom] = useState(null); // Store the current chat room

  // Ref to input element
  const roomInputRef = useRef(null);

  // Function to sign the user out
  const signUserOut = async () => {
    // Implementation for signing the user out
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    // Render the authentication component if not authenticated
    return (
      <Auth setIsAuth={setIsAuth} />
    );
  }

  return (
    <div>
      {room ? (
        // Render the Chat component if a room is selected
        <Chat room={room} />
      ) : (
        // Render the room selection form if no room is selected
        <div className="room">
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className='sign-out'>
        {/* Button to sign the user out */}
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default App;
