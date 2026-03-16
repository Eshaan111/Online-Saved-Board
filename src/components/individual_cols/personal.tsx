import React from 'react'

function Personal() {
  return (<>
    <div className="column" id='personal-col'>
                <div className="column-header personal">🎯 Personal</div>
                <div className="tasks-container" id = 'personal-container'>
                    <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">30 min yoga session</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                    <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">Read 2 chapters of book</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                </div>
                <button className="column-add-btn" id='personal-add-btn'>+ Add</button>
            </div>
    </>
  )
}

export default Personal
