import { useState } from 'react';
import '../App.css';

function Button(props) {

    const [num, setnum] = useState("")//this num will have the current operad to compare it with decimal  

    const evaluate = () => { //function to evaluate the operation
        props.setvalue(props.value.replace("=", ""))//replacing = with blank to ensure proper operation
        const ans = eval(props.value);
        props.setvalue(ans)
        setnum(ans.toString())//so that user cannot input a point again in the answer if it is already in point 
    }

    const handleOper = (e) => {//function to handle all the operations
        const operations = ['+', '*', '/', '-'];
        const last_operation = props.value.charAt(props.value.length - 1);//getting last operation used 
        if (operations.includes(last_operation))//if there is already an operand then replace last operation with new one
            props.setvalue(props.value.slice(0, -1) + e.target.innerHTML);
        else //else simply set the value
            props.setvalue(props.value + e.target.innerHTML)
        setnum("")//again setting is to null so that it can again compare the number 
        // setoper(e.target.innerHTML)
    }

    const handleDecimal = (e) => { //function to handle decimal and percentage
        const value = e.target.innerHTML;

        if (value == "." && num.includes('.')) {//if user specified to put decimal but it is already there
            //set decimal only 1 time
            setnum(props.value)
            props.setvalue(props.value)
        }
        else if (value == "%") {//if percentage is there then simply add /100 
            console.log(parseFloat(num) / 100)
            setnum(parseFloat(num) / 100)//setting it to actual value so that /100 will not be modified by .
            props.setvalue(props.value + "/100+")//as percentage is /100 
        }
        else {
            setnum(props.value + ".");
            props.setvalue(props.value + ".")
        }
    }

    const handleNumber = (e) => {
        props.setvalue(props.value + e.target.innerHTML);
        setnum(num + e.target.innerHTML);//setting num so that we have track of current digit
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><button className='calButton' onClick={() => { props.setvalue("") }} >C</button></td>
                        <td><button className='calButton' onClick={
                            () => {
                                props.value > 0 ?
                                    props.setvalue("-" + props.value) :
                                    props.setvalue(props.value.replace("-", ""))
                            }
                        }>+/-</button></td>
                        <td><button className='calButton' onClick={handleDecimal}>%</button></td>
                        <td><button className='operButton' onClick={handleOper}>/</button></td>
                    </tr>
                    <tr>
                        <td><button className='calButton' onClick={handleNumber}>7</button></td>
                        <td><button className='calButton' onClick={handleNumber}>8</button></td>
                        <td><button className='calButton' onClick={handleNumber}>9</button></td>
                        <td><button className='operButton' onClick={handleOper} >*</button></td>
                    </tr>
                    <tr>
                        <td><button className='calButton' onClick={handleNumber}>4</button></td>
                        <td><button className='calButton' onClick={handleNumber}>5</button></td>
                        <td><button className='calButton' onClick={handleNumber}>6</button></td>
                        <td><button className='operButton' onClick={handleOper} >-</button></td>
                    </tr>
                    <tr>
                        <td><button className='calButton' onClick={handleNumber}>1</button></td>
                        <td><button className='calButton' onClick={handleNumber}>2</button></td>
                        <td><button className='calButton' onClick={handleNumber}>3</button></td>
                        <td><button className='operButton' onClick={handleOper} >+</button></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button className='calButton' onClick={handleNumber} style={{ padding: "50px 105px" }}>0</button></td>
                        <td><button className='calButton' onClick={handleDecimal}>.</button></td>
                        <td><button className='operButton' onClick={evaluate}>=</button></td>

                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Button;
