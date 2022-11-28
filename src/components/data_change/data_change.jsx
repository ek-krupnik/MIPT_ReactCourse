import React, {useState} from 'react'
import {Comment} from "../comment/comment"
import s from "./data_change.module.scss"
import classNames from 'classnames/bind'
import { CommentLine } from '../creating_comment_line/creating_comment_line'
import { DisplayComment } from '../display_comments/display_comments'

export function DataChanges({id, commentsNum}) {

    const [counter, setCounter] = useState(commentsNum)
    const [arr, setArr] = useState([])
    const [line, setLine] = useState('')
    const [markerComment, setMarkerComment] = useState(true)

    const cx = classNames.bind(s);

    const name_style = markerComment ? "hidden" : "visible"
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
                <div className={s.comment_image}></div>
                <div className={s.comment_counter}>
                    {counter}
                </div>
                <button className={s.show_comment} onClick={showComment}>
                    {buttonText}
                </button>
            </div>

            <div className={s.common_comments}>
                <div className={cx([`comments_list_${name_style}`])}>
                    {arr.map(item => (<DisplayComment commentId={-1}
                                                      articleId={id}
                                                      text={item}
                                                      name={'Anonimus'}
                                                      visibility={!markerComment}/>))}
                    
                    <Comment articleId={id} visibility={!markerComment}/>
                </div>

                <div className={cx([`comment_line_${name_style}`])}>
                    <CommentLine data={line} onChange={onChange} />
                    <button onClick={pushLine} className={s.button}>
                        Leave comment
                    </button>
                </div>
            </div>
        </>
    )
}