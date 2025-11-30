import type { Component } from 'solid-js';
import Game from './Game';
import Picto from './Picto';
import Sound from './Sound';

const App: Component = () => {
    const game = new Game;

    const choose1 = () => {
        if (game.choose(1)) {
            console.log("gagné");
        } else {
            console.log("perdu");
        }
    };

    const choose2 = () => {
        if (game.choose(2)) {
            console.log("gagné");
        } else {
            console.log("perdu");
        }
    };

    return (
        <>
            <Sound src={game.sound} />
            <Picto src={game.image1} onClick={choose1} />
            <Picto src={game.image2} onClick={choose2} />
        </>
    );
};

export default App;
