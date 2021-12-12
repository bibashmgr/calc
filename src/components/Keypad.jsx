import React from 'react';

// scss
import '../styles/Keypad.scss';

const Keypad = ({value, setValue}) => {

    const handleClick = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='keypad-container'>
            {/* first-row */}
            <input type='button' id='clear' className='operator' value='C' onClick={handleClick} />
            <input type='button' id='clearentry' className='operator' value='CE' onClick={handleClick} />
            <input type='button' id='backspace' className='operator' value='BS' onClick={handleClick} />
            <input type='button' id='divide' className='operator' value='/' onClick={handleClick} />
            {/* second-row */}
            <input type='button' id='seven' className='number' value='7' onClick={handleClick} />
            <input type='button' id='eight' className='number' value='8' onClick={handleClick} />
            <input type='button' id='nine' className='number' value='9' onClick={handleClick} />
            <input type='button' id='multiply' className='operator' value='*' onClick={handleClick} />
            {/* third-row */}
            <input type='button' id='four' className='number' value='4' onClick={handleClick} />
            <input type='button' id='five' className='number' value='5' onClick={handleClick} />
            <input type='button' id='six' className='number' value='6' onClick={handleClick} />
            <input type='button' id='subtract' className='operator' value='-' onClick={handleClick} />
            {/* fourth-row */}
            <input type='button' id='one' className='number' value='1' onClick={handleClick} />
            <input type='button' id='two' className='number' value='2' onClick={handleClick} />
            <input type='button' id='three' className='number' value='3' onClick={handleClick} />
            <input type='button' id='add' className='operator' value='+' onClick={handleClick} />
            {/* fifth-row */}
            <input type='button' id='blank' className='operator' value='' onClick={handleClick} disabled />
            <input type='button' id='zero' className='operator' value='0' onClick={handleClick} />
            <input type='button' id='dot' className='operator' value='.' onClick={handleClick} />
            <input type='button' id='equal' className='operator' value='=' onClick={handleClick} />
        </div>
    )
}

export default Keypad
