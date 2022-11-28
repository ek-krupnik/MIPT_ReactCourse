import React, {useState, useEffect} from 'react'
import s from './article.module.scss'

import { Post } from '../post/post'
import { NotReadyData } from '../not_ready_data/not_ready_data'
import { getArticles } from '../../assets/pathces/get_article'

export function Articles() {

    const [data, setData] = useState(null)

    useEffect(() => {
        getArticles().then(fetchedData => setData(fetchedData))
    }, [])

    return data
           ? data.map(item => <Post title={item.title}
                                    description={item.text}
                                    likes={item.currentLikes}
                                    imageUrl={item.image}
                                    comments={item.commentsCount}
                                    id={item.articleId}/>)
           : <NotReadyData/>

}
