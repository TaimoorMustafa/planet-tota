import React, { useState } from 'react';
import {
    loader,
} from '../../assets/images';


function Loader(props) {
    const [isLoading, setisLoading] = useState(true);
    return (
        <>
            {
                isLoading ?
                    <div className='Loader'>
                        <img src={loader} className='img_fluid' alt='Loader' />
                    </div>
                    :
                    ''
            }
            <img
                src={props.src}
                style={isLoading ? { display: 'none' } : { display: 'inline-block' }}
                alt={props.alt ? '' : ''}
                onLoad={() => setisLoading(false)}
                className={props.class ? ' img_fluid' : 'img_fluid'} />
        </>
    );
}

export default Loader;