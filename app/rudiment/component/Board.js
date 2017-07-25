import React from 'react'



const Board = ({ doing, sing, dance, onHop, callback }) => {
  return (
    <div>
      <h1>{doing}</h1>
      <button onClick={sing}>Sing</button>
      <button onClick={dance}>Dance</button>
      <button onClick={onHop}>Hop</button>
      <button onClick={ () => { callback(`I'm the callback of Board`) } }>callback tester</button>
    </div>
  )
}


export default Board