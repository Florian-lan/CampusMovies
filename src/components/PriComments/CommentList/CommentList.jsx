
import React from 'react'
import {List, Comment} from 'antd'
import './style.scss'




 const CommentList = ({ comments }) => (

    // 渲染已发布的comments
    <List
        // comments 数组结构
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

export default CommentList;