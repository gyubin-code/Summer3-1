import React, { useState } from "react";

import Counter from "../components/Counter";
//deconstruct
//pair , tuple
const CounterPage = () => {
    const [count/*value*/ , setCount/*method 다시 랜더하는것, 즉 새로은 count가들어온다*/ ]= useState(5);/*초기상태*/ //react hook
    return (
        <div>
          <Counter
            count ={count}
            onCounterClick = { ()=> setCount(count+1) }
            />
        </div>
    );
}
// g현실에서의 동작을 데이터화 하는것 , clickevent
// event driven architecture 
export default CounterPage;