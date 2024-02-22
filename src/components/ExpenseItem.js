

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle, IoIosRemoveCircle, IoIosCloseCircle } from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const {currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }




    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoIosAddCircle  color="green"size='2em' onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>
        <td><IoIosRemoveCircle color='red' size='2em' onClick={event=> decreaseAllocation(props.name)}></IoIosRemoveCircle></td>
        <td><IoIosCloseCircle color='gray' size='2em' onClick={handleDeleteExpense}></IoIosCloseCircle></td>

        </tr>
    );
};

export default ExpenseItem;