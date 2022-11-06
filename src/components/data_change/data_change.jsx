import React, {useState} from 'react'
import {Comment} from "../comment/comment"
import s from "./data_change.module.css"
import comments_json from "../../assets/data/comments.json"
import {DisplayComment} from "../display_comments/display_comments"

export function DataChanges({visibility, id, commentsNum}) {

    const [counter, setCounter] = useState(commentsNum)
    const [arr, setArr] = useState([])
    const [line, setLine] = useState('')

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const pushLine = () => {
        setArr([...arr, line])
        setCounter((counter) => {return counter + 1})
    }

    return (
        <>
            <div className={s.common_comments}>
                <div className={s.comments_list} style={{display : visibility}}>
                    {comments_json.map(item => (id===item.articleId ? 
                                                <DisplayComment commentId={item.articleId}
                                                                articleId={id}
                                                                text={item.text}
                                                                name={item.author}
                                                                visibility={visibility}/> : <></>))}
                </div>
                {/* <div className={s.comments_number}>
                    {counter}
                </div> */}
                
                    <div className={s.comment_line} style={{display : visibility}}>
                        <Comment
                            data={line}
                            onChange={onChange}
                        />
                        <button onClick={pushLine} className={s.button}>
                            Leave comment
                        </button>
                    </div>
            </div>
        </>
    )
}