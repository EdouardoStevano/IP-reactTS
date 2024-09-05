import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

function App() {
    const [duration, setDuration] = useState(moment.duration(0));
    const [isActive, setIsActive] = useState(false);
    const [startTime, setStartTime] = useState<Moment | null>(null); // Définit startTime comme Moment ou null

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (isActive && startTime) {
            interval = setInterval(() => {
                const now = moment();
                const diff = moment.duration(now.diff(startTime));
                setDuration(diff);
            }, 1000);
        } else if (!isActive && interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval); // Nettoie l'intervalle quand le composant se démonte
        };
    }, [isActive, startTime]);

    const handleStart = () => {
        setIsActive(true);
        setStartTime(moment()); // Définit startTime avec l'objet Moment
    };

    const handleStop = () => {
        setIsActive(false);
    };

    return (
        <div className="container lg:w-44 bg-slate-300">
            <header className="b">
                <button onClick={handleStart} disabled={isActive}>
                    Start
                </button>
                <button onClick={handleStop} disabled={!isActive}>
                    Stop
                </button>
                <h1>Counter Up</h1>

                <p>
                    {duration.hours()}h : {duration.minutes()}m :{' '}
                    {duration.seconds()}s
                </p>

                <div className="chat-notification">
                    <div className="chat-notification-logo-wrapper">
                        <img
                            className="chat-notification-logo"
                            src="/img/logo.svg"
                            alt="ChitChat Logo"
                        />
                    </div>

                    <div className="chat-notification-content">
                        <h4 className="chat-notification-title">ChitChat</h4>
                        <p className="chat-notification-message">
                            You have a new message!
                        </p>
                    </div>
                </div>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
