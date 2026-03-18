import React from 'react'
import Brain from './individual_cols/brain'
import Meet from './individual_cols/meet'
import Column_sections from './column_sections'

function Panes({pandata, entryHandler}) {
  // console.log(Object.keys(pandata))
  return (
    <>
        <div className="meetings-pane" >
            <Meet data={pandata.meetings} entryHandler = {entryHandler} />
        </div>
        <Column_sections data={pandata}  entryHandler = {entryHandler} />
        <div className="brain-dump">
            <Brain  data={pandata.dump}  entryHandler = {entryHandler} />
        </div>
    </>
  )
}

export default Panes
