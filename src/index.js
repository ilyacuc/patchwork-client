import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Player from './logic/Player';
import config from './config';
import Game from './logic/Game';

const game = new Game(config, [new Player('name1'), new Player('name2')]);

const makeMoveTile = (...props) => {
    game.makeMoveTile(...props);
    render({ ...game });
};
const makeMoveMoney = (...props) => {
    game.makeMoveMoney(...props);
    render({ ...game });
};
const render = (props) => {
    ReactDOM.render(
        <App
            {...props}
            makeMoveTile={makeMoveTile}
            makeMoveMoney={makeMoveMoney} />,
        document.getElementById('root'));
};

render({
    ...game,
});