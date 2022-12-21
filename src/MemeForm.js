import React from "react"
import "./MemeForm.css"
import {useRef} from "react"
import {useDispatch } from "react-redux"

const MemeForm = () => {

    const imageRef = useRef();
    const topRef = useRef();
    const bottomRef = useRef();
   
    const dispatch = useDispatch();

    const addMeme = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_MEME", payload: {image: imageRef.current.value, top: topRef.current.value, bottom: bottomRef.current.value}})
    }

    return (
    <div id="form-container">
    <form>
        <label for="image">Meme Image:</label>
        <input type="text" id="image" ref={imageRef}></input>

        <label for="top">Top Text:</label>
        <input type="text" id="top" ref={topRef}></input>

        <label for="bottom">Bottom Text:</label>
        <input type="text" id="bottom" ref={bottomRef}></input>

        <button id="generate-meme" onClick={addMeme} type="submit">Generate Meme</button>
    </form>
    </div>
    )
}

export default MemeForm