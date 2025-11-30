import { createStore, SetStoreFunction } from 'solid-js/store';

type State = {
    sound: string;
    image1: string;
    image2: string;
};

type Round = {
    answer: number;
    sound: string;
    image1: string;
    image2: string;
};

export default class Game {
    numGood: number;
    numBad: number;
    rounds: Round[];
    state: State;
    setState: SetStoreFunction<State>;

    constructor() {
        this.numGood = 0;
        this.numBad = 0;
        this.rounds = [
            {
                answer: 1,
                sound: "/sounds/飴/1.mp3",
                image1: "/images/飴.png",
                image2: "/images/雨.png",
            },
            {
                answer: 2,
                sound: "/sounds/飴/3.mp3",
                image1: "/images/雨.png",
                image2: "/images/飴.png",
            }
        ];
        const firstRound = this.rounds[0];
        const [state, setState] = createStore<State>({
            sound: firstRound.sound,
            image1: firstRound.image1,
            image2: firstRound.image2,
        });
        this.state = state;
        this.setState = setState;
    }

    choose(answer: number): boolean {
        const i = this.numGood + this.numBad;
        const currentRound = this.rounds[i];
        const nextRound = this.rounds[i+1];
        if (currentRound.answer == answer) {
            this.numGood++;
            this.setState(nextRound);
            return true;
        } else {
            this.numBad++;
            this.setState(nextRound);
            return false;
        }
    }

    get sound(): string {
        return this.state.sound;
    }

    get image1(): string {
        return this.state.image1;
    }

    get image2(): string {
        return this.state.image2;
    }
}
