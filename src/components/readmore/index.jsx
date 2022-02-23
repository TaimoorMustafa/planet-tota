import React, { useState } from "react";
import useMediaQuery from 'react-hook-media-query';

function ReadMore(props) {
    const text = props.children;
    const [isReadMore, setIsReadMore] = useState(true);
    const media = useMediaQuery(`(max-width: ${props.query}px)`);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className={isReadMore ? 'para_in' : 'para_out'}>
            <p className={props.otherclass ? props.otherclass + ' readmore_para' : 'readmore_para'}>
                {media ?
                    <>
                        {isReadMore ? text.slice(0, 150) : text}
                        <button onClick={toggleReadMore} className="read-or-hide">
                            {isReadMore ? "...read more" : ".show less"}
                        </button>
                    </>
                    :
                    <>
                        {text}
                    </>
                }
            </p>
        </div>
    );
}

export default ReadMore;
