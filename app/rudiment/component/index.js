import React from 'react'

import BoardContainer from '../container/BoardContainer'


const boardContainerCallback = message => {
  console.log(message)
}

const Rudiment = () => {
  return (
    <div>
      <BoardContainer callback={boardContainerCallback} />
    </div>
  )
}


export default Rudiment