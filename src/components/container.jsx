import React from 'react'
import Panes from './panes'

function Container({condata}) {
  return (
    <div>
      <div className="container">
        <Panes pandata={condata}/>
      </div>
    </div>
  )
}

export default Container
