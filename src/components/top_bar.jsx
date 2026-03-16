import React from 'react'

function Top_bar() {
  return (
    <div className="top-bar">
        <h1>✨ Daily Planner</h1>
        <div className="controls">
            <div className="email-title" id="email-title">user@example.com</div>
            <button className="btn btn-change" id="btn-change">🔄</button>
            <button className="btn btn-save" id="btn-save">💾 Save</button>
        </div>
    </div>
  )
}

export default Top_bar
