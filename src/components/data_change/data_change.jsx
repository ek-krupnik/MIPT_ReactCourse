import React, {useState} from 'react'
import {Comment} from "../comment/comment"
import s from "./data_change.module.css"
import { CommentLine } from '../creating_comment_line/creating_comment_line'
import { DisplayComment } from '../display_comments/display_comments'

export function DataChanges({id, commentsNum}) {

    const [counter, setCounter] = useState(commentsNum)
    const [arr, setArr] = useState([])
    const [line, setLine] = useState('')
    const [markerComment, setMarkerComment] = useState(false)

    const visibility = markerComment ? "none" : "flex"
    const buttonText = markerComment ? "ShowComments" : "HideComments"

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const pushLine = () => {
        setArr([...arr, line])
        setCounter((counter) => {return counter + 1})
    }

    const showComment = () => {
        setMarkerComment((marker) => {return !marker})
    }

    return (
        <>
            <div className={s.comments_buttons}>
                <div className={s.comment}></div>
                <div className={s.comment_counter}>
                    {counter}
                </div>
                <button className={s.show_comment} onClick={showComment}>
                    {buttonText}
                </button>
            </div>

            <div className={s.common_comments}>
                <div className={s.comments_list} style={{display : visibility}}>
                    {arr.map(item => (<DisplayComment commentId={-1}
                                                      articleId={id}
                                                      text={item}
                                                      name={'Anonimus'}
                                                      visibility={visibility}/>))}
                    
                    <Comment articleId={id} visibility={visibility}/>

                    {/* {comments_json.map(item => (id===item.articleId ? 
                                                <Comment commentId={item.articleId}
                                                         articleId={id}
                                                         text={item.text}
                                                         name={item.author}
                                                         visibility={visibility}/> : <></>))} */}
                </div>

                <div className={s.comment_line} style={{display : visibility}}>
                    <CommentLine data={line} onChange={onChange} />
                    <button onClick={pushLine} className={s.button}>
                        Leave comment
                    </button>
                </div>
            </div>
        </>
    )
}