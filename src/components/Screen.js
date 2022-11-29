import { useState } from 'react';
import '../App.css';
import Button from './Button';

function Screen() {
    //use sate for screen value 
    const [value, setvalue] = useState("");

    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="4">
                            <div id="values">
                                {value}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button setvalue={setvalue} value={value} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >

    );
}

export default Screen;
