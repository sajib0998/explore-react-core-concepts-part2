import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd= () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount2 = count - 1;
        setCount(newCount2)
    }
    const handleAgain=()=>{
        const newCount3 = count + 2;
        setCount(newCount3)
    }
    const Dislike =()=>{
        const mainus = count - 2;
        setCount(mainus)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter:{count} </h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handleAgain}>Again</button>
        <button onClick={Dislike}>Dislike</button>
        </div>
    )
}