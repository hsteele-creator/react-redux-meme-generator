import React from "react"
import { useSelector } from "react-redux"
import "./Meme.css"
import {useDispatch } from "react-redux"

const Meme = ({index}) => {

    const dispatch = useDispatch()

    const remove = () => {
        dispatch({type: "REMOVE_MEME", payload: {index} })
    }

const image = useSelector(store => store[index].image);
const topText = useSelector(store => store[index].top);
const bottomText = useSelector(store => store[index].bottom);

if(image !== "" && topText !== "" && bottomText !== "") {
    return(
        <div id="Meme-container">
        <img id="meme-img" src={image} width="200px"></img>
        <h1 id="top-text">{topText}</h1>
        <h1 id="bottom-text">{bottomText}</h1>
        <button id="remove-btn" onClick={remove}> Delete </button>
        </div>
    )
}
}

export default Meme