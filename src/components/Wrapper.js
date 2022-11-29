import { useState } from 'react';

import '../App.css';
import Button from './Button';
import Screen from './Screen';

function Wrapper() {

    return (
        <div className="App">
            <div className='container'>
                <Screen />
            </div>
        </div>
    );
}

export default Wrapper;
