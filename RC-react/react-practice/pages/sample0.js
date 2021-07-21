import React, { useState } from "react";

import Sample0 from "../components/Sample0";

const friends = ["Name : lkanny", "Age: Jimmy", "major: computerscience"];

const sample0page = () => {
const [count/*value*/ , setCount/*method 다시 랜더하는것, 즉 새로은 count가들어온다*/ ]= useState(5);/*초기상태*/ //react hook
const[good,setGood]=useState(false);
return (
    <div>
        {friends.map((friends,i)=> 
        <p key={i}>{friends}</p>)}
        
   
        <Sample0
            count ={count}
            onCounterClick = { ()=> setCount(count+1) }
            onCounterClick1 = { ()=>{
                if(count==0){
                    return ;
                }
                else{setCount(count-1)}
                }  }
        />
        <button onClick={()=> setGood(!good) }>{good ? "good":"bad"}</button>

        </div>
    
    );
};
// map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다

export default sample0page;


