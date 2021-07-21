import React from "react";

const Sample0 = ({
count,
onCounterClick,
onCounterClick1
}) =>
    <div>
        <p>count : {count}</p>
        <button onClick={onCounterClick}>like</button>
        <button onClick={onCounterClick1}>dislike</button>
        
    </div>;

export default Sample0;