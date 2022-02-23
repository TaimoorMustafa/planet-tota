import React, { useState } from 'react';

function ProgressiveLoader(props) {
    const [isLoading, setisLoading] = useState(true);
    return (
        <>
            {isLoading ?
                <img
                    src={props.placeholder}
                    className={props.otherClass ? props.otherClass + ' img_fluid load_placeholder' : 'img_fluid load_placeholder'}
                    alt='' />
                :
                null
            }
            <img
                src={props.url}
                className={isLoading ? 'display_none' : props.otherClass ? props.otherClass + ' img_fluid ' : 'img_fluid '}
                onLoad={() => setisLoading(false)}
                alt={props.alt ? props.alt : ''} />
        </>
    );
}

export default ProgressiveLoader;