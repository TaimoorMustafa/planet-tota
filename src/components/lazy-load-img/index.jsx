import React, { useState } from 'react';

function LazyLoadImg(props) {
    const [isLoading, setisLoading] = useState(true);
    return (
        <img
            src={props.url}
            className={isLoading ? props.otherClass ? props.otherClass + ' blur_img img_fluid ' : 'blur_img img_fluid ' : props.otherClass ? props.otherClass + ' img_fluid' : 'img_fluid'}
            onLoad={() => setisLoading(false)}
            alt={props.alt} />
    );
}

export default LazyLoadImg;