import React from "react"
import MemeForm from "./MemeForm"
import Meme from "./Meme"
import {useSelector} from "react-redux"


const MemeGenerator = () => {

const memes = useSelector(store => store)
console.log(memes)

    return (
    <>
    <MemeForm />
    {memes.map((m, i ) => {
        return <Meme index={i}/>
    })}
    </>
    )
}

export default MemeGenerator