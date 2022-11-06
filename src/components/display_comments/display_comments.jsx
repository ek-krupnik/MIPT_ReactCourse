import React, {useState} from 'react'
import s from "./display_comments.module.css"

export function DisplayComment({commentId, articleId, text, name, visibility}) {

    const [arrComm, setArr] = useState([])

    return (
        <>
            <div className={s.comment} style={{display : visibility}}>
                 {name}: {text}
            </div>



        </>
    )
}