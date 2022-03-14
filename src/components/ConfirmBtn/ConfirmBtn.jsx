import React from 'react';
import style from './style.module.scss';
import { Input, Button } from 'antd';


const ConfirmBtn = (
    {   text,
        loading,
        className,
        onClick,
        ...props
    }
) => {
    return (
        <Button
            className={`${style['primary-button']} ${style['btn-glitch']} ${className ? className : ' '}`}
            loading={loading}
            onClick={onClick}
        >
            {text}
            {props.children}

        </Button>
    )

}

export default ConfirmBtn;

