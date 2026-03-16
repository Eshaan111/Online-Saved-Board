import React from 'react'
import Home from './individual_cols/home'
import Personal from './individual_cols/personal'
import Work from './individual_cols/work'

function column_sections() {
  return (
    <>
      <div className="columns-section">
                  <Work/>
                  <Home/>
                  <Personal/>
        </div>
    </>
  )
}

export default column_sections
