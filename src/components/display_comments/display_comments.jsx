import React, {useState} from 'react'
import s from "./display_comments.module.css"

export function DisplayComment({commentId, articleId, text, name, visibility}) {
    
    const [markerComment, setMarkerComment] = useState(false)
    const final_visibility = markerComment ? "none" : visibility

    const hideComment = () => {
        setMarkerComment((marker) => {return !marker})
    }

    return (
        <>
            <div className={s.common_comment_line} style={{display : final_visibility}}>
                <button className={s.delete_comment_button} onClick={hideComment}></button>
                <div className={s.comment}>
                        {name}: {text}
                </div>
            </div>
        </>
    )
}