import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBlur } from '../features/photo';
import './Page.css';

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

const Page = () => {
  const dispatch = useDispatch();
  const { blurNum } = useSelector((state) => state.photo);

  return (
    <div className="container">
      <div className="image-container">
        <img
          src={BASE_IMG_URL}
          alt="Random"
          style={{
            filter: `blur(${blurNum}px)`
          }}
        />
      </div>

      
      <div className="slider-container">
        <label htmlFor="blur-range" className="slider-label">
          Blur için kaydır
        </label>
        <input
          type="range"
          max="10" 
          value={blurNum}
          onChange={(e) => dispatch(changeBlur(e.target.value))}
          className="slider"
        />
      </div>
    </div>
  );
};

export default Page;
