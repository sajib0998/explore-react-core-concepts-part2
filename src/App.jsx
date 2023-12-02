
import './App.css'
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Counter from './counter';

function App() {

  function handleClick(){
    alert('button click');
  }
  const handleButton =()=>{
    alert('balda thik moto kor');
  }

  // bejailla akta sistem
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
     
      <h3>React Core Concepts 2</h3>

      <Users></Users>

      <Friends></Friends>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleButton} type="submit">Click2</button>
      <button onClick={()=> alert('gore boia val sero')}>third</button>
      <button onClick={()=>addToFive(3)}>four</button>
    </>
  )
}

export default App
