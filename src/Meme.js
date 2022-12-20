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

    return (
        <div id="Meme-container">
        <img src={image} width="200px"></img>
        <h1>{topText}</h1>
        <h1>{bottomText}</h1>
        <button onClick={remove}>Remove</button>
        </div>
    )
}

export default Meme