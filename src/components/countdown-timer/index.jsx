import React, { useEffect, useState } from 'react';

function CountDownTimer(props) {
    const calculateTimeLeft = () => {
        let difference = +new Date(props.countdown) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });


    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <p key={interval}>
                <span>{timeLeft[interval]}</span><span>{interval}</span>
            </p>
        );
    });


    return (
        <>
            {timerComponents.length ? timerComponents : props.checkFinished ? props.checkFinished(true) : <span>Timer Finished!</span>}
        </>
    );
}




export default CountDownTimer;