/* eslint-disable */

import React , { useContext , useState } from 'react';
import { CountContext } from "./Context";

function ContextApi() {
    const [count , setCount] = useState(0);


    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </div>
    )
};


function Count() {
    return (
        <div>
            <CounterReader />
            <Button/>
        </div>
    )
};


function CounterReader() {
    const { count } = useContext(CountContext);

    return (
        <div>
            {count}
        </div>
    )
}

function Button() {
    const {count , setCount } = useContext(CountContext);

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}> Increase </button>

            <button onClick={() => {
                setCount(count - 1);
            }}> Decrease </button>
        </div>
    )
}

export default ContextApi;