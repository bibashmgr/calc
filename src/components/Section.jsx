import React from 'react';

//scss
import '../styles/Section.scss';

// components
import Main from './Main';
import History from './History';

const Section = () => {
    return (
        <section className='section-container'>
            <Main />
            <History />
        </section>
    )
}

export default Section
