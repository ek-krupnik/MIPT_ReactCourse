import React, {useState} from 'react'
import s from "./display_comments.module.scss"
import classNames from 'classnames/bind'

export function DisplayComment({commentId, articleId, text, name, visibility}) {
    
    const cx = classNames.bind(s);

    const [markerComment, setMarkerComment] = useState(true)
    // true - visible
    const final_visibility = markerComment && visibility

    const hideComment = () => {
        setMarkerComment((marker) => {return !marker})
    }

    return (
        <>
            <div className={cx('common_comment_line', {common_comment_line_hidden: !final_visibility})}>
                <button className={s.delete_comment_button} onClick={hideComment}></button>
                <div className={s.comment}>
                        {name}: {text}
                </div>
            </div>
        </>
    )
}