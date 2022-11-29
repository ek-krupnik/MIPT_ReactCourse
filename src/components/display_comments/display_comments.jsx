import React, {useState} from 'react'
import s from "./display_comments.module.scss"
import classNames from 'classnames/bind'

export function DisplayComment({commentId, articleId, text, name, date, likes}) {
    
    const [counter, setCounter] = useState(0);

    const cx = classNames.bind(s);

    const like = () => {
        setCounter(counter => counter + 1);
    }

    const dislike = () => {
        setCounter(counter => counter - 1);
    }

    return (
        <>
            <div className={s.display_comment}>
                <div className={s.comment_common}>
                    <div className={s.comment_name}>
                        {name}
                    </div>
                    <div className={s.comment_text}>
                        {text}
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
        </>
    )
}