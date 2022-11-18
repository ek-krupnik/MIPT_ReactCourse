import React, {useState, useEffect} from 'react'
import s from './comment.module.scss'
import { DisplayComment } from '../display_comments/display_comments'
import { NotReadyData } from '../not_ready_data/not_ready_data'
import { getComments } from '../../assets/pathces/get_comments'

export function Comment({articleId, visibility}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        getComments(articleId).then(fetchedData => setData(fetchedData))
    }, [])

    return data
           ? data.map(item => <DisplayComment commentId={item.articleId}
                                              articleId={articleId}
                                              text={item.text}
                                              name={item.author}
                                              visibility={visibility}/>)
           : <NotReadyData/>

}


// should be enywhere else but...
