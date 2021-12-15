import React from 'react';
import { useState } from 'react';

//scss
import '../styles/Main.scss';

let result = '';
let history = '';

const Main = () => {

    const [output, setOutput] = useState('');

    const handleClick = (e) => {
        result = result + e.target.value;
        setOutput(result);
    }
    
    const handleAllClear = () => {
        result = '';
        history = '';
        setOutput(result);
    }
    
    const handleBackspace = () => {
        try {
            result = result.slice(0, -1);
            setOutput(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleCalculate = () => {
        history = result + '=';
        result = Function("return " + result)();
        setOutput(result);
    }

    return (
        <section className='main-container'>

            <div className='screen-container'>
                <div className='history'>
                    {history}
                </div>
                <div className='output'>
                    {output}
                </div>
            </div>

            <div className='keypad-container'>
                {/* first-row */}
                <input type='button' id='allclear' className='allclear' value='AC' onClick={handleAllClear} />
                <input type='button' id='backspace' className='backspace' value='clear' onClick={handleBackspace} />
                <input type='button' id='' className='' value='' onClick={handleClick} />
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
                <input type='button' id='blank' className='blank' value='' />
                <input type='button' id='zero' className='number' value='0' onClick={handleClick} />
                <input type='button' id='dot' className='number' value='.' onClick={handleClick} />
                <input type='button' id='equal' className='equal' value='=' onClick={handleCalculate} />
            </div>

        </section>
    )
}

export default Main
