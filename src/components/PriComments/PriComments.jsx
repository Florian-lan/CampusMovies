import React, { useState } from 'react'
import './style.scss'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import moment from 'moment'
import CommentList from './CommentList/CommentList'
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn'



const PriComments = () => {

    const test = [
        {
            author: "test",
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>hhhhhhhh</p>,
            datetime: moment().fromNow(),

        },
        {
            author: "test",
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>我是你爹</p>,
            datetime: moment().fromNow(),
        }

    ]


    const [comments, setComments] = useState(test);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");



    // 更新输入框value
    const handleChange = (e) => {
        // console.log(value);
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        console.log("submit");
        // 值为空，提交没啥用
        if (!value) {
            return
        }

        setSubmitting(true);
        const timer = setTimeout(() => {
            setSubmitting(false);
            setValue("");
            const temp = [
                ...comments,
                {
                    author: "test",
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: <p>{value}</p>,
                    datetime: moment().fromNow(),
                },

            ]
            setComments(temp);
            clearTimeout(timer);

        }, 1000)

    }

    const { TextArea } = Input;



    return (
        <>
            {/* 判断有无已发布的comments，有则渲染 */}
            {comments.length > 0 && <CommentList comments={comments} />}

            <Comment

                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <>
                        <Form.Item>
                            <TextArea rows={4} onChange={handleChange} value={value} />
                        </Form.Item>

                        <Form.Item>
                            <ConfirmBtn
                                htmlType={"submit"}
                                loading={submitting}
                                onClick={handleSubmit}
                                text={"发布"}

                            />



                        </Form.Item>
                    </>

                }
            />
        </>
    )
}

export default PriComments;
