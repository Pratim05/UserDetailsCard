import React from 'react';
import './allcss.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../imgs/carousel1.jpg'
import img2 from '../imgs/carousel2.jpg'
import img3 from '../imgs/carousel3.jpg'
import img4 from '../imgs/carousel4.png'



import './allcss.css'

const items = [
    <div className="item" data-value="1"><img className='carosol_img' src={img1}/></div>,
    <div className="item" data-value="2"><img className='carosol_img' src={img2}/></div>,
    <div className="item" data-value="3"><img className='carosol_img' src={img3}/></div>,
    <div className="item" data-value="4"><img className='carosol_img' src={img4}/></div>,
   
];

const Home = () => (
    <AliceCarousel
    autoPlay
        animationType="fadeout" 
        animationDuration={3000}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
    />
);

export default Home