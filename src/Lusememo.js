import React, { useMemo, useState } from "react";

function Lusememo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multiCountMemo = useMemo(
        function multiCount() {
            console.log('multiCount')
            return count * 5
        }, [count]
    )

    return (
        <>
            <h2>Count is : {count}</h2>
            <h2>Item is : {item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </>
    )
}

export default Lusememo;