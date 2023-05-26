import {useEffect, useState} from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase.js";
import '../styles/Chat.css';

export const Chat = (props) => {

    const {room} = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room));
        onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage === "") return; 

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        });

        setNewMessage("");
    };

    return (
        <div className="chat-app">
            <div>
                {messages.map((message) => <h1>{message.text}</h1>)}</div>
            <form onSubmit={handleSubmit} className="new-message-form">
                <input 
                    className="new-message-input" 
                    placeholder="Type Your Message Here" 
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
}