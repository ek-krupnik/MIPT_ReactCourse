import React, {useState, useEffect} from 'react'
import {Comment} from "../comment/comment"
import s from "./data_change.module.scss"
import classNames from 'classnames/bind'
import { CommentLine } from '../creating_comment_line/creating_comment_line'
import { DisplayComment } from '../display_comments/display_comments'
import { NotReadyData } from '../not_ready_data/not_ready_data'
import { getComments } from '../../assets/pathces/get_comments'

export function DataChanges({id, commentsNum}) {

    const [counter, setCounter] = useState(commentsNum)
    const [line, setLine] = useState('')
    const [data, setData] = useState([])
    const [markerComment, setMarkerComment] = useState(true)
    const [currentID, setCurrentId] = useState(0)

    const [commentsVisability, setCommentsVisability] = useState({})

    const cx = classNames.bind(s);

    const name_style = markerComment ? "hidden" : "visible"
    const buttonText = markerComment ? "ShowComments" : "HideComments"

    useEffect(() => {
        getComments(id).then(fetchedData => setData(fetchedData))
    }, [])

    const hideComment = () => {
        setCommentsVisability(data => ({...data, [currentID]: true}))
    }

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const calculateVisability = (id) => {
        setCurrentId(id);
        return commentsVisability[id] && markerComment;
    }

    const pushLine = () => {
        setData([...data, {commentId: -1, text: line, author: 'Anonimus', date: '12.12.1222'}])
        setCounter(counter => counter + 1)
    }

    const showComment = () => {
        setMarkerComment(marker => !marker)
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
                    <>
                    {
                        (data.length > 0)
                        ? data.map(item => 
                                        <div className={cx('common_comment_line', {common_comment_line_hidden: calculateVisability(item.id)})}>
                                            {/* <button className={s.delete_comment_button} onClick={hideComment}></button> */}
                                            <DisplayComment commentId={item.articleId}
                                                            articleId={id}
                                                            text={item.text}
                                                            name={item.author}
                                                            date={item.date}/>
                                        </div>)
                        : <NotReadyData/>
                    }
                    </>
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