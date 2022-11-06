import React, {useState} from 'react'
import s from './comment.module.css'

export const Comment = ({data, onChange}) => (
    
    <input
        className={s.comment_line}
        value={data}
        onChange={onChange}
        placeholder={"Enter something..."}
    />

    // componentDidMount() {
    // }

    // componentWillUnmount()  {
    // }

    // render() {
    // }
)
