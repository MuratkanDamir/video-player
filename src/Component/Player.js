import styles from "./Player.module.css";
import ReactPlayer from 'react-player';
import { useState } from "react";

function Player(){
    const [videoLink, setNewVideoLink] = useState("https://www.youtube.com/watch?v=ij84DoCEmdI&ab_channel=LifeOfRiza")
    const [text, setText] = useState("")

    function setVideo(){
        setNewVideoLink(text);
        setText("");
    };

    function setInputText(e){
        setText(e.target.value);
        
    }
    return (
        <div className={styles.main}>
            <h1>Find video with link</h1>
            <p>In above lineedit enter video link</p>
            <div className={styles.inputDiv}>
                <input type="text" value={text} onChange={setInputText}></input>
                <button onClick={setVideo}>Watch</button>
            </div>
            
            <ReactPlayer controls url={videoLink} />
            
        </div>
    );
}


export default Player;