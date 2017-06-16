import React from 'react';
import Img from './Img';

const ImgList = props => { 

  const results = props.data;
  let imgs = results.map(img => {
    console.log(img);
    <Img url={imgs.urls.thumb} />

  })
  
  return(
    <ul className="img-list">
      {imgs}
    </ul> 
  );
}

export default ImgList;
