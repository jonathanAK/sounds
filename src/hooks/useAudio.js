import React, { useState, useEffect } from "react";

export const useAudio = (url,{playbackRate= 1} ={}) => {
    const [audio] = useState(new Audio(url));
    audio.playbackRate = playbackRate;

    const play = () => {
        document.dispatchEvent(new Event('stop audio'));
        audio.play();
    }

    const stop = () => {
        audio.pause();
        audio.currentTime = 0;
    }

    useEffect(() => {
        document.addEventListener('stop audio', stop);
        audio.addEventListener('ended', stop);
        return () => {
            audio.removeEventListener('ended', stop);
        };
    }, []);

    useEffect(()=> {
        audio.playbackRate = playbackRate;
    }, [playbackRate])

    return [play, stop];
};