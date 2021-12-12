import React from 'react';

//scss
import '../styles/Main.scss';

// components
import Screen from './Screen';
import Keypad from './Keypad';

const Main = () => {
    return (
        <section className='main-container'>
            <div className='calc-container'>
                <Screen />
                <Keypad />
            </div>
        </section>
    )
}

export default Main
