import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../imgs/slider img.jpg'
import img2 from '../imgs/slider img 2 .jpg'
import img3 from '../imgs/slider img.jpg'
import img4 from '../imgs/slider img 2 .jpg'
import img5 from '../imgs/slider img.jpg'


import './allcss.css'

const items = [
    <div className="item" data-value="1"><img src={img1}/></div>,
    <div className="item" data-value="2"><img src={img2}/></div>,
    <div className="item" data-value="3"><img src={img3}/></div>,
    <div className="item" data-value="4"><img src={img4}/></div>,
    <div className="item" data-value="5"><img src={img5}/></div>,
];

const Home = () => (
    <AliceCarousel
    autoPlay
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
    />
);

export default Home