import React from "react";
import "./style.scss";
import { Carousel, Image } from "antd";

const Banner = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel effect="fade" autoplay>
            <Image src="image/slides/slide1.jpeg" />
            <Image src="image/slides/slide2.jpeg" />
            <Image src="image/slides/slide3.jpeg" />
            <Image src="image/slides/slide4.jpeg" />

        </Carousel>

    )
}

export default Banner;