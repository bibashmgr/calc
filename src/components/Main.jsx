import React from 'react';

//scss
import '../styles/Main.scss';

// components
import Screen from './Screen';
import Keypad from './Keypad';

const Main = ({value, setValue}) => {
    return (
        <section className='main-container'>
            <Screen />
            <Keypad value={value} setValue={setValue} />
        </section>
    )
}

export default Main
