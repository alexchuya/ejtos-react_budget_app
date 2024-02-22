
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const {currency,dispatch} = useContext(AppContext);


    console.log(currency,"currency")


    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };



     

    return (
        <div>
               <select className="custom-select" id="inputGroupSelect02" onChange={handleChange}>
        <option defaultValue value="Add" name="Add">Currency</option>
        <option value="$" name="dollar">$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€ " name="euro">€ Euro</option>
        <option value="₹" name="ruppee"> ₹ Ruppee</option>

        </select>

 
        </div>
    
     
    );
};

export default Currency;




