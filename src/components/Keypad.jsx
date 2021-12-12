import React from 'react';

// scss
import '../styles/Keypad.scss';

// data:characters
import {characters} from './characters';

const Keypad = () => {
    return (
        <div className='keypad-container'>
            {
                characters.map((character) => {
                    return (
                        <div key={character.sn} id={character.id} className={character.type}>
                            {character.value}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Keypad
