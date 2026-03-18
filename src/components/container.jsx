import React from 'react'
import Panes from './panes'

function Container({condata ,entryHandler}) {
  return (
    <div>
      <div className="container">
        <Panes pandata={condata} entryHandler = {entryHandler}/>
      </div>
    </div>
  )
}

export default Container
