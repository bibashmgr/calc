import React from 'react';

//scss
import '../styles/Main.scss';

// components
import Screen from './Screen';
import Keypad from './Keypad';

const Main = () => {
    return (
        <div className='main-container'>
            <Screen />
            <Keypad />
        </div>
    )
}

export default Main
