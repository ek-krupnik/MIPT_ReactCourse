import React, {useState} from 'react'
import s from "./display_comments.module.scss"
import classNames from 'classnames/bind'

export function DisplayComment({commentId, articleId, text, name, date}) {
    
    const cx = classNames.bind(s);

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
                <div className={s.comment_date}>
                    {date}
                </div>
            </div>
        </>
    )
}