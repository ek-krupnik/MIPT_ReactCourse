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
    const [maxCounter, setMaxCounter] = useState(commentsNum)

    const [line, setLine] = useState('')
    const [data, setData] = useState([])
    const [markerComment, setMarkerComment] = useState(false)

    const [commentsVisability, setCommentsVisability] = useState({})
    // const [commentChanging, setCommentChanging] = useState({})

    const cx = classNames.bind(s);

    const name_style = !markerComment ? "hidden" : "visible"
    const buttonText = !markerComment ? "ShowComments" : "HideComments"

    useEffect(() => {
        getComments(id).then(fetchedData => setData(fetchedData))
    }, [])

    const hideComment = (itemID) => {
        setCommentsVisability(data => ({...data, [itemID]: true}))
        setCounter(counter => counter - 1)
    }

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const calculateVisability = (itemID) => {
        if (itemID in commentsVisability) {
            return false
        }
        return markerComment
    }

    const pushLine = () => {
        setData([...data, {id: maxCounter + 1, text: line, author: 'Anonimus', date: '12.12.1222', likes: 0}])
        setCounter(counter => counter + 1)
        setMaxCounter(counter => counter + 1)
    }

    const showComment = () => {
        setMarkerComment(marker => !marker)
    }

    const sortLikes = () => {
        const keyMap = data.map(
            (comment) => {return [comment.likes, comment]}
        )

        keyMap.sort(
            (first, second) => {return first[0] - second[0]}
        )

        setData(keyMap.map(item => item[1]))
    }

    const sortDate = () => {
        const keyMap = data.map(
            (comment) => {return [comment.date, comment]}
        )

        keyMap.sort(
            (first, second) => {return new Date(first[0]) - new Date(second[0])}
        )

        setData(keyMap.map(item => item[1]))
    }

    // const calculateChangeVisability = (itemID) => {
    //     return !(itemID in commentChanging)
    // }

    // const changeCommentShow  = (itemID) => {
    //     if (itemID in commentChanging) {
    //         setCommentChanging(data => ({...data, [itemID]: false}))
    //         return
    //     }
    //     setCommentChanging(data => ({...data, [itemID]: true}))
    // }

    // const changeComment = () =>  {
        
    // }

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

            <div className={cx('sort_button_common', 
                               {sort_button_common_hidden: !markerComment})}>
                <button className={s.sort_button} onClick={sortLikes}/>
                <button className={s.sort_button} onClick={sortDate}/>
            </div>

            <div className={s.common_comments}>
                <div className={cx([`comments_list_${name_style}`])}>
                    <>
                    {
                        (data.length > 0)
                        ? data.map(item => 
                                        <div className={cx('common_comment_line', 
                                                           {common_comment_line_hidden: !calculateVisability(item.id)})}>

                                            <button className={s.delete_comment_button} 
                                                    onClick={() => hideComment(item.id)}></button>

                                            <DisplayComment commentId={item.articleId}
                                                            articleId={id}
                                                            text={item.text}
                                                            name={item.author}
                                                            date={item.date}
                                                            likes={item.likes}/>
                                            
                                            {/* <button className={s.change_comment_button} 
                                                    onClick={() => changeCommentShow(item.id)}></button>
                                            
                                            <div className={cx("change_line", {change_line_hidden: !calculateChangeVisability(item.id)})}>
                                                <input
                                                        className={s.change_line}
                                                        value={line}
                                                        onChange={onChange}
                                                        placeholder={"Enter new comment..."}
                                                />
                                                <button onClick={changeComment} className={s.button}>
                                                    Change
                                                </button>
                                            </div> */}
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