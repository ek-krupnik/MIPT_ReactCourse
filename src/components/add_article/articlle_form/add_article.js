import React, {useState} from 'react'
import s from './add_article.module.css'
export const ArticleForm = ({data, onChange, placeholder}) => (
    <input
        className={s.article_input}
        value={data}
        onChange={onChange}
        placeholder={placeholder}
    />
)