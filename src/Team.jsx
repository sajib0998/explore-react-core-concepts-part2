import { useState } from "react"

export default function Team() {
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newAdd = team + 1;
        setTeam(newAdd)
    }

    const handleReduce =()=>{
        const newReduce = team - 1;
        setTeam(newReduce)
    }

    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}