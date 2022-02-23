import React, { useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

function DropDown(props) {
    const { options, icon, onOptionClicked, selectedOption, dropref } = props;

    const toggling = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);

    const clicked = value => {
        onOptionClicked(value);
        setIsOpen(false);
    }

    useOutsideClick(dropref, () => {
        if (isOpen !== false) {
            setIsOpen(false);
        }
    })

    return (
        <div className="dropdown_container" ref={dropref}>
            <div className='dropdown_header' onClick={toggling}>
                {icon &&
                    <div className="common_icon_st">
                        <img src={icon} className="img_fluid" alt="" />
                    </div>
                }
                <h5>{selectedOption || "CHOOSE THE LANGUAGE"}</h5>
                <span>&#x25bc;</span>
            </div>
            {isOpen && (
                <div className="list_container">
                    <ul className="dropdown_list">
                        {options.map(option => (
                            <li onClick={() => clicked(option)} key={Math.random()}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;