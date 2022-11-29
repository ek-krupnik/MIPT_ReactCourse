import React, {useState} from 'react'
import s from "./display_comments.module.scss"
import classNames from 'classnames/bind'

export function DisplayComment({commentId, articleId, text, name, date, likes}) {
    
    const [counter, setCounter] = useState(0);
    const [line, setLine] = useState('')
    const [commentNew, setCommentNew] = useState(text)
    const [markerChangeVisible, setMarkerChangeVisible] = useState(false)

    const cx = classNames.bind(s);

    const like = () => {
        setCounter(counter => counter + 1);
    }

    const dislike = () => {
        setCounter(counter => counter - 1);
    }

    const changeCommentShow  = () => {
        setMarkerChangeVisible(marker => !marker)
    }

    const changeComment = () =>  {
        setCommentNew(line)
        setMarkerChangeVisible(marker => !marker)
    }

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    return (
        <>
            <div className={s.display_comment}>
                <div className={s.comment_common}>
                    <div className={s.comment_name}>
                        {name}
                    </div>
                    <div className={s.comment_text}>
                        {commentNew}
                    </div>
                </div>
                <div className={s.comment_vote}>
                    <button className={s.comment_vote_like} onClick={like}/>
                    <div className={s.comment_vote_counter}>
                        {counter + likes}
                    </div>
                    <button className={s.comment_vote_dislike} onClick={dislike}/>
                </div>
                <div className={s.comment_date}>
                    {date}
                </div>
            </div>

            <button className={s.change_comment_button} 
                    onClick={() => changeCommentShow()}></button>
            
            <div className={cx("change_line", {change_line_hidden: !markerChangeVisible})}>
                <input
                        className={s.change_line}
                        value={line}
                        onChange={onChange}
                        placeholder={"Enter new comment..."}
                />
                <button onClick={changeComment} className={s.button}>
                    Change
                </button>
            </div>
        </>
    )
}