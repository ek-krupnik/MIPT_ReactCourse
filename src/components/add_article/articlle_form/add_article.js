import React, {useState} from 'react'
import s from './add_article.module.css'
export const ArticleForm = ({data, onChange}) => (
    <input
        className={s.comment_line}
        value={data}
        onChange={onChange}
        placeholder={"Enter something..."}
    />
)