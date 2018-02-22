import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Player from './logic/Player';
import config from './config';
import Game from './logic/Game';

const render = (props) => {
    ReactDOM.render(<App {...props} />, document.getElementById('root'));
};
const init = () => {
    const game = new Game(config, [new Player('name1'), new Player('name2')]);
    console.log(game);
    render({
        ...game
    });

};
init();