import React from 'react'
import Home from './individual_cols/home'
import Personal from './individual_cols/personal'
import Work from './individual_cols/work'

function column_sections({data, entryHandler}) {
  return (
    <>
      <div className="columns-section">
                  <Work data={data.work} entryHandler={entryHandler}/>
                  <Home data={data.home} entryHandler={entryHandler}/>
                  <Personal data={data.personal} entryHandler={entryHandler}/>
        </div>
    </>
  )
}

export default column_sections
