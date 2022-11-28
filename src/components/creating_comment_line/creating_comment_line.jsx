import React, {useState} from 'react'
import s from './creating_comment_line.module.css'
export const CommentLine = ({data, onChange}) => (

    <input
        className={s.comment_line}
        value={data}
        onChange={onChange}
        placeholder={"Enter something..."}
    />
)