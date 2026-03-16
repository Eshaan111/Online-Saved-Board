import React from 'react'
import Brain from './individual_cols/brain'
import Meet from './individual_cols/meet'
import Column_sections from './column_sections'

function Panes({pandata}) {
  // console.log(Object.keys(pandata))
  return (
    <>
        <div className="meetings-pane" >
            <Meet data={pandata.meetings} />
        </div>
        <Column_sections data={pandata}/>
        <div className="brain-dump">
            <Brain  data={pandata.dump} />
        </div>
    </>
  )
}

export default Panes
