import { Component } from 'solid-js';

type SoundProps = {
    src: string;
}

const Sound: Component<SoundProps> = (props) => {
    let audioRef: HTMLAudioElement | undefined;

    const play = () => {
        if (!audioRef) return;
        audioRef.currentTime = 0;
        audioRef.play();
    };

    return (
        <div>
            <audio
                ref={audioRef}
                src={props.src}
                />
            <button onClick={play}>
                <img src="/icons/play-button.png" style={{
                    width: "64px",
                    height: "64px",
                    margin: "8px",
                }} />
            </button>
        </div>
    );
}

export default Sound;
